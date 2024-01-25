import "./Styles/DesignHackathons1.css";
import "./Styles/DesignHackathons.css";
import hackathon from "../Assests/hackathon.png";
import Tilt from "react-parallax-tilt";
const DesignHackathons = () => {
  return (
    <div className="design-container" id="hackathon">
      <div className="design-left">
        <div className="d-text-container">
          <div className="d-headings">
            <div className="heading">Monthly</div>
            <div className="heading-col">Hackathons</div>
          </div>
          <div className="d-para">
            <p>
              Participate in 48 Hours hackathons and get prizes worth{" "}
              <b style={{ color: "#f18805" }}>₹6000</b> every month.{" "}
            </p>
          </div>
        </div>

        <div className="d-cards-container">
          <div className="cards card-selected">
            <span className="card-text">
              {`Winner gets cash prize reward of ₹6000`}
            </span>
          </div>
          <div className="cards card-selected2">
            <span className="card-text">
              Boost portfolio with real world projects
            </span>
          </div>
          <div className="cards card-selected3">
            <span className="card-text">Participate with your Techie Team</span>
          </div>
        </div>
      </div>
      <div className="d-right">
        <Tilt
          gyroscope={false}
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          perspective={1000}
          transitionSpeed={1500}
          scale={1.02}
          className="tilt"
        >
          <div className="d-image-container">
            <img src={hackathon} alt="Design" />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default DesignHackathons;
