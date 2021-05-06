import {createContext, useContext, useState, useReducer,useEffect} from "react";
import axios from "axios";

export const CartContext=createContext();


export function CartProvider({children}){
   
    const [fav,setFav]=useState([])
    const [product_data, setProduct_data]=useState([]);
    // const [itemsinCart, setItemsinCart]=useState([])


    async function getData() {
        const temp = await axios.get(
          "https://backend-ecommerce-12.herokuapp.com/products"
        );
        // console.log(temp.data.products);
    
        setProduct_data(temp.data.products);
      }

      useEffect(() => {
         getData(); 
          
      }, [])

      

    const reducer=(state,action)=>{

        switch(action.type){
            
            case "ADD_TO_CART":
            return [...state,action.payload]



            case "INCREMENT":
                return state.map((item)=>(
                   item._id===action.payload?
                   {...item,quantity:item.quantity + 1}:item

                )

                )
                    
                

            case "DECREMENT":
                console.log(action.payload)
                return state.map((item)=>(
                    item._id===action.payload ?
                    {...item,quantity:item.quantity - 1}:item
 
                 )
 
                 )

                default:
                    return state
        }

    }

    const [state,dispatch]=useReducer(reducer,[]);
    return(
        <CartContext.Provider value={{Data, fav, setFav, dispatch,cart:state, product_data}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}

const Data = [{
    id: 1,
    name: "Solid men polo neck",
    price: 700,
    wishlist: false,
    inStock: true,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/495/594/kmkxbww0/t-shirt/z/m/x/m-517co-french-connection-original-imagfg5shhwy94ww.jpeg?q=50"
},
{
    id: 2,
    name: "Printed Men Round Neck Blue T-Shirt",
    price: 449,
    wishlist: false,
    inStock: true,
    fastDelivery:false,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/495/594/kmjhw280/t-shirt/w/z/c/m-566ub-french-connection-original-imagfezp5yzzcebe.jpeg?q=50"
},
{
    id: 3,
    name: "Color Block Men Round Neck Black T-Shirt",
    price: 399,
    wishlist: false,
    inStock: false,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=50"
},
{
    id: 4,
    name: "Red black Men striped hoodie",
    price: 259,
    wishlist: true,
    inStock: true,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/495/594/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50"
},
{
    id: 5,
    name: "Striped Men Round Neck Yellow T-Shirt",
    price: 349,
    wishlist: true,
    inStock: false,
    fastDelivery:false,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/kjiwfbk0-0/t-shirt/e/k/s/m-t305-as10yldnwh-seven-rocks-original-imafz2qfvx7tznnn.jpeg?q=50"
},
{
    id: 6,
    name: "Solid Men Polo Neck White, Black T-Shirt",
    price: 324,
    wishlist: false,
    inStock: true,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/kfeamq80-0/shirt/p/d/k/xl-bss-try-this-original-imafvvae4ghhy5pd.jpeg?q=50"
},
{
    id: 7,
    name: "Solid Men Mandarin Collar White, Black T-Shirt",
    price: 305,
    wishlist: false,
    inStock: true,
    fastDelivery:false,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/kjuby4w0/t-shirt/s/x/z/m-fc4058-fastcolors-original-imafzbj546kdvbh8.jpeg?q=50"
},
{
    id: 8,
    name: "Athleisure Striped Men Boat Neck Grey T-Shirt",
    price: 247,
    wishlist: true,
    inStock: false,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/jjolt3k0/t-shirt/d/y/g/m-m7ss18tee066i-metronaut-original-imaf77evd4yxvfcg.jpeg?q=50"
},
{
    id: 9,
    name: "Solid Men Hooded Neck Black T-Shirt",
    price: 403,
    wishlist: false,
    inStock: true,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/495/594/kjuby4w0/t-shirt/2/v/a/3xl-t2-seven-rocks-original-imafzbptgchwstcx.jpeg?q=50"
},
{
    id: 10,
    name: "Striped Men Polo Neck White T-Shirt",
    price: 349,
    wishlist: false,
    inStock: true,
    fastDelivery:false,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50"
},
{
    id: 11,
    name: "Printed Men Hooded Neck Red T-Shirt",
    price: 319,
    wishlist: false,
    inStock: true,
    fastDelivery:false,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/kljrvrk0/t-shirt/q/r/0/l-trdhdful-d32-tripr-original-imagynnpg2fh62ht.jpeg?q=50"
},
{
    id: 12,
    name: "Printed Men Round Neck Black T-Shirt",
    price: 349,
    wishlist: false,
    inStock: false,
    fastDelivery:true,
    quantity: 0,
    image: "https://rukminim1.flixcart.com/image/800/960/kmkxbww0/t-shirt/g/2/s/m-567ep-french-connection-original-imagfg5sggksbth5.jpeg?q=50"
}
]
