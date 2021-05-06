import React from 'react'
import { useCart } from '../Context/CartContext'
import "./SingleContent.css"
// import "https://ui-ninja.netlify.app/style.css"

const SingleContent = ({id,image,name,price,wishlist,quantity,stock,delivery,Complete_item}) => {

   const {setFav, dispatch,}=useCart();
    return (
        <div className="card">
             
             <img className="poster" src={image} alt=""/>
             <h2>{name}</h2>
             <p>Rs. {price}</p>
             <h3>{stock}</h3>
             <h3>{delivery}</h3>

             <span>
             <button className="btn-primary"
             onClick={()=> dispatch({type: "ADD_TO_CART", payload: Complete_item})}
             >Add to cart</button>

             <button className="wishlist_btn"
              onClick={()=>  setFav((items)=> [...items,Complete_item])}>
                 ❤️</button>
             </span>
            
        </div>
    )
}

export default SingleContent
