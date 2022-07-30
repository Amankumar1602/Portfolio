import React from 'react'

const socials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.linkedin.com/in/aman-kumar-a9a8b817b/" 
      classname="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/aman_00_kumar/" classname="home__social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-instagram"></i></a>
      <a href="https://twitter.com/AmanKumar1602" classname="home__social-link" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-twitter"></i></a>
      {/* <a href="" classname="home__social-link" target="_blank">
      <i class="fa-brands fa-facebook"></i></a> */}
    </div>
  )
}

export default socials