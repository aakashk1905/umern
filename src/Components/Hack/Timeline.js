// Timeline.js
import React from "react";
import "./Timeline.css";
// import rocket from '../../Assests/rocket.png'

const Timeline = ({ setShowForm }) => (
  <div className="timeline-cont">
    <div className="timeline-head-cont">Timeline</div>
    <div className="timeline-cards-cont">
      <div className="timeline-cards-left">
        <Event
          day={"DAY 1 & 2"}
          title={"Get Set Go!"}
          description={
            "Launching ceremony of WEB Dev Hackathon,Brainstorm with your team & work on solution."
          }
          date={"08th-09th Mar @7:00 PM"}
        />
        <Event
          day={"Day 3"}
          title={"Crunch time!"}
          description={
            " Submit your Work as the Hackathon comes to an epic close."
          }
          date={"10th Mar - 10:00 PM"}
          classname={"timeline-d2"}
        />
        <Event
          day={"Day 4"}
          classname={"timeline-d3"}
          title={"Project Building Session!"}
          description={
            "Boost Resume and ace project building in our Live Session."
          }
          date={"Date-To Be Announced"}
        />
      </div>
      <div className="timeline-cards-right">
        <Event
          day={"Day 4"}
          classname={"timeline-d2"}
          title={"Project Building Session!"}
          description={
            "Boost Resume and ace project building in our Live Session."
          }
          date={" Date-To Be Announced"}
        />
        <Event
          day={"Day 3"}
          classname={"timeline-d3"}
          title={"Crunch time!"}
          description={
            "Submit your Work as the Hackathon comes to an epic close."
          }
          date={"10th Mar - 10:00 PM"}
        />
        <Event
          day={"Day 5"}
          title={"Final reveal!!"}
          description={
            "Winners will be unvieled after  a live session by mentor and thier masterpieces will shine on our  official “Upskill mafia”  IG page."
          }
          date={"Date-To Be Announced"}
        />
      </div>
    </div>
    <div className="timeline-cta-cont">
      <div className="time-cta-text">
        🚀 Ready to unleash your creative genius?{" "}
      </div>
      <div className="time-cta-btn" onClick={() => setShowForm(true)}>
        Register Now For Free
      </div>
      {/* <div className='time-cta-btn' onClick={()=>alert("Slots Full!!! Wait till Next Hackathon")}>Register Now</div> */}
    </div>
  </div>
);

const Event = ({ day, title, description, date, classname }) => (
  <div className={`t-event-cont ${classname ? classname : ""}`}>
    <div className="t-day">{day}</div>
    <div className="t-event-inner-cont">
      <div className="t-title">{title}</div>
      <div className="t-des"> {description} </div>
      <div className="t-dt"> {date}</div>
    </div>
  </div>
);

export default Timeline;
