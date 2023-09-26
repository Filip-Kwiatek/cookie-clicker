import React from "react";
import MenuOption from "../MenuOption/MenuOption";

import classes from "./ShopMenu.module.css";

const ShopMenu = (props) => {
  return (
    <ul className={classes.wrapper}>
      <MenuOption money_quantity={props.money_quantity} />
    </ul>
  );
};

export default ShopMenu;
