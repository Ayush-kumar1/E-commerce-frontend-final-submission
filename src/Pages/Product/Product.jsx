import React, { useReducer } from 'react'
import { useCart } from '../../Context/CartContext'
import SingleContent from "../../SingleContent/SingleContent"
// import Data from "../../Data";
import "./Product.css"

const Product = () => {

    const {Data, product_data}=useCart();

    // console.log(Data)
    // console.log(product_data)

    const initialState={
        sortBy:null,
        filterByStock:false,
        filterByDelivery:false
    }

    const reducer=(state,action)=>{
          
        switch(action.type){

            case "SORT":
                return {...state, sortBy:action.payload};

            case "FILTER-inventory":
                return {...state, filterByStock:!state.filterByStock}   
                
            case "FILTER-delivery":
                return {...state, filterByDelivery:!state.filterByDelivery}    

            default:
                return state    
        }
    }

    const [state,dispatch]=useReducer(reducer,initialState)

    function getSorted(){
        if(state.sortBy==="HIGH_TO_LOW"){
            return product_data.sort( (a,b)=> b.price - a.price);
        }

        else if(state.sortBy==="LOW_TO_HIGH"){
            return product_data.sort( (a,b)=> a.price- b.price);
        }

    }


    function getFilter(){
         
        if(state.filterByStock===true){
            return product_data.filter((elem)=> elem.inStock===true)
        }

        if(state.filterByDelivery===true){
            return product_data.filter((elem)=> elem.fastDelivery===true)
        }

        return product_data;

    }

    getSorted();
    const newArr=getFilter()


    
    return (
        <>

        <div className="filter_display">
              
        <fieldset>
         
         <legend>SortBy</legend>
         <label>
             <input type="radio" 
             name="sort"
             onChange={()=> dispatch({type:"SORT", payload:"HIGH_TO_LOW"})}
             />
             Price-High_to_Low
         </label>
         <label>
             <input type="radio" 
             name="sort"
             onChange={()=> dispatch({type:"SORT", payload:"LOW_TO_HIGH"})}
             />
             Price-Low_to_High
         </label>
        </fieldset>


        <fieldset>
        <legend>Filter by</legend>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "FILTER-inventory" })}
          />
          in-Stock
        </label>
        <label></label>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "FILTER-delivery" })}
        />
        fast-delivery-available
      </fieldset>


        </div>

        <span className="pageTitle">Products Page</span>

        <div className="display_page">
            {
                newArr.map((elem)=>
                    
                    <SingleContent 
                    key={elem.id}
                    id={elem.id}
                    name={elem.name}
                    price={elem.price}
                    image={elem.image}
                    wishlist={elem.wishlist}
                    quantity={elem.quantity}
                    stock={elem.inStock===true?"Available":"Not Available"}
                    delivery={elem.fastDelivery===true?"Fast Delivery":"Normal Delivery"}
                    Complete_item={elem} />
                )
            }
        </div>
        </>
    )
}

export default Product
