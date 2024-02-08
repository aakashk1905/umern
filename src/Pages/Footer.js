import React from 'react'
import './Styles/Footer.css'
import { useEffect, useRef } from "react";
const Footer = () => {
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
                {
                    `
            .footer-container{
                background-image: radial-gradient( circle farthest-side at var(--x,100px) var(--y,100px), #002b46 0%, transparent 100%)
            }
            `
                }
            </style>
        <div ref={targetRef} className="footer-container">
            <div className="footer-headings">
                <div>
                    <span >{"Be\u00A0"}</span>
                    <span style={{ color: "#7B9E89" }}>{"Inspired\u00A0"}</span>
                    <span >{"Be\u00A0"}</span>
                    <span style={{ color: "#D95D39" }}>Creative </span>
                </div>
                <div>
                    <span>Develop your future with<span style={{ color: "#F0A202" }}>{"\u00A0Us!!"}</span> </span>
                    
                </div>
                <a href='https://chat.whatsapp.com/CfpEMhJOKOZ4C5xZzUi3Yg' target="_blank" rel="noreferrer"><div className="footer-whatsapp" onClick={()=>window.fbq('track', ' AddtoWhatsapp')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <g clipPath="url(#clip0_1_2882)">
                                <path d="M1.37428 12.5469C1.37373 14.515 1.88799 16.4367 2.86583 18.1306L1.28076 23.9179L7.2034 22.365C8.84152 23.2568 10.6769 23.724 12.542 23.7242H12.547C18.7041 23.7242 23.7162 18.7139 23.7188 12.5557C23.72 9.57156 22.5589 6.7655 20.4494 4.65437C18.3403 2.54342 15.5352 1.38027 12.5465 1.37891C6.38862 1.37891 1.37691 6.38889 1.37437 12.5469" fill="url(#paint0_linear_1_2882)" />
                                <path d="M0.975567 12.5431C0.974931 14.5821 1.50762 16.5726 2.52033 18.327L0.878418 24.3219L7.01342 22.7133C8.70381 23.6349 10.607 24.1208 12.5436 24.1216H12.5486C18.9267 24.1216 24.1188 18.9311 24.1215 12.5524C24.1226 9.46107 22.9198 6.55414 20.7349 4.36738C18.5498 2.18089 15.6444 0.97588 12.5486 0.974609C6.16949 0.974609 0.978109 6.16436 0.975567 12.5431ZM4.62909 18.0249L4.40002 17.6613C3.43707 16.1301 2.92881 14.3607 2.92953 12.5439C2.93162 7.24199 7.24649 2.92848 12.5523 2.92848C15.1217 2.92957 17.5365 3.93121 19.3527 5.74853C21.1688 7.56603 22.1682 9.98204 22.1676 12.5517C22.1652 17.8536 17.8502 22.1676 12.5486 22.1676H12.5448C10.8186 22.1667 9.12554 21.7031 7.64906 20.827L7.29769 20.6187L3.65706 21.5732L4.62909 18.0248V18.0249Z" fill="url(#paint1_linear_1_2882)" />
                                <path d="M9.65598 7.70656C9.43935 7.22508 9.21136 7.21537 9.00535 7.20692C8.83666 7.19966 8.64381 7.2002 8.45115 7.2002C8.25831 7.2002 7.94498 7.27275 7.68013 7.56193C7.41502 7.85137 6.66797 8.55085 6.66797 9.97349C6.66797 11.3962 7.70419 12.7711 7.84865 12.9642C7.99328 13.157 9.8491 16.1699 12.7883 17.3289C15.231 18.2922 15.7281 18.1006 16.2582 18.0523C16.7884 18.0042 17.9691 17.353 18.21 16.6778C18.451 16.0026 18.451 15.4239 18.3788 15.303C18.3065 15.1825 18.1137 15.1101 17.8245 14.9656C17.5352 14.8209 16.1136 14.1214 15.8485 14.0249C15.5834 13.9284 15.3907 13.8803 15.1978 14.1699C15.005 14.459 14.4512 15.1101 14.2824 15.303C14.1138 15.4963 13.9451 15.5203 13.656 15.3757C13.3666 15.2306 12.4353 14.9256 11.3305 13.9406C10.4709 13.1741 9.8905 12.2276 9.7218 11.9381C9.55311 11.649 9.70374 11.4923 9.84873 11.3482C9.97866 11.2186 10.138 11.0105 10.2827 10.8417C10.4269 10.6729 10.475 10.5524 10.5714 10.3595C10.668 10.1665 10.6197 9.99764 10.5475 9.85301C10.475 9.70837 9.91311 8.27829 9.65598 7.70656Z" fill="white" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_2882" x1="1123.18" y1="2255.28" x2="1123.18" y2="1.37891" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#1FAF38" />
                                    <stop offset="1" stopColor="#60D669" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_2882" x1="1163.03" y1="2335.7" x2="1163.03" y2="0.974609" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F9F9F9" />
                                    <stop offset="1" stopColor="white" />
                                </linearGradient>
                                <clipPath id="clip0_1_2882">
                                    <rect width="23.2431" height="23.4247" fill="white" transform="translate(0.878418 0.974609)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Join The Community!</span>
                    </div>
                    </a>
            </div>
            <div className="footer-links">
                <div className='footer-links-cols'>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>UpskillMafia</div>
                        
                </div>
                <div className='footer-links-cols'>
                    <div style={{ fontSize: 17, fontWeight: 700 }}>Contact us at</div>
                    <div><a href='tel:+917988800474'>+91-7988800474</a></div>
                    <div><a href = "mailto: upskillmafia@gmail.com">upskillmafia@gmail.com</a></div>
                </div>
                <div className='footer-links-cols'>
                    <div><a href="#resources">Free Development Resources</a></div>
                    <div><a href="#peer" >Peer Learning</a></div>
                    <div><a href="#community" >Community</a></div>
                    
                </div>
                <div className='footer-links-cols'>
                    <div><a href="#hackathon" >Hackathons</a></div>
                    <div><a href="#certif" >Certification</a></div>
                </div>

            </div>
            <div className="footer-line"></div>
            <div className="footer-copyright">
                <span>Copyright © 2023 Tutedude pvt ltd. All rights reserved</span>
            </div>

        </div>
        </>
    )
}

export default Footer