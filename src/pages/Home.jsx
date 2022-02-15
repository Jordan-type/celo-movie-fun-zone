import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import HeroBg from "../assets/images/hero_bg.jpg";
import SliderHome from "../components/Slider/SliderHome";

export default function Home() {
  return (
    <>
      <Header />
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
