import React, { useEffect } from "react";

import Certification from "./Certification";
import Community from "./Community";
import CreativeAssignment from "./CreativeAssignment";
import Curriculum from "./Curriculum";
import Footer from "./Footer";
import Home from "./Home";

import PeerLearning from "./PeerLearning";
import DesignHackathons from "./DesignHackathons";
import { useState } from "react";
// import Register from "../Components/Register";
// import Login from "../Components/Login";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
import Onboard from "../Components/Onboard";

const Main = () => {
  // const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const myParam = searchParams.get("register");
    if (myParam === "true") {
      setShowSign(true);
      setSearchParams((params) => {
        params.delete("register");
        return params;
      });
    }
  }, []);

  return (
    <>
      {showSign && <Onboard setShowSign={setShowSign} />}
      <Home setShowSign={setShowSign} />
      <div
        className="whatsapp-const"
        onClick={() => {
          window.fbq("track", "AddtoWhatsapp");
          if (Cookies.get("user_email")) {
            window.open(`https://${window.location.hostname}/onboard`);
          } else {
            setShowSign(true);
          }
        }}
      >
        <span>Register Now For Free</span>
      </div>
      <PeerLearning />
      <DesignHackathons />
      <CreativeAssignment />
      <Certification />
      <Curriculum />
      <Community setShowSign={setShowSign} />
      <Footer setShowSign={setShowSign} />
    </>
  );
};

export default Main;
