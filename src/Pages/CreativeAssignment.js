import "./Styles/CreativeAssignment.css";
// import creativeAssignment from "../Assests/creative-assignment.png"
import Assignment1 from "../Assests/assignment1.png";
import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";

const CreativeAssignment = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    const updateMousePosition = (ev = MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const isInView = useInView(targetRef);

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
  };
  return (
    <>
      <style jsx="{value.toString()}">
        {`
          .creative-container {
            background-image: radial-gradient(
              circle farthest-side at var(--x, 100px) var(--y, 100px),
              #002b46 0%,
              transparent 100%
            );
          }
        `}
      </style>
      <motion.div
        ref={targetRef}
        className="creative-container"
        id="creative"
        initial="initial"
        animate="animate"
      >
        <div className="creative-left">
          <motion.div className="creative-text-container" variants={stagger}>
            <motion.div
              className="creative-headings"
              variants={fadeInUp}
              animate={{
                y: isInView ? 0 : 60,
                opacity: isInView ? 1 : 0,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
            >
              <div className="creative-heading">1:1 Mentorship</div>
              <span className="creative-heading-col">& Resume Assistance</span>
            </motion.div>
            <motion.div
              className="creative-para"
              variants={fadeInUp}
              animate={{
                y: isInView ? 0 : 60,
                opacity: isInView ? 1 : 0,
                transition: {
                  duration: 0.6,
                  delay: 0.6,
                },
              }}
            >
              <p>
                Get your doubts of course & assignments resolved immediately
                with your mentor and build a strong Resume
              </p>
            </motion.div>
          </motion.div>
          <div className="creative-cards-container">
            <Tilt
              className="tilt"
              gyroscope={false}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000000}
              transitionSpeed={1500}
            >
              <div className="creative-cards creative-card1">
                <span className="creative-card-text">
                  1:1 instant Mentorship
                </span>
              </div>
            </Tilt>
            <Tilt
              gyroscope={false}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000000}
              transitionSpeed={1500}
            >
              <div className="creative-cards creative-card2">
                <span className="creative-card-text">
                  Project building and review session
                </span>
              </div>
            </Tilt>
          </div>
        </div>
        <div className="creative-right">
          <motion.div
            className="creative-image-container"
            variants={fadeInUp}
            animate={{
              y: isInView ? 0 : 60,
              opacity: isInView ? 1 : 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
          >
            <img src={Assignment1} alt="creative-assignment" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CreativeAssignment;
