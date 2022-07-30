import React,{useState} from 'react'
import "./Project.css"
import Menu from "./Menu"

const Project = () => {
  const[item,setItem]=useState(Menu);
  const filterItem=(categoryItem)=>{
    const updatedItem=Menu.filter((curElem)=>{
      return curElem.category===categoryItem;
    });

    setItem(updatedItem);
  }
  return (
    <section className='work container section' id='work'>
      <h2 className='section-title'>Projects</h2>

      <div className='work__filters'>
        <span className='work__item' onClick={()=>setItem(Menu)}>Everything</span>
        <span className='work__item' onClick={()=>filterItem("Website")}>Website</span>
        <span className='work__item' onClick={()=>filterItem("Creative")}>Creative</span>
        <span className='work__item' onClick={()=>filterItem("ML")}>ML</span>
      </div>

      <div className='work__container grid'>
        {item.map((elem)=>{
          const{id,image,title,category}=elem;
          return(
            <div className='work__card' key={id}>
              <div className='work__thumbnail'>
                <img src={image} alt="" className='work__img' />
                <div className='work__mask'></div>
              </div>

              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a href='#' className='work__button'>
                <i className='icon-link work__button-icon'></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Project