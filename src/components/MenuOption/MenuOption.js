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

  let { price, setBoughtTimes } = props;

  let [quantity, setQuantity] = useState(0);

  return (
    <li
      key={index}
      onClick={() => {
        if (collectedCookies < price) {
          return;
        }

        switch (index) {
          case 0:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                pointer: quantity + 1,
              };
            });
            break;
          case 1:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                grandma: quantity + 1,
              };
            });
            break;
          case 2:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                factory: quantity + 1,
              };
            });
            break;
          case 3:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                mine: quantity + 1,
              };
            });
            break;
          case 4:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                shipment: quantity + 1,
              };
            });
            break;
          case 5:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                alchemylab: quantity + 1,
              };
            });
            break;
          case 6:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                portal: quantity + 1,
              };
            });
            break;
          default:
            setBoughtTimes((previousState) => {
              return {
                ...previousState,
                timemachine: quantity + 1,
              };
            });
        }
        // if (index === 0) {
        //   setBoughtTimes((previousState) => {
        //     return {
        //       ...previousState,
        //       pointer: quantity + 1,
        //     };
        //   });
        // } else if (index === 1) {
        //   console.log("grandma");
        // } else if (index === 2) {
        //   console.log("factory");
        // } else if (index === 3) {
        //   console.log("mine");
        // } else if (index === 4) {
        //   console.log("shipment");
        // } else if (index === 6) {
        //   console.log("alchemy lab");
        // } else if (index === 7) {
        //   console.log("portal");
        // } else {
        //   console.log("timemachine");
        // }

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
