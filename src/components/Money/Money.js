import React from "react";

import classes from "./Money.module.css";

const Money = ({ money_quantity }) => {
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.image}
        src="https://orteil.dashnet.org/experiments/cookie/currency.png"
        alt="cookie"
      />
      <span>{money_quantity}</span>
    </div>
  );
};

export default Money;
