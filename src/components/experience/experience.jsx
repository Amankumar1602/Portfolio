import React from 'react'
import "./experience.css"
import Image2 from "../../assets/service-2.svg"
import Image1 from "../../assets/service-1.svg";

const data = [
  {
    id: 2,
    image: Image2,
    title: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const experience = () => {
  return (
    <section className='services container section' id='services'>
      <h2 className='section__title'>Skills</h2>

      <div className='services__container grid'>
        {data.map(({id,image,title,description}) => {
          return (
            <div className='services__card' key={id}>
              <img src={image} alt='' className='services__img' />
              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default experience