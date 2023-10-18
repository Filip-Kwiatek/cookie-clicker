import React from "react";

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

  return (
    <li
      key={index}
      onClick={() => {
        if (collectedCookies < price) {
          return;
        }
        onBuy(price, increment);
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
        <p className={classes.description}>{description}</p>
      </div>
    </li>
  );
};
export default MenuOption;
