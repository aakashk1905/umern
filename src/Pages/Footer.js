import React from "react";
import "./Styles/Footer.css";
import { useEffect, useRef } from "react";
import Cookies from "js-cookie";
const Footer = ({ setShowSign }) => {
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
  return (
    <>
      <style jsx="{value.toString()}">
        {`
          .footer-container {
            background-image: radial-gradient(
              circle farthest-side at var(--x, 100px) var(--y, 100px),
              #002b46 0%,
              transparent 100%
            );
          }
        `}
      </style>
      <div ref={targetRef} className="footer-container">
        <div className="footer-headings">
          <div>
            <span>{"Be\u00A0"}</span>
            <span style={{ color: "#7B9E89" }}>{"Inspired\u00A0"}</span>
            <span>{"Be\u00A0"}</span>
            <span style={{ color: "#D95D39" }}>Creative </span>
          </div>
          <div>
            <span>
              Develop your future with
              <span style={{ color: "#F0A202" }}>{"\u00A0Us!!"}</span>{" "}
            </span>
          </div>
          <div
            className="footer-whatsapp"
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
        <div className="footer-links">
          <div className="footer-links-cols">
            <div style={{ fontSize: 20, fontWeight: 700 }}>UpskillMafia</div>
          </div>
          <div className="footer-links-cols">
            <div style={{ fontSize: 17, fontWeight: 700 }}>Contact us at</div>
            <div>
              <a href="tel:+917988800474">+91-7988800474</a>
            </div>
            <div>
              <a href="mailto: upskillmafia@gmail.com">
                upskillmafia@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-links-cols">
            <div>
              <a href="#resources">Free Development Resources</a>
            </div>
            <div>
              <a href="#peer">Peer Learning</a>
            </div>
            <div>
              <a href="#community">Community</a>
            </div>
          </div>
          <div className="footer-links-cols">
            <div>
              <a href="#hackathon">Hackathons</a>
            </div>
            <div>
              <a href="#certif">Certification</a>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyright">
          <span>Copyright © 2023 Tutedude pvt ltd. All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
