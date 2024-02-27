import "./App.css";

import error from "./Assests/error.gif";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import { useEffect } from "react";
import Main from "./Pages/Main";
import Main1 from "./Dashboard/Components/Main";
import Cookies from "js-cookie";
import MentorReview from "./Dashboard/Pages/MentorReview";

function RedirectComponentMern() {
  const width = window.innerWidth;
  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");

  useEffect(() => {
    if (width >= 800) {
      const email = Cookies.get("user_email");
      if (email) {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.upskillmafia.com/api/v1/user/update-streak?email=${email}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();

            if (data.success) {
              window.location.href =
                "https://cosmos.video/v/5dvm-syhq-p15w/office";
            }
          } catch (error) {
            alert("something went wrong....Please try again!!!");
          }
        };
        fetchData();
      } else {
        window.location.href = `https://${window.location.hostname}/mern/dashboard`;
      }
    }
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
function RedirectComponent2whatsapp() {
  window.location.href = "https://chat.whatsapp.com/DE144jzlgPG1n5YJ8jD3pT";
}
function RedirectComponent2Mern() {
  const width = window.innerWidth;

  useEffect(() => {
    if (width >= 800) {
      const email = Cookies.get("user_email");

      if (email) {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.upskillmafia.com/api/v1/user/update-streak?email=${email}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();

            if (data.success) {
              window.location.href =
                "https://cosmos.video/v/5dvm-syhq-p15w/office/r/stage";
            }
          } catch (error) {
            alert("something went wrong....Please try again!!!");
          }
        };
        fetchData();
      } else {
        window.location.href = `https://${window.location.hostname}/mern/dashboard/stage`;
      }
    }
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
        <Route path="/mern">
          <Route index element={<Main />} />
          <Route path="campus" element={<RedirectComponentMern />} />
          <Route path="campus/stage" element={<RedirectComponent2Mern />} />
          <Route path="whatsapp" element={<RedirectComponent2whatsapp />} />
          <Route path="dashboard" element={<Main1 />} />
          <Route path="dashboard/mentor/review" element={<MentorReview />} />
          <Route path="dashboard/:stage" element={<Main1 />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
