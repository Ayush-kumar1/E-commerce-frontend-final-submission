import React from 'react'
import "./Header.css"
import logo1 from "../Images/logo1.png"
import logo2 from "../Images/logo2.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <div className="logo_position"> 

            <Link to="/">
            <img src={logo1} className="logo" alt="" />
            </Link>
            </div>

            <div>
            <span onClick={()=> window.scroll(0,0)}>Nginx Kart</span>
            </div>

            
           <div>
          
            <Link to="/wishlist">
           <FavoriteIcon color="action" fontSize="large"/>
           </Link>

           <Link to="/cart">
           <ShoppingCartIcon color="action" fontSize="large"/>
           
           </Link>
           </div>
           

           {/* <div>
               <FavoriteIcon/>
           </div> */}
            
            
            
        </div>
    )
}

export default Header
