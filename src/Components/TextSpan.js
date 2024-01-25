
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import './TextSpan.css'

const TextSpan = ({ children , className}) => {
    const controls = useAnimationControls();
    const [isplaying, setIsPlaying] = useState(false);
    // console.log(className)
    const rubberBand = () => {
        controls.start({
            transform: [
                "scale(1, 1)",
                "scale(1.4, .55)",
                "scale(.75, 1.25)",
                "scale(1.25, .85)",
                "scale(.9, 1.05)",
                "scale(1, 1)",
            ],
            transition: {
                times: [0, .4, .6, .7, .8, .9]
            }
        })
        setIsPlaying(true);
    }
    return (
        <motion.span 
        animate={controls}
            onMouseOver={() => {
                if (!isplaying)
                    rubberBand()
            }}
            onAnimationComplete={() => setIsPlaying(false)}
         style={className==='col'? {cursor:'pointer',color:'#D95D39'}: {cursor:'pointer'}}>
            {children}
        </motion.span>
    )
}
export default TextSpan;