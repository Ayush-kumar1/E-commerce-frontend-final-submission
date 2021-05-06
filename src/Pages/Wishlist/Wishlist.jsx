import React, {useState} from 'react'
import { useCart } from '../../Context/CartContext'
import SingleContent from '../../SingleContent/SingleContent';
import "./Wishlist.css"

const Wishlist = () => {
    const {fav}=useCart()
   


    return (
        <>
        <h1 style={{paddingTop:"7rem"}}>Your Wishlist</h1>
        <div className="display_page">
         
         {
             fav.map((elem)=>
                <SingleContent 
                key={elem.id}
                id={elem.id}
                name={elem.name}
                price={elem.price}
                image={elem.image}
                wishlist={elem.wishlist}
                quantity={elem.quantity}
                payload={elem} />
             )
         }
               
        </div>
        </>
    )
}

export default Wishlist
