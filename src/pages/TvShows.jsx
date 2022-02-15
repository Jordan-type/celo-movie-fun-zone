import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import HeroBG from "../assets/images/hero2Background.jpg";

function TvShows() {
  return (
    <>
      <Header />
      <Hero
        backgroundImage={HeroBG}
        sliderVisible={false}
        titleVisible={true}
        title={"TvShows"}
      />
      <main className="content">
        <h1>Hello TvShows</h1>
      </main>
      <Footer />
    </>
  );
}

export default TvShows;
