import React from 'react';
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import Socials from "./socials";
import ScrollDown from "./scrolldown";
import Shapes from './shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className='home__img' />
        <h1 className="home__name">Aman Kumar</h1>
        <span className='home__education'>I'm a Front-End developer
        </span>
        
        <Socials />

        <a href='#contact' className='btn'>Contact Me</a>

        <ScrollDown />
      </div>
      <Shapes/>
    </section>
  )
}

export default Home