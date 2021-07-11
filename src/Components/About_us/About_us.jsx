import React from 'react'
import "./About_us.css";
import Delivery from "../../Images/Delivery.svg"
function About_us() {
    return (
        <div className="body-1">
        <div className="home_body-1">
            
            <div className="body_left-1">
                <div className="branding-1">
              <h1 className="branding-content-1">Who</h1>
              <h1 className="branding-content-1">are we?</h1>
              
              <p>We have served millions of people</p>
              <p>who aspire to better their lives.</p>
              <br />
              <p>We are present in 10 countries</p>
              <p>around the globe & are constantly </p>
              <p>expanding.</p>
              </div>
            </div>

            <div className="body_right-1">
                 <img className="home_img" src={Delivery} alt="" />
            </div>

            
        </div>
        <button className="product_button-1">SUBSCRIBE TO GET UPDATE</button>
        </div>
    )
}

export default About_us;
