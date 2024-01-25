import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import DesignHackathons from './DesignHackathons';
import './Styles/HorizontalScroll.css'
import CreativeAssignment from './CreativeAssignment';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });


  const x = useTransform(scrollYProgress, [0,1], ["50%", "0%"]);
  return (
    <section ref={targetRef} className="sec">
      <div className="stic">
        <motion.div style={{ x , y:x }} className="fg">
          <CreativeAssignment />
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalScroll


