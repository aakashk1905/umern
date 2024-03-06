import React from 'react'
import './Hackstart.css'
import stepss from '../../Assests/getstartedsteps.png'
import tog from '../../Assests/togetherleft.png'
const Hackstart = ({ setShowForm }) => {
    return (
        <div className='hackstart-cont'>
            <div className='hack-get-st-cont'>
                <div className='hackk-get-st-head'>Getting Started</div>
                <div className='hack-st-head-img'><img src={stepss} alt='src'></img></div>
                <div className='hack-get-st-card-cont'>
                    <div className='hack-get-st-card'>
                        <div className='hack-get-st-card-num'>1</div>
                        <div className='hack-reg-now'>Register <br /><b style={{ color: '#e3d34b' }}>Your Team!</b></div>
                        <div className='hack-reg-text'>  You can Register in a team of 2-4 members, here.</div>
                        <div className='hack-reg-btn' onClick={() => setShowForm(true)}>Register Now</div>
                        {/* <div className='hack-reg-btn' onClick={() => alert("Slots Full!!! Wait till Next Hackathon")}>Register Now</div> */}
                    </div>
                    <div className='hack-get-st-card'>
                        <div className='hack-get-st-card-num'>2</div>
                        <div className='hack-reg-now'>Join <br /><b style={{ color: '#e3d34b' }}>Upskillmafia Platform</b></div>
                        <div className='hack-reg-text'> Join our hackathon group with your team to get the live updates</div>
                        {/* <div className='hack-reg-btn'>Register Now</div> */}
                    </div>
                    <div className='hack-get-st-card'>
                        <div className='hack-get-st-card-num'>3</div>
                        <div className='hack-reg-now'>Submit <br /><b style={{ color: '#e3d34b' }}>Hackathon Task</b></div>
                        <div className='hack-reg-text'> Work along with your team and Submit the task on 26 November</div>
                        {/* <div className='hack-reg-btn'>Register Now</div> */}
                    </div>
                </div>
            </div>
            <div className='hack-work-together-cont'>
                <div className='hackk-get-st-head'>Working Together</div>
                <div className='hackk-work-together-main-cont'>
                    <div className='hackk-work-together-main-left'><img src={tog} alt='tog'></img></div>
                    <div className='hackk-work-together-main-right'>
                        <div className='hackk-work-together-rigth-head'>Buckle Up, Designers!</div>
                        <div className='hackk-work-together-rigth-text'>You will be joining the UpSkill Mafia Virtual Campus ,
                        and working along With Your team mates from start to finish!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hackstart