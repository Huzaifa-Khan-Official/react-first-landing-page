import React, { useState } from 'react';
import './Navbar.css';
import dinosaur from '../../dinosaur.png';

export default function Navbar({isMoonClicked, setisMoonClicked}) {

  const handleSunClick = () => {
    setisMoonClicked(!isMoonClicked);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-sm bg-body-tertiary`} data-bs-theme={`${isMoonClicked ? 'dark' : ''}`}>
        <div className="container-fluid">
          <div className="navbarDiv">
            <a className="navbar-brand" href="#">
              <img src={dinosaur} alt="" />
              My Site
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Tutorial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`themeChangeDiv ${isMoonClicked ? 'clicked' : ''}`} onClick={handleSunClick}>
            <i class="fa-solid fa-moon"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
