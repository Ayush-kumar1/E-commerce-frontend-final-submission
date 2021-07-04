import { createContext, useContext,useReducer } from "react";
import { reducer,initialState } from "./Reducer";
export const CartContext=createContext();

export function CartProvider({children}){

    const[state,dispatch]=useReducer(reducer,initialState)
    return(
 
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}