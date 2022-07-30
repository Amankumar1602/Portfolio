import React from 'react'
import "./About.css"
import Image from "../../assets/avatar-2.svg";;

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className='about__info'>
            <p classname="about__description">
            I am Aman Kumar, a web developer and 
            Machine Learning Programmer.
            I have experience in Website 
            designing and development, also good 
            at designing Machine Learning algoritms.
            </p>
            <a href='' className='btn'>Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Machine Learning</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage Machine_learning"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DSA</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage DSA"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About