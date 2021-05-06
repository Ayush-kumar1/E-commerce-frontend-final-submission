import React from 'react'
import './DemoProduct.css'
import {Link} from "react-router-dom"
// import { useStateValue } from './StateProvider'

function Product( {id,title, image, price, rating} ) {

    // const[{basket},dispatch]=useStateValue();
    // console.log("This is basket", basket);

    // const addToBasket=()=>{

    //     dispatch({
    //         type:"ADD_TO_BASKET",
    //         item:{
    //             id: id,
    //             title: title,
    //             image: image,
    //             price: price,
    //             rating: rating  
    //         }
    //     })
    // }
    return (
        <div className="product">

            <div className="product_info">
                 <h1 style={{color:"crimson"}}>{title} </h1>
                <p className="product_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_,i)=>(
                      <p>⭐</p>
                    ))}
                 
                </div>
            </div>

            <img className="demo_image"  src={image} alt=""/>
            <Link to="/products">
            <button className="product_button">Check all offers</button>
            </Link>

        </div>
    )
}

export default Product
