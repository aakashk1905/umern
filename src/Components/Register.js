import React, { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../Assests/logo-login.svg";
import cross from "../Assests/cross-log.svg";
import CryptoJS from "crypto-js";

const Register = ({ setShowSign, setShowLogin }) => {
  const otpsent = Cookies.get("otpsent");
  const cookieDataString = Cookies.get("getdata");
  const cookieData = cookieDataString ? JSON.parse(cookieDataString) : {};

  const [email, setEmail] = useState(cookieData.email || "");
  const [password, setPassword] = useState(cookieData.password || "");
  const [name, setName] = useState(cookieData.name || "");
  const [mobile, setMobile] = useState(cookieData.mobile || "");

  const [timer, setTimer] = useState(40);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [otp, setOtp] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [enterOtp, setEnterOtp] = useState(otpsent ? otpsent : false);

  async function handleSend() {
    if (mobile.length < 10) {
      alert("Please enter a valid number");
      return;
    }
    try {
      var url = `${process.env.REACT_APP_API_URL}/user/regotp?number=${mobile}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otpsent: Cookies.get("otpsent"),
        }),
      });
      const data = await response.json();

      if (data.success) {
        alert("Otp Sent To Whatsapp");
        Cookies.set("otpsent", data.key, { expires: 10 / (24 * 60) });
        setEnterOtp(true);
        setTimer(40);
        setIsTimerActive(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later!!!");
    }
  }

  function decryptData(encryptedData, key) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }

  async function registerUser(event) {
    event.preventDefault();
    if (!email || !mobile || !password || !name) {
      alert("Please Enter All Details!!!");
      return;
    }
    if (password.lenght < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    setDisabled(true);
    const data = {
      email,
      mobile,
      password,
      name,
    };
    Cookies.set("getdata", JSON.stringify(data));

    if (!enterOtp) {
      handleSend();
      setDisabled(false);
    } else {
      const dotp = decryptData(
        Cookies.get("otpsent"),
        "justEncryptOtpAndSendEOeo12@#"
      );
      if (dotp !== otp) {
        alert("Wrong Or Expired Otp!!!");
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            mobile,
            mern: true,
          }),
        }
      );

      const data = await response.json();
      setDisabled(false);
      if (data.success) {
        alert("Successfully registered");
        Cookies.remove("getdata");
        setShowSign(false);
        setShowLogin(false);
        Cookies.set("user_name", data.newUser.name);
        Cookies.set("user_email", data.newUser.email);
        window.location.href = `https://${window.location.hostname}/onboard`;
      } else {
        alert(data.error);
      }
    }
  }
  const handlenumchange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setMobile(value);
    }
  };

  useEffect(() => {
    let interval;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(interval);
            setIsTimerActive(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerActive]);

  return (
    <div className="login-cont">
      <form onSubmit={registerUser} className="login-inner-cont">
        <div className="l-logo-cont">
          <img src={logo} alt="logo" />

          <div
            className="l-cross-cont"
            onClick={() => {
              setShowLogin(false);
              setShowSign(false);
            }}
          >
            <img src={cross} alt="cross" />
          </div>
        </div>
        {!enterOtp && (
          <div className="inp-conts">
            <div className="inp-cont">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="l-inp"
              />
            </div>
            <div className="inp-cont">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="l-inp"
              />
            </div>
            <div className="inp-cont">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password(min 6 letters)"
                className="l-inp"
              />
            </div>
            <div className="inp-cont">
              <input
                type="tel"
                value={mobile}
                onChange={handlenumchange}
                placeholder="Phone Number"
                className="l-inp"
              />
            </div>
          </div>
        )}
        {enterOtp && (
          <>
            <div className="inp-otp-text">
              An OTP has been sent to the WhatsApp number <br />
              <u
                className="inp-otp-text-change"
                onClick={() => {
                  setEnterOtp(false);
                  Cookies.remove("sentotp");
                }}
              >
                Change Number...
              </u>
            </div>

            <div className="inp-cont">
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setOtp(e.target.value);
                  }
                }}
                maxLength={4}
                placeholder="Enter Otp"
                className="l-inp"
              />
            </div>
            {isTimerActive && (
              <div className="inp-cont otp-res">
                Resend OTP in {timer} seconds...
              </div>
            )}
            {!isTimerActive && (
              <div className="inp-cont otp-res">
                <u onClick={handleSend} className="resend-otp">
                  Resend
                </u>
              </div>
            )}
          </>
        )}

        <button type="submit" className={`l-btn ${disabled && "disable-btn"}`}>
          SignUp
        </button>

        <div className="l-new">
          Already have an Account?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowSign(false);
              setShowLogin(true);
            }}
          >
            Login
          </b>
        </div>
      </form>
    </div>
  );
};

export default Register;
