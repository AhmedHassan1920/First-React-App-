import React from 'react'
import style from './Contact.module.css'


export default function Contact() {
  return <>
    <div className="container">
    <div className='d-flex flex-column align-items-center pb-5'>
        <h2 className='fw-bold pt-3'>CONTACT COMPONENT</h2>
        <div className={` ${style.starContainer} d-flex justify-content-center align-items-center`}><i className={`fa-solid fa-star`} ></i></div>
        </div>

        <div className="w-100 d-flex justify-content-center align-items-center ">
        <div className="form pt-4 w-50">
          <input type="text" className='w-100 mb-4 p-1' placeholder='User Name:'  />
          <input type="text" className='w-100 mb-4 p-1' placeholder='User Age:'  />
          <input type="email" className='w-100 mb-4 p-1' placeholder='User Email:'  />
          <input type="password" className='w-100 mb-4 p-1' placeholder='User Password:'  />
          <button className={`${style.sendMsgBtn}`}>Send Message</button>
        </div>
        </div>
    </div>
  </>
}
