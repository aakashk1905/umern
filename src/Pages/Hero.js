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
          <a
            href={process.env.REACT_APP_GROUP}
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              className="hero-whatsapp-subcontainer"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                window.fbq("track", "Clicked");
                if (Cookies.get("user_email")) {
                  window.open(`https://${window.location.hostname}/onboard`);
                } else {
                  setShowSign(true);
                }
              }}
            >
              <div className="hero-whatsapp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M34.8389 29.292C34.3066 29.0186 31.6553 27.7197 31.1621 27.5439C30.6689 27.3584 30.3076 27.2705 29.9512 27.8174C29.5898 28.3594 28.5645 29.5654 28.2422 29.9316C27.9297 30.293 27.6123 30.3369 27.0801 30.0684C23.916 28.4863 21.8408 27.2461 19.7559 23.667C19.2041 22.7148 20.3076 22.7832 21.3379 20.7275C21.5137 20.3662 21.4258 20.0586 21.2891 19.7852C21.1523 19.5117 20.0781 16.8652 19.6289 15.7861C19.1943 14.7363 18.7451 14.8828 18.418 14.8633C18.1055 14.8437 17.749 14.8438 17.3877 14.8438C17.0264 14.8438 16.4453 14.9805 15.9521 15.5127C15.459 16.0547 14.0674 17.3584 14.0674 20.0049C14.0674 22.6514 15.9961 25.2148 16.2598 25.5762C16.5332 25.9375 20.0537 31.3672 25.459 33.7061C28.877 35.1807 30.2148 35.3076 31.9238 35.0537C32.9639 34.8975 35.1074 33.7549 35.5518 32.4902C35.9961 31.2305 35.9961 30.1514 35.8643 29.9268C35.7324 29.6875 35.3711 29.5508 34.8389 29.292Z"
                    fill="white"
                  />
                  <path
                    d="M45.1756 16.5234C44.0721 13.9014 42.49 11.5479 40.4734 9.52637C38.4568 7.50977 36.1033 5.92285 33.4764 4.82422C30.7908 3.69629 27.9392 3.125 24.9998 3.125H24.9021C21.9431 3.13965 19.0769 3.72559 16.3816 4.87793C13.7791 5.99121 11.4451 7.57324 9.44803 9.58984C7.45096 11.6064 5.88358 13.9502 4.79959 16.5625C3.67655 19.2676 3.11014 22.1436 3.12479 25.1025C3.13944 28.4912 3.94998 31.8555 5.46854 34.8633V42.2852C5.46854 43.5254 6.4744 44.5312 7.71463 44.5312H15.1414C18.1492 46.0498 21.5135 46.8604 24.9021 46.875H25.0047C27.9295 46.875 30.7664 46.3086 33.4373 45.2002C36.0496 44.1113 38.3982 42.5488 40.4099 40.5518C42.4265 38.5547 44.0135 36.2207 45.1219 33.6182C46.2742 30.9229 46.8601 28.0566 46.8748 25.0977C46.8894 22.124 46.3133 19.2383 45.1756 16.5234ZM37.7976 37.9102C34.3748 41.2988 29.8338 43.1641 24.9998 43.1641H24.9168C21.9724 43.1494 19.0476 42.417 16.4646 41.04L16.0545 40.8203H9.17948V33.9453L8.95975 33.5352C7.5828 30.9521 6.85037 28.0273 6.83573 25.083C6.8162 20.2148 8.67655 15.6445 12.0896 12.2021C15.4978 8.75977 20.0535 6.85547 24.9217 6.83594H25.0047C27.4461 6.83594 29.8142 7.30957 32.0457 8.24707C34.2234 9.16016 36.1765 10.4736 37.8562 12.1533C39.531 13.8281 40.8494 15.7861 41.7625 17.9639C42.7097 20.2197 43.1834 22.6123 43.1736 25.083C43.1443 29.9463 41.2351 34.502 37.7976 37.9102Z"
                    fill="white"
                  />
                </svg>
                <div>Register Now For Free!</div>
              </div>
            </motion.div>
          </a>
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
