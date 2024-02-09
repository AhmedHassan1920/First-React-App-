import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <div className={`container-fluid fixed-top ${style.navBar}`}>
        <div className="container p-3">
          <div className="row">
            <div className="col-md-5">
              <h1 className='fw-bold text-white'><Link to="/" onClick={() => handleLinkClick('home')}>Start Framwork</Link></h1>
            </div>
            <div className="col-md-7 d-flex justify-content-end align-align-items-center  text-white ">
              <ul className='d-flex'>
                <li><Link className={activeLink === 'about' ? style.active : ''} to="about" onClick={() => handleLinkClick('about')}>About</Link></li>
                <li><Link className={activeLink === 'portfolio' ? style.active : ''} to="portfolio" onClick={() => handleLinkClick('portfolio')}>Portfolio</Link></li>
                <li><Link className={activeLink === 'contact' ? style.active : ''} to="contact" onClick={() => handleLinkClick('contact')}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
