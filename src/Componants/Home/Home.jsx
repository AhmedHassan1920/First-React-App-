import React from 'react'
import Homeimg from "../../Assets/imgs/avatar.svg"
import style from './Home.module.css'

export default function Home() {
  return <>
    <div className='d-flex flex-column align-items-center'>
    <div className='w-75'>
      <img src={Homeimg} className='w-100' alt="Home-Img" />
    </div>

    <div>
      <h2 className='fw-bold pt-3'>START FRAMEWOK</h2>
      <div className={`${style.starContainer} d-flex justify-content-center align-items-center`}><i className={`fa-solid fa-star`} ></i></div>
      <p className='pt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
  </>
}
