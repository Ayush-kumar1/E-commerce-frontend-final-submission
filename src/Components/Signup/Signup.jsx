import React, { useState,useEffect } from "react";
import "./Signup.css";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link,useNavigate } from "react-router-dom";
import M from "materialize-css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image,setImage]=useState("");
  const [url,setUrl]=useState(null);
 
  let navigate=useNavigate();



 


  const postData=()=>{
  
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      // return M.toast({html: "Invalid email"})
      return toast.error("Invalid email")
  }
  else{
    fetch("https://snatchkart-12.herokuapp.com/signup", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:name,
            password:password,
            email:email,
           
           
        })
    })
    .then(res=> res.json())
    .then(data=> {

      if(data.error){
          // M.toast({html: data.error, classes:'#c62828 red darken-3'})
         return toast.error(data.error)
          
      }
      else{
          
          console.log(data.message)
          toast.success("Registered sucessfully")
          navigate("/login")
      }
        
    })
    .catch(err=>{
        console.log(err)
        toast.error(err)
        
    })
  }
    
  }



  return (
    <div style={{ paddingTop: "9rem" }}>
      <div className="media_card_signup">
        <h1 className="brand-logo" style={{ margin: "0 auto" }}>
        SnatchKart
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          

          <Button
            variant="contained"
            color="secondary"
            style={{ width: "2rem", margin: "0px auto" }}
            onClick={()=> postData()}
          >
            Signup
          </Button>

          <div className="signup-redirect">
            <Link to="/login">
              {" "}
              <h5 className="signup-redirect" style={{ color: "black" }}>
                Already have an account??
              </h5>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer 
      position="top-right"
      autoClose="3000" />
      <ToastContainer 
      position="top-right"
      autoClose="3000" />
      <ToastContainer 
      position="top-right"
      autoClose="3000" />
      <ToastContainer 
      position="top-right"
      autoClose="3000" />
    </div>
  );
}

export default Signup;
