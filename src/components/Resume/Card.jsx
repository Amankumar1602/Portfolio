import React from 'react'

const Card = (props) => {
  return (
    <div className='timeline__item'>
      <h3 className='timeline__title'>{props.title}</h3>
      <i className={props.icon}></i>
      <span className='timeline__date'>{props.year}</span>
      <p className='timeline__text'>{props.desc}</p>
    </div>
  )
}

export default Card