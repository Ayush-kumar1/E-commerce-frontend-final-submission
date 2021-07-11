import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";
import axios from "axios";

function Wishlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://snatchkart-12.herokuapp.com/mywishlist", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.saved);
      });
  }, []);

  const deletewishlist = async (id) => {
    const res = await axios
      .put("https://snatchkart-12.herokuapp.com/removewishlist", {
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
      <div className="left-body">
        <h1>Wishlist</h1>

        {
        data.length===0
        ? <h2>You cart is empty</h2>
        :data &&
          data.map((elem) => {
           return  <div className="media_card_cart">
              <img
                className="img"
                src={elem.image}
                alt=""
              />

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

                <div>
                  <Button variant="contained" color="secondary" onClick={()=>deletewishlist(elem._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            </div>;
          })}
      </div>
    </div>
  );
}

export default Wishlist;
