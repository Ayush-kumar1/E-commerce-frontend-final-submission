import './App.css';
import Header from "./Header/Header"
import Product from './Pages/Product/Product';
import Wishlist from "./Pages/Wishlist/Wishlist"
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import Cart from "./Pages/Cart/Cart"
import Home from "./Pages/Home/Home"

function App() {
  return (

    
    
    <div className="App">
      
    
    <Router>
    <Header/>

      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/products"  element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart"  element={<Cart/>}/>
      </Routes>
    </Router>
    </div>
    

     
    
   

    // <div className="App">
    //   <Header/>
    //   {/* <Home/> */}
    //   <Product/>
    //   {/* <Wishlist/>  */}
    //    <Cart/>
    // </div>
  );
}

export default App;
