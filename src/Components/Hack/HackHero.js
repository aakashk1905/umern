import React from "react";
import "./HackHero.css";
import hacklogo from "../../Assests/hacklogo.png";
import hackstar from "../../Assests/hackstar.png";
import hackcal from "../../Assests/hackcal.png";
import hackgrp from "../../Assests/hackgrp.png";
// import hackheroleft from "../../Assests/HackHeroImg1.png";
import hackheroleft from "../../Assests/HackHeroMarathon.png";
const HackHero = ({ setShowForm }) => {
  return (
    <div className="hack-hero-cont">
      <div className="hack-logo">
        <img src={hacklogo} alt="logo" />
      </div>
      <div className="hack-hero-outer">
        <div className="hack-hero-body">
          <div className="hack-hero-left">
            <img src={hackheroleft} alt="hackhero" />
          </div>
          <div className="hack-hero-right">
            <div className="hack-head-cont">
              <div className="virtual">The Virtual</div>
              <div className="ux-hack">WEB Dev Hackathon</div>
              <img className="hackstar" src={hackstar} alt="star" />
            </div>
            <div className="hack-creativity">
              <span>Celebrating limitless Creativity!</span>
            </div>
            <div className="hack-cal-cont">
              <div className="date-hack">
                <span>
                  30th Mar -<br /> 06th Apr
                </span>
                <img className="hackcal" src={hackcal} alt="star" />
              </div>
              <div className="type-hack">
                <span>
                  Group <br />
                  Participation
                </span>
                <img src={hackgrp} className="hackgrp" alt="star" />
              </div>
            </div>
            {/* <div className='hack-btn' onClick={()=>alert("Slots Full!!! Wait till Next Hackathon")}>Register Now For FREE !</div> */}
            <div className="hack-btn" onClick={() => setShowForm(true)}>
              Register Now For FREE !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackHero;
