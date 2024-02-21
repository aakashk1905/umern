import React from "react";
import Hero from "./Hero";
import Navbar1 from "../Components/Navbar1";
import "./Styles/Home.css";

const Home = ({ setShowSign }) => {
  return (
    <>
      <section className="home-container" id="home">
        <Navbar1 setShowSign={setShowSign} />
        <Hero setShowSign={setShowSign} />
      </section>
    </>
  );
};

export default Home;
