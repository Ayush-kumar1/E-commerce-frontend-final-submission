import React, { useEffect } from 'react'
import "./Home.css";
import shopping from "../../Images/Shopping.svg"
import { useCart } from '../../CartContext';
import {Link} from "react-router-dom";
function Home() {

    const{state,dispatch}=useCart();

    console.log(state);


    return (
        <>
        <div className="home_body">
            
            <div className="body_left">
                <div className="branding">
              <h1 className="branding-content">We don't sell</h1>
              <h1 className="branding-content">products.We</h1>
              <h1 className="branding-content">deliver aspirations</h1>
              <p>Get your most desired aspiration</p>
              <p>delivered to your home.Fast,secure</p>
              <p>and 100% satisfaction.</p>
              </div>
            </div>

            <div className="body_right">
                 <img className="home_img" src={shopping} alt="" />
            </div>

            
        </div>
        <Link to="/product">
        <button className="product_button">BROWSE PRODUCT</button>
        </Link>
        </>
    )
}

export default Home
