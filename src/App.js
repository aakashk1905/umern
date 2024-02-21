import "./App.css";

import error from "./Assests/error.gif";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

// import PeerLearning from "./Pages/PeerLearning";
// import DesignHackathons from "./Pages/DesignHackathons";
import { useEffect } from "react";
// import Register from "./Components/Register";
// import Login from "./Components/Login";
// import Cookies from "js-cookie";
import Main from "./Pages/Main";

function RedirectComponentMern() {
  const width = window.innerWidth;
  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");

  useEffect(() => {
    if (width >= 800) {
      if (room) {
        window.location.href = `https://cosmos.video/v/5dvm-syhq-p15w/office/r/${room}`;
      } else {
        window.location.href = "https://cosmos.video/v/5dvm-syhq-p15w/office";
      }
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function RedirectComponent2whatsapp() {
  window.location.href = "https://chat.whatsapp.com/DE144jzlgPG1n5YJ8jD3pT";
}
function RedirectComponent2Mern() {
  const width = window.innerWidth;
  // console.log(width)
  useEffect(() => {
    if (width >= 800)
      window.location.href =
        "https://cosmos.video/v/5dvm-syhq-p15w/office/r/stage";
  }, [width]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mern" element={<Main />}></Route>
        <Route path="mern/campus" element={<RedirectComponentMern />} />
        <Route path="mern/campus/stage" element={<RedirectComponent2Mern />} />
        <Route path="mern/whatsapp" element={<RedirectComponent2whatsapp />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
