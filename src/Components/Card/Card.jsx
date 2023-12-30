import React from 'react'
import "./Card.css";

export default function Card({ heading, paragraph, imgSrc }) {
    return (
        <div className="card col-md-3 col-sm-5 col-12 text-bg-dark">
            <img src={imgSrc} alt="" srcset="" />
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">{paragraph}</p>
            </div>
        </div>
    )
}
