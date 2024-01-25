import "./Styles/PeerLearning1.css";
import "./Styles/PeerLearning.css";
import Peer from "../Assests/peer2.jpg";
import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
const PeerLearning = () => {
  const bgRef = useRef(null);
  useEffect(() => {
    const updateMousePosition = (ev = MouseEvent) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = ev;
      bgRef.current.style.setProperty("--x", `${clientX}px`);
      bgRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <style jsx="{value.toString()}">
        {`
          .peer-container {
            background-image: radial-gradient(
              circle farthest-side at var(--x, 100px) var(--y, 100px),
              #002b46 0%,
              transparent 100%
            );
          }
        `}
      </style>
      <div ref={bgRef} className="peer-container" id="peer">
        <div className="peer-left">
          <div className="peer-text-container">
            <div className="peer-headings">
              <div className="peer-heading">Peer</div>
              <div className="peer-heading under">Learning</div>
            </div>
            <div className="peer-para">
              <p>
                A collaborative learning approach where Developers learn from
                each other through sharing ideas, feedback, and experiences.
              </p>
            </div>
          </div>
          <div className="peer-cards-container">
            <div className="peer-cards peer-card-selected">
              <span className="peer-card-text">
                Learn Complete MERN Stack with your peers
              </span>
            </div>
            <div className="peer-cards peer-card-selected">
              <span className="peer-card-text">{`Participate in challenges together`}</span>
            </div>
            <div className="peer-cards peer-card-selected">
              <span className="peer-card-text">
                Collaborative Group Projects
              </span>
            </div>
          </div>
        </div>
        <div className="peer-right">
          <Tilt
            gyroscope={false}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={1000}
            transitionSpeed={1500}
            scale={1.02}
            className="tilt"
          >
            <div className="p-image-container">
              <img src={Peer} alt="Peer" />
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default PeerLearning;
