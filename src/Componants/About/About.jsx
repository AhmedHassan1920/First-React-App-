import React from 'react'
import style from './About.module.css'

export default function About() {
  return <>
    <div className="container">
    <div className='d-flex flex-column align-items-center'>
        <h2 className='fw-bold pt-3'>ABOUT COMPONENT</h2>
        <div className={` ${style.starContainer} d-flex justify-content-center align-items-center`}><i className={`fa-solid fa-star`} ></i></div>
        <div className='d-flex pt-4 px-5'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        </div>
    </div>
  </>
}
