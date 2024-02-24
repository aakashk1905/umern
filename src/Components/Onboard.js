import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../Assests/logo-login.svg";
import cross from "../Assests/cross-log.svg";

const Onboard = ({ setShowSign }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [disabled, setDisabled] = useState(false);

  const sendNewUser = async (number) => {
    try {
      const response = await fetch(
        "https://api.interakt.ai/v1/public/message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic MGRiYUtNMDNSRlFteUJ2VGJTSkVzTVhBNnl6X2sxX2phc2JldjU3OWhSUTo=",
          },
          body: JSON.stringify({
            countryCode: "+91",
            phoneNumber: number,
            type: "Template",
            template: {
              name: "mern_onboard_msg",
              languageCode: "en",
              headerValues: [
                "https://s3.ap-south-1.amazonaws.com/upskillmafia.com/onboard.mp4",
              ],
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Something went Wrong");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  async function loginUser(event) {
    setDisabled(true);
    if (event) event.preventDefault();

    if (!email || !name || !number) {
      alert("Please Fill All Details");
      setDisabled(false);
      return;
    }

    try {
      await sendNewUser(number);
    } catch (err) {
      console.log(err);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("name", name);
    urlencoded.append("wpNum", number);
    const now = new Date();
    const istTime = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    console.log(istTime);
    urlencoded.append("date", istTime);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwodoPEkWGH8LCsVvU9knksm2Wsw1I9NjJJ8GJhv1Nf9fxABcz2hZ3mOkgQMcaC_JzS/exec",
      requestOptions
    );

    if (response.ok) {
      alert("Registered successfully!!");
      setDisabled(false);

      Cookies.set("user_name", name);
      Cookies.set("user_email", email);
      window.location.href = `https://${window.location.hostname}/onboard`;
    } else {
      alert("Something Went Wrong Please Try Again");
      setDisabled(false);
    }
  }
  return (
    <div className="login-cont">
      <form
        onSubmit={(e) => {
          if (!disabled) loginUser(e);
        }}
        className="login-inner-cont"
      >
        <div className="l-logo-cont">
          <img src={logo} alt="logo" />
          <div
            className="l-cross-cont"
            onClick={() => {
              setShowSign(false);
            }}
          >
            <img src={cross} alt="cross" />
          </div>
        </div>
        <div className="onb-head">Register For Onboarding Session</div>
        <div className="onb-text">
          ( Joining Link would be sent on the contact provided )
        </div>

        <div className="inp-cont">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="l-inp"
          />
        </div>
        <div className="inp-cont">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="l-inp"
          />
        </div>
        <div className="inp-cont">
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter Whatsapp Number"
            className="l-inp"
          />
        </div>

        <button type="submit" className={`l-btn ${disabled && "disable-btn"}`}>
          {disabled ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Onboard;

// https://script.google.com/macros/s/AKfycbyyo5WmOWpeVZTC-4hiqRRqY05OvFtbpMxtFyUIleNChG4zAm-Pa2K5GNsKzDmvGskJ/exec

// document.getElementById("myForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     var formData = new FormData(this);
//     fetch("https://script.google.com/macros/s/AKfycbzlk4zPH3eIYjVWk0WPcErrNfwvSRogfqwvXJl2pW0e8OqbFh_frghpXamPDIjyYuSlLw/exec", {
//       method: "POST",
//       body: formData
//     })
//     .then(response => response.text())
//     .then(text => alert("Details Accepted, Make Payment To book slot.")).then(()=>{window.location.href = "https://abhigyaiasacademy.com/Payment.php"})
//     .catch(error => console.error(error));
//   });
