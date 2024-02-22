import "./Styles/Community.css";
import Cookies from "js-cookie";
const Community = ({ setShowSign }) => {
  return (
    <>
      <div className="community-container" id="community">
        <div className="community-right">
          <div className="community-right-container">
            <div className="community-right-cards-container">
              <div className="community-right-card odd">
                <span>Connect with Coding Enthusiasts</span>
              </div>
              <div className="community-right-card even">
                <span>Live Development & Discussion Sessions</span>
              </div>
              <div className="community-right-card odd">
                <span>Collaborative Project Opportunities</span>
              </div>
              <div className="community-right-card even">
                <span>Peer Code Reviews</span>
              </div>
              <div className="community-right-card odd">
                <span>Exclusive Leads & Job Alerts!!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="community-left">
          <div className="community-text-container">
            <div className="community-headings">
              <div className="community-heading">Community</div>
              <div className="community-heading-col">Awaits!!</div>
            </div>
            <div className="community-para">
              <p>
                Unlock the benefits of a proactive Learning Community for FREE!
                Seize the opportunity to build something extraordinary, connect
                with fellow developers, and enhance your skills. Don't hesitate
                – join the community today and embark on your learning journey.!{" "}
              </p>
            </div>
          </div>
          <div className="community-cards-container">
            <div
              className="community-whatsapp"
              onClick={() => {
                window.fbq("track", "AddtoWhatsapp");
                if (Cookies.get("user_email")) {
                  window.open(`https://${window.location.hostname}/onboard`);
                } else {
                  setShowSign(true);
                }
              }}
            >
              <span>Register Now For Free!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
