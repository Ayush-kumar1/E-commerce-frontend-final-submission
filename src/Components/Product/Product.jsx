import React, { useState, useEffect,useReducer } from "react";
import "./Product.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://snatchkart-12.herokuapp.com/allproduct")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.products)
        setData(result.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addtowishlist=(name,rating,price,image)=>{
      
    fetch("https://snatchkart-12.herokuapp.com/addtowishlist",{
      method:"post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        name,
        rating,
        price,
        image
      })
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
    })
  }

  console.log(data);

  const initialstate={
    sortBy:null,
    filterByrating5:false,
    filterByrating4:false,
    filterByrating3:false,
    filterByavailability:false,
    delivery:false
    
  }

  const reducer=(state,action)=>{
        switch(action.type){
          case "SORT":
            return {
              ...state,sortBy:action.payload
            }
           
          case "Filter-rating-5":
            return{
              ...state,filterByrating5:!state.filterByrating5
            }  
          case "Filter-rating-4":
            return{
              ...state,filterByrating4:!state.filterByrating4
            }  
          case "Filter-rating-3":
            return{
              ...state,filterByrating3:!state.filterByrating3
            }  

          case "Filter-instock":
            return{
              ...state,filterByavailability:!state.filterByavailability
            }  

          case "Filter-delivery":
            return{
              ...state,delivery:!state.delivery
            }  

            default:
              return state;
        }
  }

  const[state,dispatch]=useReducer(reducer,initialstate);

  function getSorted(){
    if(state.sortBy==="HIGH_TO_LOW"){
      return data.sort((a,b)=>b.price-a.price)
    }
    else if(state.sortBy==="LOW_TO_HIGH"){
      return data.sort((a,b)=>a.price-b.price)
    }
  }

  function getfilter(){
    if(state.filterByrating5===true){
      return data.filter(elem=> elem.rating===5);
    }
      
    if(state.filterByrating4===true){
      return data.filter(elem=> elem.rating===4)
    }

    if(state.filterByrating3===true){
      return data.filter(elem=> 
         elem.rating===3 || elem.rating===2 || elem.rating===1)
    }
    if(state.filterByavailability===true){
      return data.filter(elem=>
        elem.availability===true
      )
    }

    if(state.delivery===true){
      return data.filter(elem=> elem.fast_delivery===true)
    }

    return data;
    
  }

  getSorted();
  const newarr=getfilter();

  const addtocart=(name,rating,image,price)=>{
       fetch("https://snatchkart-12.herokuapp.com/addcart",{
         method:"post",
         headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          name,
          rating,
          image,
          price
         })        
       })
       .then(res=>res.json())
       .then(result=>{
         console.log(result);
       })
  }

  return (
    <div>
      <div className="sidenav">
        <div style={{ paddingTop: "3rem" }}>
          <h2 className="sidebar-content">Filters</h2>
          <hr />
          
          <div className="sort-body">

            <h3>Sort by price</h3>
          <label>
          <input type="radio" name="sort" 
          onChange={()=> dispatch({type:"SORT", payload:"HIGH_TO_LOW"})} />
          High-to-low
          </label>

          <label>
          <input type="radio" name="sort" style={{color:"white"}}
          onChange={()=> dispatch({type:"SORT", payload:"LOW_TO_HIGH"})} />
          Low-to-high
          </label>
          </div>

          <hr />

          <div className="filter-body">
            
            <h2>Ratings</h2>
            <label>
              <input 
              type="checkbox"
              onChange={()=>dispatch({type:"Filter-rating-5"})} />
              5 star
            </label>
            <label>
              <input 
              type="checkbox"
              onChange={()=>dispatch({type:"Filter-rating-4"})} />
              4 star
            </label>
            <label>
              <input 
              type="checkbox"
              onChange={()=>dispatch({type:"Filter-rating-3"})} />
              3 star & below
            </label>

            <hr />

            <h2>Availability</h2>

            <label>
              <input 
              type="checkbox"
              onChange={()=>dispatch({type:"Filter-instock"})} />
              exclude out of stock
            </label>
 
 
             <label>
              <input 
              type="checkbox"
              onChange={()=>dispatch({type:"Filter-delivery"})} />
              Fast Delivery
            </label>

          </div>
          
        </div>
      </div>

      <div className="body">
        {newarr &&
          newarr.map((elem) => {
            return (
              <div className="media_card_product">
               
                <img
                  className="img"
                  src={elem.image}
                  alt=""
                />
                <h4>{elem.name}</h4>
                <h4>Rating- {elem.rating}⭐ </h4>
                <h3>Rs. {elem.price}</h3>
                

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    paddingLeft: "6.5rem",
                  }}
                >
                  <IconButton onClick={()=>addtowishlist(elem.name,elem.rating,elem.price,elem.image)}>
                    <FavoriteIcon color="inherit" />
                  </IconButton>

                  <IconButton>
                    <ShoppingCartIcon onClick={()=>addtocart(elem.name,elem.rating,elem.image,elem.price)} />
                  </IconButton>
                </div>
              </div>
            );
          })}
        
      </div>
    </div>
  );
}

export default Product;
