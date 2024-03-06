import React from 'react'
import './HackHow.css'
import howtrophy from '../../Assests/howtrophy.png'
import howrev from '../../Assests/howrev.png'
import howpresent from '../../Assests/howpresent.png'
const HackHow = () => {
    return (
        <div className='hack-how-cont'>
            <div className='how-head-cont'>
                <div className='how-head'>Hackathon Overview</div>
            </div>
            <div className='how-cards-cont'>
                <div className='how-card'>

                    <div className='how-card-inner-cont'>
                        <img className='how-card-img' src={howrev} alt='cardimg' />
                        <div className='how-card-head-cont'>
                            <div className='how-card-head'>Task Submission</div>
                            {/* <div className='how-card-subhead'>Review by <b style={{ color: '#E3D34B' }}>Design Panel</b></div> */}
                        </div>
                        <div className='how-card-text'> Work with your team mates and submit your task</div>
                    </div>
                </div>
                <div className='how-card'>
                    <div className='how-card-inner-cont'>

                        <div className='how-card-head-cont'>
                            <img className='how-card-img' src={howpresent} alt='cardimg' />
                            <div className='how-card-head'>Feedback Session</div>
                            {/* <div className='how-card-subhead'><b style={{ color: '#E3D34B' }}>Pitch</b> your Design!</div> */}
                        </div>
                        <div className='how-card-text'> Our mentors will host a live session to discuss the hackathon problem statement and the solution</div>
                    </div>
                </div>
                <div className='how-card'>
                    <div className='how-card-inner-cont' style={{background: "#5ACD4E"}}>
                        <img className='how-card-img' src={howtrophy} alt='cardimg' />
                        <div className='how-card-subhead' style={{color:"black"}}>Results Announced!!</div>
                        <div className='how-card-text' style={{color:"black"}}>Winner team will be announced after the feedback and prize would be awarded.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HackHow