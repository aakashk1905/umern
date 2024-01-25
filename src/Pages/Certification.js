import "./Styles/Certification.css";
import certification from "../Assests/Certificate 1.png";

import Tilt from "react-parallax-tilt";

const Certification = () => {
  return (
    <>
      <div className="certif-container" id="certif">
        <div className="certif-left">
          <div className="certif-text-container">
            <div className="certif-headings">
              <div className="certif-heading">
                Certification &{" "}
                <span style={{ color: "#f18805" }}>Job Opportunities!!</span>
              </div>
            </div>
            <div className="certif-para">
              <p>
                Get certified as a professional Full Stack Developer by our
                platform Upskillmafia, and open your gates for Job
                opportunities.
              </p>
            </div>
          </div>
          <div className="certif-cards-container">
            <div className="certif-cards">
              <span className="certif-card-text">
                Become a certified MERN STACK Developer
              </span>
            </div>

            <div className="certif-cards">
              <span className="certif-card-text">
                Ready to take professional Developer roles
              </span>
            </div>
          </div>
        </div>
        <div className="certif-right">
          <div className="certif-image-container">
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.1}
              gyroscope={false}
            >
              <img
                src={certification}
                className="inner-element"
                alt="Hackathon"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
