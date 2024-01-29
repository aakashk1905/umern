import "./App.css";
import Certification from "./Pages/Certification";
import Community from "./Pages/Community";
import CreativeAssignment from "./Pages/CreativeAssignment";
import Curriculum from "./Pages/Curriculum";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import PeerLearning from "./Pages/PeerLearning";
import DesignHackathons from "./Pages/DesignHackathons";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/mern"
          element={
            <>
              <Home />
              <a
                href="https://chat.whatsapp.com/EV49XShflSiGph4413zcJL"
                target="_blank"
                rel="noreferrer"
                className="anchor"
              >
                <div
                  className="whatsapp-const"
                  onClick={() => window.fbq("track", " AddtoWhatsapp")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1064_4060)">
                      <path
                        d="M1.43141 11.5722C1.43086 13.5404 1.94512 15.4621 2.92296 17.156L1.33789 22.9433L7.26053 21.3904C8.89865 22.2822 10.734 22.7494 12.5992 22.7496H12.6041C18.7612 22.7496 23.7733 17.7393 23.7759 11.5811C23.7771 8.59695 22.616 5.79089 20.5066 3.67976C18.3974 1.56881 15.5924 0.405659 12.6036 0.404297C6.44575 0.404297 1.43404 5.41428 1.4315 11.5722"
                        fill="url(#paint0_linear_1064_4060)"
                      />
                      <path
                        d="M1.0327 11.5685C1.03206 13.6075 1.56475 15.5979 2.57745 17.3524L0.935547 23.3472L7.07055 21.7387C8.76094 22.6603 10.6642 23.1462 12.6008 23.147H12.6058C18.9838 23.147 24.1759 17.9565 24.1787 11.5778C24.1797 8.48646 22.9769 5.57953 20.7921 3.39277C18.6069 1.20628 15.7015 0.00127111 12.6058 0C6.22662 0 1.03524 5.18975 1.0327 11.5685ZM4.68622 17.0503L4.45715 16.6866C3.4942 15.1555 2.98593 13.3861 2.98666 11.5693C2.98875 6.26738 7.30361 1.95387 12.6094 1.95387C15.1789 1.95496 17.5936 2.9566 19.4098 4.77392C21.226 6.59142 22.2253 9.00743 22.2247 11.5771C22.2223 16.8789 17.9074 21.193 12.6058 21.193H12.602C10.8757 21.1921 9.18267 20.7285 7.70619 19.8524L7.35482 19.6441L3.71419 20.5986L4.68622 17.0502V17.0503Z"
                        fill="url(#paint1_linear_1064_4060)"
                      />
                      <path
                        d="M9.71262 6.73195C9.49599 6.25047 9.268 6.24076 9.06199 6.23231C8.8933 6.22505 8.70045 6.2256 8.50779 6.2256C8.31495 6.2256 8.00162 6.29814 7.73677 6.58732C7.47166 6.87677 6.72461 7.57624 6.72461 8.99888C6.72461 10.4216 7.76083 11.7965 7.90529 11.9896C8.04992 12.1824 9.90574 15.1953 12.8449 16.3543C15.2876 17.3176 15.7847 17.126 16.3148 17.0777C16.8451 17.0296 18.0258 16.3784 18.2666 15.7032C18.5077 15.028 18.5077 14.4493 18.4354 14.3284C18.3631 14.2079 18.1703 14.1355 17.8811 13.991C17.5919 13.8463 16.1702 13.1468 15.9052 13.0503C15.6401 12.9538 15.4473 12.9057 15.2545 13.1953C15.0616 13.4843 14.5079 14.1355 14.3391 14.3284C14.1705 14.5217 14.0017 14.5457 13.7126 14.4011C13.4233 14.256 12.492 13.951 11.3871 12.966C10.5275 12.1995 9.94714 11.253 9.77845 10.9635C9.60975 10.6744 9.76038 10.5177 9.90537 10.3736C10.0353 10.244 10.1946 10.0359 10.3394 9.86714C10.4835 9.69826 10.5317 9.57778 10.6281 9.38493C10.7246 9.19191 10.6763 9.02303 10.6041 8.8784C10.5317 8.73376 9.96975 7.30368 9.71262 6.73195Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1064_4060"
                        x1="1123.24"
                        y1="2254.31"
                        x2="1123.24"
                        y2="0.404297"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1FAF38" />
                        <stop offset="1" stopColor="#60D669" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1064_4060"
                        x1="1163.09"
                        y1="2334.73"
                        x2="1163.09"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F9F9F9" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                      <clipPath id="clip0_1064_4060">
                        <rect
                          width="23.2431"
                          height="23.4247"
                          fill="white"
                          transform="translate(0.935547)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Join the Whatsapp Community!</span>
                </div>
              </a>
              <PeerLearning />
              <DesignHackathons />
              <CreativeAssignment />
              <Certification />
              <Curriculum />
              <Community />
              <Footer />
            </>
          }
        ></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
