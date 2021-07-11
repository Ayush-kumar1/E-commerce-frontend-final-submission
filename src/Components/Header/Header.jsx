import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { useCart } from '../../CartContext';
import {Link} from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Header() {
    const {state,dispatch}=useCart();

    const navigate=useNavigate()

function Logout(){
    localStorage.clear();
    dispatch({type:"CLEAR"})
    navigate("/login")
}
     
    return (
        <div className="nav">
            <Link to={state?"/home":"/login"}>
            <h2 className="brand-logo" >SnatchKart</h2>
            </Link>
             
             <div style={{display:"flex",gap:"1rem",paddingTop:"1rem"}}>
                 <Link to={state?"/product":"/login"}>
                 <h4 className="disappear">Products</h4>
                 </Link>

                 <Link to={state?"/aboutus":"/login"}>
                 <h4 className="disappear">About us</h4>
                 </Link>
             </div>

             <div  className="header-button">
                 <IconButton>
                     <Link to={state?"/wishlist":"/login"}>
                     <FavoriteIcon/>
                     </Link>
                 </IconButton>
                 <IconButton>
                     <Link to={state?"/cart":"/login"}>
                     <ShoppingCartIcon />
                     </Link>
                 </IconButton>
                 <IconButton>
                     <Link to="/login">
                     <PersonIcon />
                     </Link>
                 </IconButton>
                 <Button className="btn-header" variant="contained" color="secondary" onClick={()=>Logout()}>
                  Logout
                 </Button>
             </div>
            
        </div>
    )
}

export default Header
