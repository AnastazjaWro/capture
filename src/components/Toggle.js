
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
const Toggle = ({children,title}) => {
  const[toggle,setToggle] = useState(false);
  return(
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <Question layout>{title}</Question>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default Toggle;

const Question = styled(motion.h4)`
  padding: 3rem 0rem;
  user-select: none;
  cursor: pointer;
`; 