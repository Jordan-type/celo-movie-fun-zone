import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import HeroBG from "../assets/images/hero2Background.jpg";

function Movies() {
  return (
    <>
      <Header />
      <Hero
        backgroundImage={HeroBG}
        sliderVisible={false}
        titleVisible={true}
        title={"MOVIES LIST"}
      />
      <main className="content">
        <h2 className="content__h2">Movies</h2>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
