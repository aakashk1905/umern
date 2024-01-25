import React from 'react'
import Hero from './Hero'
import Navbar1 from '../Components/Navbar1'
import './Styles/Home.css'
import { Helmet } from "react-helmet";
const Home = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UpskillMafia</title>
        <meta name="description" content="Join the Free UI/UX Design Community and Master UI/UX Design With Your Peers For Free with Exclusive content. Participate in Hackathons win prizes worth upto 10k" />
        <meta name="keywords" content="upskillmafia, UI/UX design, uiux design, ui ux, ui/ux, design community, free ui/ux course, peer learning, design hackathons"/>
      </Helmet>
      <section className="home-container" id="home">
        <Navbar1 />
        <Hero />
      </section>
    </>

  )
}

export default Home