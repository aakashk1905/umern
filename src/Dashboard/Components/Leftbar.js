import React from "react";
import "./LeftBar.css";
import back from "../Assests/back.svg";
import logo from "../Assests/logo.svg";
import lbavatar from "../Assests/lbavatar.png";
import Cookies from "js-cookie";
const Leftbar = ({ setIsOpen, name, setActive, active, isMentor }) => {
  return (
    <div className="lb-cont">
      <div className="lb-top">
        <div className="lb-back" onClick={() => setIsOpen(false)}>
          <img src={back} alt="back" />
        </div>
        <div className="lb-logo-cont">
          <img src={logo} alt="logo" />
        </div>
        <div className={`lb-menu-cont ${isMentor ? "hmenu" : ""}`}>
          <div
            className={`lb-menu ${active === 1 ? "lb-menu-active" : ""}`}
            onClick={() => setActive(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_443_1638)">
                <path
                  d="M19.9167 10.1614C19.5894 7.64147 18.3149 5.34064 16.3523 3.72644C14.3897 2.11224 11.8862 1.30576 9.35038 1.47085C6.8146 1.63594 4.43678 2.76022 2.70004 4.61527C0.963299 6.47031 -0.00207604 8.91696 5.64178e-05 11.4581C-0.00453803 12.8145 0.27153 14.1572 0.810905 15.4017C1.35028 16.6462 2.1413 17.7657 3.13422 18.6898C3.94461 19.4377 5.01069 19.8469 6.11339 19.8331H13.8817C15.0423 19.8362 16.1578 19.3838 16.9884 18.5731C18.1004 17.4978 18.9447 16.1766 19.4533 14.7157C19.9618 13.2547 20.1206 11.6949 19.9167 10.1614ZM15.2442 16.7814C14.8798 17.1366 14.3906 17.3346 13.8817 17.3331H6.11339C5.64786 17.3429 5.19568 17.1772 4.84672 16.8689C4.10359 16.1776 3.51149 15.3401 3.10764 14.4089C2.70379 13.4777 2.49693 12.4731 2.50006 11.4581C2.50602 9.47639 3.29806 7.57799 4.70233 6.17967C6.10659 4.78134 8.00832 3.99734 9.99006 3.99978C10.2852 3.99994 10.5801 4.01663 10.8734 4.04978C12.5249 4.24287 14.0655 4.97881 15.2535 6.1421C16.4416 7.3054 17.2098 8.83022 17.4376 10.4773C17.5902 11.6263 17.4713 12.7951 17.0905 13.8899C16.7098 14.9847 16.0777 15.9751 15.2451 16.7814H15.2442ZM7.54422 13.5706C7.76855 13.8147 7.88672 14.1379 7.87273 14.4692C7.85875 14.8004 7.71375 15.1125 7.46964 15.3369C7.22553 15.5612 6.9023 15.6794 6.57107 15.6654C6.23983 15.6514 5.92772 15.5064 5.70339 15.2623C4.71406 14.1885 4.16543 12.7815 4.16672 11.3214C4.17573 9.88435 4.72899 8.50406 5.71507 7.4586C6.70115 6.41315 8.04677 5.78021 9.48089 5.68728C9.81142 5.6601 10.1392 5.76533 10.3921 5.97982C10.6451 6.19431 10.8025 6.5005 10.8296 6.83103C10.8568 7.16156 10.7516 7.48934 10.5371 7.74228C10.3226 7.99522 10.0164 8.1526 9.68589 8.17978C8.87547 8.21552 8.10988 8.56171 7.54779 9.14661C6.9857 9.7315 6.67022 10.5103 6.66672 11.3214C6.66619 12.1548 6.97948 12.9578 7.54422 13.5706ZM15.7842 12.0773C15.631 13.2679 15.1112 14.3813 14.2967 15.2631C14.0722 15.5072 13.7598 15.6521 13.4285 15.666C13.0971 15.6798 12.7737 15.5614 12.5296 15.3369C12.2855 15.1123 12.1406 14.8 12.1268 14.4686C12.113 14.1372 12.2313 13.8139 12.4559 13.5698C12.9208 13.068 13.2179 12.4339 13.3059 11.7556C13.3564 11.4338 13.5305 11.1443 13.7912 10.949C14.0519 10.7536 14.3786 10.6678 14.7017 10.7097C15.0248 10.7516 15.3187 10.918 15.5209 11.1735C15.7231 11.4289 15.8176 11.7532 15.7842 12.0773ZM11.6551 11.6123C11.635 11.9324 11.523 12.24 11.3325 12.4981C11.142 12.7561 10.8811 12.9537 10.581 13.0672C10.281 13.1806 9.95459 13.205 9.641 13.1376C9.3274 13.0701 9.03995 12.9135 8.81313 12.6867C8.58631 12.4599 8.42977 12.1724 8.36228 11.8588C8.29479 11.5453 8.31923 11.2188 8.43267 10.9188C8.5461 10.6188 8.74371 10.3578 9.00178 10.1673C9.25985 9.97681 9.56741 9.86481 9.88756 9.84478L12.0326 7.69895C12.2671 7.46445 12.5851 7.33271 12.9167 7.33271C13.2483 7.33271 13.5664 7.46445 13.8009 7.69895C14.0354 7.93344 14.1671 8.25149 14.1671 8.58311C14.1671 8.91474 14.0354 9.23278 13.8009 9.46728L11.6551 11.6123Z"
                  fill="white"
                  fillOpacity="0.7"
                />
              </g>
              <defs>
                <clipPath id="clip0_443_1638">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.666504)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Dashboard</span>
          </div>
          {/* <div
            className={`lb-menu lb-hack ${
              active === 2 ? "lb-menu-active-hack" : ""
            }`}
            onClick={() => setActive(2)}
          >
            <div className="lb-hack-join-abs">New</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_599_1792)">
                <path
                  d="M19.2283 3.86796C18.9999 3.77328 18.7485 3.74847 18.506 3.79668C18.2635 3.84489 18.0407 3.96395 17.8658 4.1388L14.7733 7.23213L10.8842 3.34296C10.7681 3.2268 10.6302 3.13466 10.4785 3.07179C10.3268 3.00892 10.1642 2.97656 10 2.97656C9.83578 2.97656 9.67317 3.00892 9.52146 3.07179C9.36975 3.13466 9.23192 3.2268 9.11583 3.34296L5.22667 7.23213L2.13417 4.1388C1.95935 3.96387 1.73657 3.84472 1.49402 3.79645C1.25147 3.74817 1.00005 3.77292 0.771569 3.86758C0.543092 3.96223 0.347827 4.12254 0.210483 4.3282C0.0731385 4.53387 -0.000111972 4.77565 1.28473e-07 5.02296V14.4163C0.00154368 15.6314 0.484925 16.7963 1.34413 17.6555C2.20334 18.5147 3.36823 18.9981 4.58333 18.9996H15.4167C16.6318 18.9981 17.7967 18.5147 18.6559 17.6555C19.5151 16.7963 19.9985 15.6314 20 14.4163V5.02296C20 4.77571 19.9267 4.534 19.7894 4.32841C19.652 4.12282 19.4568 3.96258 19.2283 3.86796V3.86796ZM17.5 14.4163C17.5 14.9688 17.2805 15.4987 16.8898 15.8894C16.4991 16.2801 15.9692 16.4996 15.4167 16.4996H4.58333C4.0308 16.4996 3.5009 16.2801 3.11019 15.8894C2.71949 15.4987 2.5 14.9688 2.5 14.4163V8.04046L4.34333 9.8838C4.57774 10.1181 4.89563 10.2498 5.22708 10.2498C5.55854 10.2498 5.87642 10.1181 6.11083 9.8838L10 5.99463L13.8892 9.8838C14.1236 10.1181 14.4415 10.2498 14.7729 10.2498C15.1044 10.2498 15.4223 10.1181 15.6567 9.8838L17.5 8.04046V14.4163Z"
                  fill="#1ABA5B"
                />
              </g>
              <defs>
                <clipPath id="clip0_599_1792">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.666504)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Hackathon</span>
          </div> */}
          <div
            className={`lb-menu ${active === 3 ? "lb-menu-active" : ""}`}
            onClick={() => setActive(3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_443_1425)">
                <path
                  d="M3.75025 6.49994C3.36706 6.50102 2.98746 6.42608 2.63343 6.27947C2.2794 6.13285 1.95797 5.91746 1.68775 5.64578L0.416914 4.51661C0.169378 4.2956 0.0197786 3.9853 0.00102493 3.65399C-0.00826093 3.48994 0.0148562 3.32567 0.0690565 3.17055C0.123257 3.01543 0.207479 2.87251 0.316914 2.74994C0.426349 2.62738 0.558853 2.52757 0.706862 2.45621C0.854871 2.38485 1.01549 2.34334 1.17954 2.33406C1.51085 2.3153 1.83604 2.42893 2.08358 2.64994L3.40358 3.82828C3.44656 3.87907 3.4995 3.92051 3.55912 3.95004C3.61875 3.97956 3.6838 3.99655 3.75025 3.99994C3.86054 3.99992 3.96633 3.95617 4.04441 3.87828L7.05525 1.01161C7.29699 0.792858 7.61464 0.677214 7.94045 0.689343C8.26625 0.701471 8.57442 0.840412 8.79924 1.07653C9.02405 1.31265 9.14772 1.62727 9.14386 1.95327C9.14 2.27928 9.00892 2.59088 8.77858 2.82161L5.79025 5.66661C5.52175 5.93288 5.20335 6.14355 4.85328 6.28655C4.50322 6.42955 4.12838 6.50207 3.75025 6.49994V6.49994ZM20.0002 3.58328C20.0002 3.25176 19.8686 2.93382 19.6341 2.69939C19.3997 2.46497 19.0818 2.33328 18.7502 2.33328H12.0836C11.7521 2.33328 11.4341 2.46497 11.1997 2.69939C10.9653 2.93382 10.8336 3.25176 10.8336 3.58328C10.8336 3.9148 10.9653 4.23274 11.1997 4.46716C11.4341 4.70158 11.7521 4.83328 12.0836 4.83328H18.7502C19.0818 4.83328 19.3997 4.70158 19.6341 4.46716C19.8686 4.23274 20.0002 3.9148 20.0002 3.58328ZM5.79025 12.3333L8.77858 9.48828C9.00892 9.25755 9.14 8.94595 9.14386 8.61994C9.14772 8.29394 9.02405 7.97932 8.79924 7.7432C8.57442 7.50708 8.26625 7.36814 7.94045 7.35601C7.61464 7.34388 7.29699 7.45952 7.05525 7.67828L4.04441 10.5449C3.96628 10.6231 3.86032 10.6669 3.74983 10.6669C3.63935 10.6669 3.53338 10.6231 3.45525 10.5449L2.13441 9.22328C1.89992 8.98878 1.58187 8.85704 1.25025 8.85704C0.91862 8.85704 0.600576 8.98878 0.36608 9.22328C0.131585 9.45777 -0.00015358 9.77582 -0.00015358 10.1074C-0.00015358 10.4391 0.131585 10.7571 0.36608 10.9916L1.68775 12.3124C2.23105 12.8554 2.96661 13.1622 3.73472 13.1661C4.50282 13.17 5.24146 12.8707 5.79025 12.3333V12.3333ZM20.0002 10.2499C20.0002 9.91842 19.8686 9.60048 19.6341 9.36606C19.3997 9.13164 19.0818 8.99994 18.7502 8.99994H12.0836C11.7521 8.99994 11.4341 9.13164 11.1997 9.36606C10.9653 9.60048 10.8336 9.91842 10.8336 10.2499C10.8336 10.5815 10.9653 10.8994 11.1997 11.1338C11.4341 11.3682 11.7521 11.4999 12.0836 11.4999H18.7502C19.0818 11.4999 19.3997 11.3682 19.6341 11.1338C19.8686 10.8994 20.0002 10.5815 20.0002 10.2499ZM5.79025 18.9999L8.77858 16.1549C9.00892 15.9242 9.14 15.6126 9.14386 15.2866C9.14772 14.9606 9.02405 14.646 8.79924 14.4099C8.57442 14.1737 8.26625 14.0348 7.94045 14.0227C7.61464 14.0105 7.29699 14.1262 7.05525 14.3449L4.04441 17.2116C3.96633 17.2895 3.86054 17.3333 3.75025 17.3333C3.6838 17.3299 3.61875 17.3129 3.55912 17.2834C3.4995 17.2538 3.44656 17.2124 3.40358 17.1616L2.08358 15.9833C1.83604 15.7623 1.51085 15.6486 1.17954 15.6674C0.848222 15.6861 0.537927 15.8357 0.316914 16.0833C0.0958998 16.3308 -0.0177287 16.656 0.00102493 16.9873C0.0197786 17.3186 0.169378 17.6289 0.416914 17.8499L1.68608 18.9791C2.22945 19.5226 2.96537 19.8297 3.73388 19.8336C4.50239 19.8375 5.24139 19.5379 5.79025 18.9999ZM20.0002 16.9166C20.0002 16.5851 19.8686 16.2672 19.6341 16.0327C19.3997 15.7983 19.0818 15.6666 18.7502 15.6666H12.0836C11.7521 15.6666 11.4341 15.7983 11.1997 16.0327C10.9653 16.2672 10.8336 16.5851 10.8336 16.9166C10.8336 17.2481 10.9653 17.5661 11.1997 17.8005C11.4341 18.0349 11.7521 18.1666 12.0836 18.1666H18.7502C19.0818 18.1666 19.3997 18.0349 19.6341 17.8005C19.8686 17.5661 20.0002 17.2481 20.0002 16.9166Z"
                  fill="#4D4D4D"
                />
              </g>
              <defs>
                <clipPath id="clip0_443_1425">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.666504)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Tasks</span>
          </div>
          <div
            className={`lb-menu ${active === 4 ? "lb-menu-active" : ""}`}
            onClick={() => alert("Opens After You Complete The Course!!!")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M19.1663 1.50202C18.4771 0.80329 17.4723 0.516808 16.5183 0.747126L3.78017 3.42424C1.36114 3.7822 -0.30967 6.03339 0.0482865 8.45238C0.187446 9.39283 0.625625 10.2635 1.29799 10.9357L2.66361 12.3021C2.72755 12.3652 2.76328 12.4515 2.76278 12.5413V15.0609C2.76461 16.6284 4.03486 17.8987 5.60237 17.9005H8.122C8.21195 17.9005 8.29827 17.9362 8.36197 17.9997L9.72759 19.3653C10.5533 20.1965 11.6763 20.6643 12.848 20.6651C13.3316 20.6647 13.812 20.5856 14.2703 20.431C15.8517 19.9058 17.0009 18.5324 17.239 16.8832L19.9161 4.18499C20.1566 3.22099 19.8717 2.2016 19.1663 1.50202ZM2.60116 7.18952C2.82761 6.48989 3.43869 5.98469 4.16843 5.89388C4.19788 5.88998 4.22702 5.88498 4.25592 5.87888L15.356 3.5459L5.26245 13.6336V12.5412C5.26429 11.7877 4.96418 11.0648 4.42925 10.534L3.06527 9.16841C2.53992 8.65458 2.35901 7.88336 2.60116 7.18952ZM14.7844 16.4115C14.7777 16.4407 14.7736 16.4699 14.7694 16.499C14.6247 17.5545 13.6518 18.2928 12.5964 18.1481C12.1794 18.0909 11.7926 17.8989 11.4949 17.6014L10.1301 16.2366C9.59905 15.7015 8.87588 15.4014 8.12204 15.4034H7.0297L17.1207 5.30983L14.7844 16.4115Z"
                fill="#4D4D4D"
              />
            </svg>
            <span>internship</span>
          </div>

          <div
            className={`lb-menu ${active === 5 ? "lb-menu-active" : ""}`}
            onClick={() => setActive(4)}
            style={{ visibility: "hidden" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M18.9601 7.34103C18.095 6.26896 16.7903 5.64701 15.4127 5.6499H13.7207L13.7954 5.21154C14.1 3.42576 12.8993 1.73119 11.1136 1.42658C10.9171 1.39306 10.7179 1.37752 10.5186 1.38017C9.26645 1.37365 8.1177 2.07396 7.54984 3.19002L6.29457 5.6499H4.56609C2.04547 5.65267 0.00273438 7.69537 0 10.216V14.367C0.00273438 16.8877 2.04547 18.9304 4.56609 18.9331H14.5352C16.6898 18.9253 18.5486 17.4189 19.0025 15.3126L19.88 11.1616C20.1679 9.81451 19.8296 8.40947 18.9601 7.34103ZM2.49059 14.367V10.216C2.49059 9.06978 3.4198 8.14053 4.56609 8.14053H5.81141V16.4425H4.56609C3.41984 16.4425 2.49059 15.5133 2.49059 14.367ZM17.4433 10.6461L16.565 14.7971C16.359 15.7544 15.5143 16.4391 14.5351 16.4426H8.30199V7.1949L9.76812 4.32158C9.92352 4.03072 10.2324 3.85529 10.5618 3.8708C10.9983 3.87107 11.3519 4.22517 11.3516 4.66166C11.3516 4.70572 11.3479 4.7497 11.3405 4.79314L10.7702 8.14053H15.4127C16.5589 8.14041 17.4882 9.06955 17.4884 10.2158C17.4884 10.3604 17.4733 10.5046 17.4433 10.6461Z"
                fill="#4D4D4D"
              />
            </svg>
            <span>Peer Review</span>
          </div>
        </div>
      </div>
      <div className="lb-btm">
        <div className="lb-name">
          <img src={lbavatar} alt="avatar"></img>
          <span>{name ? name : "User"}</span>
        </div>
        <div
          className="lb-logout"
          onClick={() => {
            Cookies.remove("user_email");
            Cookies.remove("user_name");
            window.location.reload();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g clipPath="url(#clip0_410_1854)">
              <path
                d="M5.33333 14.5H2.27267C2.20041 14.4998 2.13115 14.471 2.08006 14.4199C2.02896 14.3688 2.00018 14.2996 2 14.2273V2.77267C2.00018 2.70041 2.02896 2.63115 2.08006 2.58006C2.13115 2.52896 2.20041 2.50018 2.27267 2.5H5.33333C5.59855 2.5 5.8529 2.39464 6.04044 2.20711C6.22798 2.01957 6.33333 1.76522 6.33333 1.5C6.33333 1.23478 6.22798 0.98043 6.04044 0.792893C5.8529 0.605357 5.59855 0.5 5.33333 0.5H2.27267C1.67013 0.500706 1.09248 0.740373 0.666428 1.16643C0.240373 1.59248 0.000705748 2.17013 0 2.77267L0 14.2273C0.000705748 14.8299 0.240373 15.4075 0.666428 15.8336C1.09248 16.2596 1.67013 16.4993 2.27267 16.5H5.33333C5.59855 16.5 5.8529 16.3946 6.04044 16.2071C6.22798 16.0196 6.33333 15.7652 6.33333 15.5C6.33333 15.2348 6.22798 14.9804 6.04044 14.7929C5.8529 14.6054 5.59855 14.5 5.33333 14.5Z"
                fill="#FF5A5A"
              />
              <path
                d="M15.121 6.37826L12.533 3.79226C12.4401 3.69942 12.3299 3.62578 12.2085 3.57555C12.0872 3.52532 11.9571 3.49948 11.8258 3.49951C11.6944 3.49954 11.5644 3.52544 11.4431 3.57573C11.3218 3.62602 11.2115 3.69971 11.1187 3.7926C11.0258 3.88548 10.9522 3.99575 10.902 4.1171C10.8517 4.23845 10.8259 4.3685 10.8259 4.49983C10.826 4.76507 10.9314 5.01942 11.119 5.20693L13.3937 7.48093L4.33301 7.4996C4.06779 7.4996 3.81344 7.60495 3.6259 7.79249C3.43836 7.98003 3.33301 8.23438 3.33301 8.4996C3.33301 8.76481 3.43836 9.01917 3.6259 9.2067C3.81344 9.39424 4.06779 9.4996 4.33301 9.4996L13.4303 9.48293L11.119 11.7943C10.9425 11.9839 10.8464 12.2347 10.8511 12.4938C10.8558 12.7528 10.9609 13 11.1442 13.1831C11.3275 13.3662 11.5747 13.471 11.8338 13.4755C12.0928 13.4799 12.3435 13.3837 12.533 13.2069L15.119 10.6209C15.3976 10.3424 15.6186 10.0116 15.7693 9.64766C15.9201 9.28368 15.9977 8.89357 15.9977 8.4996C15.9977 8.10563 15.9201 7.71552 15.7693 7.35154C15.6186 6.98756 15.3976 6.65684 15.119 6.37826H15.121Z"
                fill="#FF5A5A"
              />
            </g>
            <defs>
              <clipPath id="clip0_410_1854">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
