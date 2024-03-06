import React from 'react'
import './hackReward.css'
import trophy from '../../Assests/prizetrophy.png'
const HackReward = () => {
    return (
        <div className='hack-rew-cont'>
            <div className='hack-rew-inner-cont'>
                <div className='hack-rew-head-cont'>
                    <div className='hack-rew-head'>Rewards & Prizes</div>
                </div>
                <div className='hack-rew-card-cont'>
                    <div className='hack-re-card-left'>
                        <img src={trophy} alt='trophy'/>
                    </div>
                    <div className='hack-re-card-right'>
                    <div className='hack-re-card-text-cont'>
                        <div className='hack-re-card-text-head'>Winner</div>
                        <div className='hack-re-card-text'>Winners will get an amazing cash prize of <b style={{color:'#53E544'}}>Rs 6000</b> and certification </div>
                    </div>
                    <div className='hack-re-card-text-cont'>
                        <div className='hack-re-card-text-head'>All contestants</div>
                        <div className='hack-re-card-text'>All the contestants will get <b style={{color:'#53E544'}}>“certificate of participation”</b></div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HackReward