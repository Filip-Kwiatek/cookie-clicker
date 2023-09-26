import React, { useEffect, useState } from "react";

import classes from "./MenuOptions.module.css";

const MenuOption = (props) => {
  // const [money, setMoney] = useState(props);
  const [combinedData, setCombinedData] = useState([
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/cursoricon.png",
      alt: "cursor",
      name: "Cursor",
      price: 15,
      description: "Autoclicks every 5 seconds.",
      increment: 0.2,
    },
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/grandmaicon.png",
      alt: "grandma",
      name: "Grandma",
      price: 100,
      description: "A nice grandma to bake more cookies.",
      increment: 1,
    },
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/factoryicon.png",
      alt: "factory",
      name: "Factory",
      price: 500,
      description: "Produced large quantity of cookies.",
      increment: 5,
    },
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/mineicon.png",
      alt: "Mine",
      name: "Mine",
      price: 2000,
      description: "Mines out cookie dough and chocolate chips.",
      increment: 10,
    },
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/shipmenticon.png",
      alt: "Shipment",
      name: "Shipment",
      price: 7000,
      description: "Brings in fresh cookies from the cookie planet.",
      increment: 50,
    },
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/labicon.png",
      alt: "Alchemy Lab",
      name: "Alchemy Lab",
      price: 50000,
      description: "Turns gold into cookies!",
      increment: 100,
    },
    {
      photo: "https://orteil.dashnet.org/experiments/cookie/portalicon.png",
      alt: "Portal",
      name: "Portal",
      price: 1000000,
      description: "Opens a door to the Cookeverse.",
      increment: 500,
    },
    {
      photo:
        "https://orteil.dashnet.org/experiments/cookie/timemachineicon.png",
      alt: "Timemachine",
      name: "Timemachine",
      price: 123456789,
      description: "Brings cookies from the past, before they were even eaten.",
      increment: 10000,
    },
  ]);

  // useEffect(() => {
  //   setMoney(props);
  // }, [props]);

  return (
    <>
      {combinedData.map(({ photo, alt, name, price, description, index }) => {
        return (
          <ul
            key={index}
            className={classes.big_wrapper}
            style={
              props.money_quantity >= price
                ? {
                    backgroundColor: "white",
                    color: "black",
                    cursor: "pointer",
                  }
                : { backgroundColor: "#666" }
            }
          >
            <img src={photo} alt={alt} />
            <ul className={classes.small_wrapper}>
              <li className={classes.title}>
                {name} -
                <img
                  src="https://orteil.dashnet.org/experiments/cookie/currencysmall.png"
                  alt="small cookie"
                />
                {price}
              </li>
              <li className={classes.description}>{description}</li>
            </ul>
          </ul>
        );
      })}
    </>
  );
};
export default MenuOption;
