import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import BigNumber from "bignumber.js";

import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import HeroBg from "../assets/images/hero_bg.jpg";
import SliderHome from "../components/Slider/SliderHome";

import config from '../config.json';
import { ALFAJORES_PARAMS } from '../config.network';


const ERC20_DECIMALS = 18;


export default function Home() {
  const [web3, setWeb3] = useState(null);
  const [kit, setKit] = useState(null);

  const [account, setAccount] = useState(null);
  const [accountBalanceCelo, setAccountBalanceCelo] = useState(null);
  const [accountBalanceCeloUSD, setAccountBalanceCeloUSD] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [message, setMessage] = useState(null);

  const [explorerURL, setExplorerURL] = useState('https://explorer.celo.org/');

  const loadWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      let kit = newKitFromWeb3(web3);

      const accounts = await web3.eth.getAccounts();
      console.log("all accounts", accounts);

      if (accounts.length > 0) {
				setAccount(accounts[0])
			} else {
				setMessage('Please connect with MetaMask')
			}

      const networkId = await web3.eth.net.getId()
			setNetworkId(networkId)

      console.log("networkId", networkId);

      if (networkId !== 5777) {
        setExplorerURL(config.NETWORKS[networkId].explorerURL);
      }

      // handle blockchain data loading 


      window.ethereum.on('accountsChanged', function (accounts) {
				setAccount(accounts[0])
				setMessage(null)
			})

			window.ethereum.on('chainChanged', (chainId) => {
				// Handle the new chain.
				// Correctly handling chain changes can be complicated.
				// We recommend reloading the page unless you have good reason not to.
				window.location.reload();
			})

      setKit(kit);
    }
  }

  // get the balance of the account
  const getBalance = async () => {
    try {
      const balance = await kit.getTotalBalance(account);
      const celoBalance = balance.CELO.shiftedBy(-ERC20_DECIMALS).toFixed(2);
      const cUSDBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);

      console.log("balance", balance);
      console.log("celoBalance", celoBalance);
      console.log("cUSDBalance", cUSDBalance);

      setAccountBalanceCelo(celoBalance);
      setAccountBalanceCeloUSD(cUSDBalance);
    } catch (error) { 
      console.log(error);
    }

  }


  // login/connect to web3
  const web3Handler = async () => {

    window.ethereum.request({ method: "wallet_addEthereumChain", params: [ALFAJORES_PARAMS],});

    if (web3) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0])
    }
  }

  useEffect(() => {
    loadWeb3();
    getBalance();
  },[account])

  return (
    <>
      <Header web3Handler={web3Handler} account={account} balance={accountBalanceCeloUSD} explorerURL={explorerURL}/>
      <Hero
        backgroundImage={HeroBg}
        sliderVisible={true}
        titleVisible={false}
      />
      <main className="content">
        <h2 className="content__h2">Trending Now</h2>
        <SliderHome />
      </main>
      <Footer />
    </>
  );
}
