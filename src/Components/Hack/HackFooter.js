import React from 'react'
import './HackFooter.css'
import logo from '../../Assests/hacklogo.png'
const HackFooter = () => {
  return (
    <div className='h-footer-cont'>
        <div><img src={logo} alt='logo'/></div>
        <div><div className='f-hack-head'>Hackathon 2023</div></div>
        <div>
            <div className='f-hack-contact'>Contact Us At</div>
            <div className='f-hack-contact'><a href='tel:+917988800474'>+91-7988800474</a></div>
            <div className='f-hack-contact'><a href='mailto:upskillmafia@gmail.com'>Upskillmafia@Gmail.Com</a></div>
        </div>
    </div>
  )
}

export default HackFooter