import React from "react";
import "./Styles/Hero.css";
import cardimg1 from "../Assests/frame-39740@2x.png";
import cardimg2 from "../Assests/frame-39741@2x.png";
import cardimg3 from "../Assests/frame-39742@2x.png";
import cardimg4 from "../Assests/frame-39743@2x.png";
import TextSpan from "../Components/TextSpan";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
const Hero = ({ setShowSign }) => {
  const master = "Master ".split("");
  let easeing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easeing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: easeing,
      },
    },
  };
  const btnGroup = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.6, ease: easeing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing,
      },
    },
  };
  return (
    <div>
      <motion.div
        className="hero-container"
        initial="initial"
        animate="animate"
      >
        <div className="hero-heading-container">
          <motion.div className="hero-heading" variants={fadeInUp}>
            <motion.div className="letter-box">
              {master.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>

            <motion.div className="letter-box">
              {"MERN WEB DEV".split("").map((letter, index) => {
                return (
                  <TextSpan key={index} className="col">
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            <motion.div className="letter-box">
              {" With ".split("").map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            <motion.div className="letter-box">
              {"Your ".split("").map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            <motion.div className="letter-box">
              {"Peers ".split("").map((letter, index) => {
                return (
                  <TextSpan key={index} className="col">
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            <motion.div className="letter-box">
              {"For ".split("").map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
            <motion.div className="letter-box">
              {"Free".split("").map((letter, index) => {
                return (
                  <TextSpan key={index} className="col">
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </motion.div>
          </motion.div>
          {/* <motion.div className='hero-heading' variants={fadeInUp}> */}

          <motion.div className="hero-heading-p" variants={fadeInUp}>
            <motion.span
              whileHover={{ scale: 1.2 }}
            >{`Master\u00A0`}</motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              style={{ color: "#D95D39" }}
            >{`MERN WEB DEV\u00A0`}</motion.span>
            {/* <motion.span whileHover={{ scale: 1.2 }}>
              {`Web Development\u00A0`}{" "}
            </motion.span> */}
            <motion.span whileHover={{ scale: 1.2 }}>
              {`With\u00A0`}{" "}
            </motion.span>
            <motion.span whileHover={{ scale: 1.2 }}>
              {`Your\u00A0`}{" "}
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              style={{ color: "#D95D39" }}
            >
              {`Peers\u00A0`}{" "}
            </motion.span>
            <motion.span whileHover={{ scale: 1.2 }}>
              {`For\u00A0`}{" "}
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              style={{ color: "#D95D39" }}
            >
              {`Free\u00A0`}{" "}
            </motion.span>
          </motion.div>

          {/* </motion.div> */}
        </div>
        <motion.div className="hero-whatsapp-container" variants={btnGroup}>
          <motion.div
            className="hero-whatsapp-subcontainer"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.fbq("track", "AddtoWhatsapp");
              if (Cookies.get("user_email")) {
                window.open(`https://${window.location.hostname}/onboard`);
              } else {
                setShowSign(true);
              }
            }}
          >
            <div className="hero-whatsapp">
              <div>Register Now For FREE!</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="hero-cards-container" variants={stagger}>
          <motion.div className="hero-cards" variants={btnGroup}>
            <img src={cardimg1} alt="cars img 1" />
            <span>Hustling Community</span>
          </motion.div>
          <motion.div className="hero-cards" variants={btnGroup}>
            <img src={cardimg2} alt="cars img 1" />
            <span>Free Curated Resources</span>
          </motion.div>
          <motion.div className="hero-cards" variants={btnGroup}>
            <img src={cardimg3} alt="cars img 1" />
            <span>Monthly Hackathons</span>
          </motion.div>
          <motion.div className="hero-cards" variants={btnGroup}>
            <img src={cardimg4} alt="cars img 1" />
            <span>Job Opportunities</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
