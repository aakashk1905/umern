import "./Styles/Curriculum.css";
import { useEffect, useRef } from "react";

const Curriculum = () => {
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
          .curric-container {
            background-image: radial-gradient(
              circle farthest-side at var(--x, 100px) var(--y, 100px),
              #002b46 0%,
              transparent 100%
            );
          }
        `}
      </style>
      <div ref={targetRef} className="curric-container">
        <div className="curric-left">
          <div className="curric-text-container">
            <div className="curric-headings">
              <div className="curric-heading">Standard</div>
              <div className="curric-heading-col">Curriculum</div>
            </div>
            <div className="curric-para">
              <p>
                Explore a curated curriculum, from essential Basics of HTML, CSS
                JavaScript to Real World Project in MERN Stack with Best
                Practices.
              </p>
            </div>
          </div>
          <div className="curric-cards-container">
            <div className="curric-cards">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67"
                viewBox="0 0 70 67"
                fill="none"
              >
                <g filter="url(#filter0_d_1_706)">
                  <path
                    d="M46.6523 27.9917L38.8825 21.4721C38.2728 20.9608 37.485 20.7126 36.6923 20.7821C35.8997 20.8516 35.1671 21.2332 34.6557 21.8429C34.1444 22.4526 33.8962 23.2404 33.9658 24.0331C34.0353 24.8257 34.4169 25.5583 35.0265 26.0697L40.3111 30.5039L22.792 32.0367C21.9994 32.106 21.2668 32.4874 20.7554 33.0969C20.2439 33.7064 19.9956 34.4941 20.0649 35.2867C20.1343 36.0793 20.5157 36.812 21.1252 37.3234C21.7347 37.8348 22.5224 38.0832 23.315 38.0138L40.8341 36.4811L36.3998 41.7657C35.8882 42.3751 35.6396 43.1628 35.7087 43.9556C35.7779 44.7483 36.1591 45.481 36.7686 45.9926C37.378 46.5043 38.1657 46.7528 38.9584 46.6837C39.7511 46.6145 40.4839 46.2333 40.9955 45.6238L47.5151 37.854C48.7061 36.4308 49.2841 34.5933 49.1223 32.7445C48.9606 30.8958 48.0723 29.1866 46.6523 27.9917Z"
                    fill="#D95D39"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_706"
                    x="-9"
                    y="-12.1953"
                    width="92.0008"
                    height="92.001"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.85098 0 0 0 0 0.364706 0 0 0 0 0.223529 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_706"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_706"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="curric-card-text">
                Master Basics with Multiple Mini Projects.
              </span>
            </div>
            <div className="curric-cards">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67"
                viewBox="0 0 70 67"
                fill="none"
              >
                <g filter="url(#filter0_d_1_706)">
                  <path
                    d="M46.6523 27.9917L38.8825 21.4721C38.2728 20.9608 37.485 20.7126 36.6923 20.7821C35.8997 20.8516 35.1671 21.2332 34.6557 21.8429C34.1444 22.4526 33.8962 23.2404 33.9658 24.0331C34.0353 24.8257 34.4169 25.5583 35.0265 26.0697L40.3111 30.5039L22.792 32.0367C21.9994 32.106 21.2668 32.4874 20.7554 33.0969C20.2439 33.7064 19.9956 34.4941 20.0649 35.2867C20.1343 36.0793 20.5157 36.812 21.1252 37.3234C21.7347 37.8348 22.5224 38.0832 23.315 38.0138L40.8341 36.4811L36.3998 41.7657C35.8882 42.3751 35.6396 43.1628 35.7087 43.9556C35.7779 44.7483 36.1591 45.481 36.7686 45.9926C37.378 46.5043 38.1657 46.7528 38.9584 46.6837C39.7511 46.6145 40.4839 46.2333 40.9955 45.6238L47.5151 37.854C48.7061 36.4308 49.2841 34.5933 49.1223 32.7445C48.9606 30.8958 48.0723 29.1866 46.6523 27.9917Z"
                    fill="#D95D39"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_706"
                    x="-9"
                    y="-12.1953"
                    width="92.0008"
                    height="92.001"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.85098 0 0 0 0 0.364706 0 0 0 0 0.223529 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_706"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_706"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="curric-card-text">
                Get Proficient with Topic based Assignments.
              </span>
            </div>
            <div className="curric-cards">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67"
                viewBox="0 0 70 67"
                fill="none"
              >
                <g filter="url(#filter0_d_1_706)">
                  <path
                    d="M46.6523 27.9917L38.8825 21.4721C38.2728 20.9608 37.485 20.7126 36.6923 20.7821C35.8997 20.8516 35.1671 21.2332 34.6557 21.8429C34.1444 22.4526 33.8962 23.2404 33.9658 24.0331C34.0353 24.8257 34.4169 25.5583 35.0265 26.0697L40.3111 30.5039L22.792 32.0367C21.9994 32.106 21.2668 32.4874 20.7554 33.0969C20.2439 33.7064 19.9956 34.4941 20.0649 35.2867C20.1343 36.0793 20.5157 36.812 21.1252 37.3234C21.7347 37.8348 22.5224 38.0832 23.315 38.0138L40.8341 36.4811L36.3998 41.7657C35.8882 42.3751 35.6396 43.1628 35.7087 43.9556C35.7779 44.7483 36.1591 45.481 36.7686 45.9926C37.378 46.5043 38.1657 46.7528 38.9584 46.6837C39.7511 46.6145 40.4839 46.2333 40.9955 45.6238L47.5151 37.854C48.7061 36.4308 49.2841 34.5933 49.1223 32.7445C48.9606 30.8958 48.0723 29.1866 46.6523 27.9917Z"
                    fill="#D95D39"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_706"
                    x="-9"
                    y="-12.1953"
                    width="92.0008"
                    height="92.001"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.85098 0 0 0 0 0.364706 0 0 0 0 0.223529 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_706"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_706"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="curric-card-text">
                Execute Real-world Projects from Scratch By yourself
              </span>
            </div>
          </div>
        </div>
        <div className="curric-right">
          <div className="curric-right-container">
            <div className="curric-right-head">Course Modules</div>
            <div className="curric-right-cards-container">
              <div className="curric-right-card">
                <span>Module 1 : HTML + CSS</span>
              </div>
              <div className="curric-right-card">
                <span>Module 2 : JavaScript along with DOM Manipulation</span>
              </div>
              <div className="curric-right-card">
                <span>Module 3 : React js With Hands on Projects</span>
              </div>
              <div className="curric-right-card">
                <span>Module 4 : Node JS</span>
              </div>
              <div className="curric-right-card">
                <span>Module 5 : Express + MongoDB</span>
              </div>
              <div className="curric-right-card">
                <span>Module 6 : Final Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
