import React, { useState } from "react";

import classes from "./MenuOptions.module.css";

const MenuOption = (props) => {
  const {
    photo,
    alt,
    name,
    increment,
    description,
    index,
    collectedCookies,
    onBuy,
  } = props;

  let { price } = props;

  let [quantity, setQuantity] = useState(0);

  return (
    <li
      key={index}
      onClick={() => {
        if (collectedCookies < price) {
          return;
        }
        setQuantity((prevState) => {
          return prevState + 1;
        });
        onBuy(price, increment, index);
      }}
      className={classes.big_wrapper}
      style={
        collectedCookies >= price
          ? {
              backgroundColor: "white",
              color: "black",
              cursor: "pointer",
            }
          : { backgroundColor: "#666" }
      }
    >
      <img src={photo} alt={alt} />
      <div className={classes.small_wrapper}>
        <p className={classes.title}>
          {name} -
          <img
            src="https://orteil.dashnet.org/experiments/cookie/currencysmall.png"
            alt="small cookie"
          />
          {price}
        </p>
        <div className={classes.end_wrapper}>
          <p className={classes.description}>{description}</p>
          <p
            className={classes.quantity}
            style={{ visibility: quantity === 0 ? "hidden" : "visible" }}
          >
            {quantity}
          </p>
        </div>
      </div>
    </li>
  );
};
export default MenuOption;
