import React, { useState, useEffect } from "react";
import "./Cart.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("https://snatchkart-12.herokuapp.com/mycart", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.list);
      });
  }, []);

  function total_price(data) {
    const sum = data.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    return sum;
  }

  const notify = () =>
    toast.info(
      "This is only a demo project,you can't purchase real products yet 😄"
    );

  function incrementer(id) {
    fetch("https://snatchkart-12.herokuapp.com/incrementer", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        cartid: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result.result._id) {
            return result.result;
          } else {
            return item;
          }
        });

        setData(newData);
      })
      .catch((err) => {
        console.log("error-" + err);
      });
  }

  function decrementer(id) {
    fetch("https://snatchkart-12.herokuapp.com/decrementer", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartid: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        const newData = data.map((item) => {
          if (item._id === result.result._id) {
            return result.result;
          } else {
            return item;
          }
        });

        setData(newData);
      })
      .catch((err) => {
        console.log("error-" + err);
      });
  }

  const deletecart = async (id) => {
    //   fetch("http://localhost:5000/removecart",{
    //     method:'put',
    //     body:{
    //       cartid:id
    //     }
    //   })
    //   .then(res=>res.json())
    //   .then(result=>{
    //     console.log(result)
    //   })
    //  }

    const res = await axios
      .put("https://snatchkart-12.herokuapp.com/removecart", {
        cartid: id,
      })
      .then((result) => {
        console.log(result.data.result);

        const newData = data.filter((elem) => {
          return elem._id !== result.data.result._id;
        });

        setData(newData);
      });
  };

  return (
    <div>
      <div className="cart-body">
        <div className="left">
          <div className="left-bodyy">
            <h1>Cart</h1>

            {data.length === 0 ? (
              <h2>You cart is empty</h2>
            ) : (
              data &&
              data.map((elem) => {
                return (
                  <div className="media_card_cart_holder">
                    <img className="img" src={elem.image} alt="" />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <h4>{elem.name}</h4>
                      <h4>{elem.rating}⭐</h4>
                      <h3>Rs.{elem.price}</h3>

                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          paddingTop: "2rem",
                        }}
                      >
                        <IconButton>
                          <AddIcon onClick={() => incrementer(elem._id)} />
                        </IconButton>

                        <h4 style={{ paddingTop: "1rem" }}>{elem.quantity}</h4>
                        <IconButton disabled={elem.quantity === 1}>
                          <RemoveIcon onClick={() => decrementer(elem._id)} />
                        </IconButton>
                      </div>

                      <div style={{ position: "absolute", bottom: "1rem" }}>
                        <Button
                          onClick={() => deletecart(elem._id)}
                          variant="contained"
                          color="secondary"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="right">
          <div className="total_price_card">
            <h2>Price details</h2>
            <h4>Total amount- {total_price(data)}</h4>
            <Button variant="contained" color="primary" onClick={notify}>
              Place order
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Cart;
