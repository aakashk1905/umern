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
          day={"DAY 1"}
          title={"Get Set Go!"}
          description={
            "Lauch of hackathon in different time slots( Onboarding session + dashboard introduction)"
          }
          date={"30th April 2024"}
        />
        <Event
          day={"Day 2"}
          title={"Crunch time!"}
          description={
            "Launch of problem statement on Upskill Mafia Web development dashboard"
          }
          date={"31st Mar - 11:00 AM"}
          classname={"timeline-d2"}
        />
        <Event
          day={"Day 2 - 8"}
          classname={"timeline-d3"}
          title={"The Journey!"}
          description={
            "You can use this campus for solving the hackathon problem statement with your team"
          }
          date={"31st mar - 06 Apr"}
        />
      </div>
      <div className="timeline-cards-right">
        <Event
          day={"Day 2-8"}
          classname={"timeline-d2"}
          title={"The Journey!"}
          description={
            "You can use this campus for solving the hackathon problem statement with your team"
          }
          date={" 31st mar - 06 Apr"}
        />
        <Event
          day={"Day 2"}
          classname={"timeline-d3"}
          title={"Crunch time!"}
          description={
            "Submit your Work as the Hackathon comes to an epic close."
          }
          date={"31st Mar - 11:00 AM"}
        />
        <Event
          day={"Day 8"}
          title={"Submission Time!!"}
          description={"Hurry up  Submit your solutions on dashboard"}
          date={"06-April 10:00 PM"}
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
