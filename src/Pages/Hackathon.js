import React, { useEffect, useState } from "react";
import HackHero from "../Components/Hack/HackHero";
import HackWhy from "../Components/Hack/HackWhy";
import Hackstart from "../Components/Hack/Hackstart";
import HackHow from "../Components/Hack/HackHow";
import HackReward from "../Components/Hack/HackReward";
import Timeline from "../Components/Hack/Timeline";
import Hackfaq from "../Components/Hack/Hackfaq";
import HackFooter from "../Components/Hack/HackFooter";
import MultiStepForm from "../Components/Hack/MultiStepForm";
const Hackathon = () => {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const hackHeroBottom = document
        .querySelector(".hack-hero-cont")
        .getBoundingClientRect().bottom;

      if (window.scrollY < hackHeroBottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showForm && (
        <div className={`form-box ${showForm ? "show" : ""}`}>
          <MultiStepForm setShowForm={setShowForm} />
        </div>
      )}
      <div
        className={`hack-btn mob-btn-hack ${showButton ? "hideBtnMob" : ""}`}
        onClick={() => setShowForm(true)}
      >
        Register Now !
      </div>
      {/* <div className={`hack-btn mob-btn-hack ${showButton ? 'hideBtnMob' : ''}`} onClick={() => alert("Slots Full!!! Wait till Next Hackathon")}>Register Now !</div> */}
      <HackHero setShowForm={setShowForm} />
      <HackWhy />
      <Hackstart setShowForm={setShowForm} />
      <HackHow />
      <HackReward />
      <Timeline setShowForm={setShowForm} />
      <Hackfaq />
      <HackFooter />
    </>
  );
};

export default Hackathon;
