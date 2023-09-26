import React from "react";

import classes from "./MenuOptions.module.css";

const MenuOption = (props) => {
  const { photo, alt, name, price, description, index } = props
  return (
    <li
      key={index}
      className={classes.big_wrapper}
      style={
        props.collectedCookies >= price
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
        <li className={classes.description}>{description}</li>
      </div>
    </li>
  );

};
export default MenuOption;
