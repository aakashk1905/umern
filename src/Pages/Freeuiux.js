import "./Styles/Freeuiux.css";
import UIUX from "../Assests/creative-assignment.png"
const Freeuiux = () => {
    return (
        <div className="uiux-container" id="resources">
            <div className="uiux-right">
                <div className="uiux-image-container">
                    <img src={UIUX} alt="creative-assignment" />
                </div>
            </div>
            <div className="uiux-left">
                <div className="uiux-text-container">
                    <div className="uiux-headings">
                        <div className="uiux-heading">Premium </div>
                        <div className="uiux-heading">UI/UX </div>
                        <div className="uiux-heading">Resources</div>
                        <div className="uiux-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="30" viewBox="0 0 323 30" fill="none">
                                <path d="M5.49109 24.2818C5.49109 24.2818 90.7221 10.4411 153.158 6.4336C229.484 1.53453 317.044 16.9388 317.044 16.9388" stroke="#D95D39" strokeWidth="10" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="uiux-para">
                        <p>Get access to unlimited content of free UI/UX resources, and learn the key essentials of Design principles and get started your design journey for FREE!</p>
                    </div>
                </div>
                <div className="uiux-cards-container">
                    <div className="uiux-cards uiux-card1">
                        <span className="uiux-card-text">
                        Industry relevant curriculum
                        </span>
                    </div>
                    <div className="uiux-cards uiux-card2">
                        <span className="uiux-card-text">
                        Assignments on real world problems
                        </span>
                    </div>
                    <div className="uiux-cards uiux-card3">
                        <span className="uiux-card-text">
                        Premium quality content
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Freeuiux;
