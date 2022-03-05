import React, {useState} from "react";
import { useGetWidth } from "../hooks/useGetWidth";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "./Button/Button";
// import logo from "../assets/images/logo.png"
import Search from "../components/Search/Search";
import SearchContainer from "./Search/SearchContainer";


export default function Header({ web3Handler, account, balance, explorerURL }) {

  const [searchOpen, setSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpointTablet = 960;

  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  useGetWidth(setWindowWidth)



  return (
    <div className="header">
      {/* <div className="header__item">

      </div> */}
            {windowWidth > breakpointTablet && (
      <div className="header__item">
          <Navbar /> 
      </div>
    )}

      <div className="header__item">
        <Link className="header__link" to='/'>
          {/* <img src={logo} alt='' /> */}
        </Link>
      </div>

      <div className="header__item">
        <Search className={'search-icon'} open={handleToggleSearch} />
        {windowWidth > breakpointTablet && (
        <>
        {account ? (
            <a 
              href={`${explorerURL}/address/${account}`}
              className="button--red"
              target="_blank"
              rel="noopener noreferrer">
              {account.slice(0, 5) + '...' + account.slice(38, 42)}

              <span style={{padding: 2}}> 
                    <button className="button--red">
                      Balance: {balance} cUSD
                    </button>
              </span>
            </a>

          ) : (
          
          <Button onClick={ web3Handler } className="button--red" content="Connect Wallet" tabIndex="4" /> 

          )}
         {/* <Button className="button--black" content="Sign in" tabIndex="3" /> */}
         
        </>
        )}
      </div>
      {searchOpen && <SearchContainer close={closeSearch} open={'open'} />}
    </div>
  );
}
