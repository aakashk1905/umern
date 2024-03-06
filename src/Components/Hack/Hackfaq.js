import React, { useState } from 'react'
import './Hackfaq.css'
const Hackfaq = () => {
    return (
        <div className='hack-faq-cont'>
            <div className='hack-faq-head'>Still have <b style={{ color: "#ffe827" }}>Questions</b> ?</div>
            <div className='hack-faq-inner-cont'>
                <div className='hack-faq-left'>
                    <div className='hack-faq-card-cont'>
                        <div className='h-faq-top'><div className='h-faq'>How do I participate in Hackathon?</div></div>
                        <div className='h-faq-ans'><div className='h-faq-ans-text'>To join simple click on the “Register Now” button on this website, and complete the registration form</div></div>
                    </div>
                    <div className='hack-faq-card-cont'>
                        <div className='h-faq-top'><div className='h-faq'>Can I participate individually or in a team?</div></div>
                        <div className='h-faq-ans'><div className='h-faq-ans-text'>You have to participate in a team of 2-4 members.</div></div>
                    </div>
                    <div className='hack-faq-card-cont'>
                        <div className='h-faq-top'><div className='h-faq'>How will submissions get evaluated?</div></div>
                        <div className='h-faq-ans'><div className='h-faq-ans-text'>Our team of mentors will closely review your task on various parameters and give you scores based on which your rank will be provided.</div></div>
                    </div>
                </div>
                <div className='hack-faq-right'>
                    <div className='hack-faq-card-cont'>
                        <div className='h-faq-top'><div className='h-faq'>Is there a registration fee?</div></div>
                        <div className='h-faq-ans'><div className='h-faq-ans-text'>No, Hackathon is completely free to participate in</div></div>
                    </div>
                    <div className='hack-faq-card-cont'>
                        <div className='h-faq-top'><div className='h-faq'>What if I don’t have team members?</div></div>
                        <div className='h-faq-ans'><div className='h-faq-ans-text'>We recommend you to ask people to participate along with you on various groups and communities, you will surely get someone.</div></div>
                    </div>
                    <div className='hack-faq-card-cont'>
                        <div className='h-faq-top'><div className='h-faq'>Will i retain rights to my design? </div></div>
                        <div className='h-faq-ans'><div className='h-faq-ans-text'>Yes, you will have complete rights to your work and it won’t be used anywhere by us without your consent.</div></div>
                    </div>
                </div>
            </div>
            <div className='hack-faq-cont-mob'>
                <Faqq que={"How do I participate in Hackathon?"} text={"To join simple click on the “Register Now” button on this website, and complete the registration form"}/>
                <Faqq que={"Is there a registration fee?"} text={"No, Hackathon is completely free to participate in"}/>
                <Faqq que={"Can I participate individually or in a team?"} text={"You have to participate in a team of 2-4 members."}/>
                <Faqq que={"What if I don’t have team members?"} text={"We recommend you to ask people to participate along with you on various groups and communities, you will surely get someone."}/>
                <Faqq que={"How will submissions get evaluated?"} text={"Our team of mentors will closely review your task on various parameters and give you scores based on which your rank will be provided."}/>
                <Faqq que={"Will i retain rights to my design? "} text={"Yes, you will have complete rights to your work and it won’t be used anywhere by us without your consent."}/>
            </div>
        </div>
    )
}

const Faqq = ({ que, text }) => {
    const [open, setOpen ] = useState(false);
    return (
        
            <div
              className={"faq " + (open ? "open" : "")}
              onClick={() => setOpen(!open)}
            >
              <div className="faq-question">{que}</div>
              <div className="faq-answer">{text}</div>
            </div>
        
    );
}

export default Hackfaq