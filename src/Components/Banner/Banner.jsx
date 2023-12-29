import React from 'react';
import "./Banner.css";
import stopwatchIcon from '../../stopwatchIcon.png';

export default function Banner() {
    return (
        <div className='BannerDiv'>
            <h1>My Site</h1>
            <h3>Dinosaures are cool</h3>
            <div className="bannerBtnDiv">
                <button>Docusaurus Tutorial - 5min <img src={stopwatchIcon} alt="" /></button>
            </div>
        </div>
    )
}
