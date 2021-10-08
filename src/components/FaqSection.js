import React from "react";
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrolReveal } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return(
    <FAQ
     variants={scrolReveal}
     ref={element}
     animate={controls}
     initial='hidden'
    >
      <h2>
        Any Question? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?</p>
          </div>
        </Toggle>
        <Toggle title="Daily Shedule?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?</p>
        </div>
        </Toggle>
        <Toggle title="Diferent Payment Methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?</p>
          </div>
        </Toggle>
        <Toggle title="What product do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, minima?</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
}
const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer{
    padding: 3rem 0rem;
    cursor: pointer;
    user-select: none;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;