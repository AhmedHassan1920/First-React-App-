import React from 'react'
import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className=' bg-second-color text-center text-white'>
            <div className="footer-up px-5 py-5">
              <div className="row">
                <div className="col-md-4">
                  <h4>LOCATION</h4>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
            
                <div className="col-md-4">
                  <h4>AROUND THE WEB</h4>
                  <div className="social-icons d-flex justify-content-center  mt-3 ">
                  <span className={`mx-1 p-2 ${style.icon}`}><i className="fa-brands fa-facebook" ></i></span>
                  <span className={`mx-1 p-2 ${style.icon}`}><i className="fa-brands fa-twitter" ></i></span>
                  <span className={`mx-1 p-2 ${style.icon}`}><i className="fa-brands fa-linkedin" ></i></span>
                  <span className={`mx-1 p-2 ${style.icon}`}><i className="fa-brands fa-youtube" ></i></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <h4>ABOUT FREELANCER</h4>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>

            <div className="footer-down bg-dark text-center text-white py-3">
                  Copyright © Your Website 2024
            </div>
        </footer>
  )
}
