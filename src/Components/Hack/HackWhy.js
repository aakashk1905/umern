import React, { useState } from 'react'
import './HackWhy.css'
import whyport from '../../Assests/whyport.png'
import whyntwrk from '../../Assests/whynetwrk.png'
import whywinner from '../../Assests/whywinner.png'
import Carousel from "react-simply-carousel";
const HackWhy = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <div className='hack-why-cont'>
            <div className='why-head-cont'>
                <div className='why-head'>Why Join Hackathon?</div>
            </div>
            <div className='why-cards-cont'>
                <div className='why-card1'></div>
                <div className='why-card'>
                    <img className='why-card-img' src={whyport} alt='cardimg' />
                    <div className='why-card-head'>Boost UI/UX Portfolio</div>
                    <div className='why-card-text'> Solve Real world Problems </div>
                </div>
                <div className='why-card'>
                    <img className='why-card-img' src={whyntwrk} alt='cardimg' />
                    <div className='why-card-head'>Network Like Pro</div>
                    <div className='why-card-text'> Build your design tribe </div>
                </div>
                <div className='why-card'>
                    <img className='why-card-img' src={whywinner} alt='cardimg' />
                    <div className='why-card-head'>Win Big!</div>
                    <div className='why-card-text'> Awesome prizes plus Recognition </div>
                </div>
            </div>
            <div className='hackk-why-car'>
            <Carousel className="car-hack"
                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "center",
                        userSelect: "none"
                    }
                }}
                preventScrollOnSwipe={false}
                swipeTreshold={60}
                activeSlideIndex={activeSlide}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: ">",
                    style: {
                        width: 30,
                        height: 30,
                        minWidth: 30,
                        alignSelf: "center",
                        display: "none"
                    }
                }}
                backwardBtnProps={{
                    children: "<",
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center",
                        display: "none",
                    }
                }}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                        style: {
                            height: 10,
                            width: 10,
                            borderRadius: "50%",
                            border: 0,
                            // background:"transparent"
                        }
                    },
                    activeItemBtnProps: {
                        style: {
                            height: 10,
                            width: 10,
                            borderRadius: "50%",
                            border: 0,
                            background: "black"
                        }
                    }
                }}
                autoplay={true}
                autoplayDirection="forward"
                autoplayDelay={2000}
                itemsToShow={2}
                speed={400}
                centerMode
            >
                <div style={{ padding: '30px' }}>
                    <div className='why-card'>
                        <img className='why-card-img' src={whyport} alt='cardimg' />
                        <div className='why-card-head'>Boost UI/UX Portfolio</div>
                        <div className='why-card-text'> Solve Real world Problems </div>
                    </div>
                </div>
                <div style={{ padding: '30px' }}>
                    <div className='why-card'>
                        <img className='why-card-img' src={whyntwrk} alt='cardimg' />
                        <div className='why-card-head'>Network Like Pro</div>
                        <div className='why-card-text'> Build your design tribe </div>
                    </div>
                </div>
                <div style={{ padding: '30px' }}>
                    <div className='why-card'>
                        <img className='why-card-img' src={whywinner} alt='cardimg' />
                        <div className='why-card-head'>Win Big!</div>
                        <div className='why-card-text'> Awesome prizes plus Recognition </div>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default HackWhy