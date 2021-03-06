import React from "react";
import home1 from '../img/home1.png';
import {About,Description,Image,Hide} from '../styles';
//animations
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return(
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
                We work to make 
              </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
            <span>true.</span> 
            </motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography ideas that you have. We have profesionals with amazing skills.
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
        </Description>
      <Image>
          <motion.img variants={photoAnim} src={home1} alt="home1" />
      </Image>
      <Wave/>
    </About>
  )
};


export default AboutSection;