import React from "react";
import { Link } from "react-router-dom";

import classes from "./SaveMenu.module.css";
const SaveMenu = ({ cookiesps }) => {
  return (
    <ul className={classes.wrapper}>
      <li>
        <p>cookies/second : {cookiesps}</p>
      </li>
      <li>
        <Link>Export Save</Link>
      </li>
      <li>
        <Link>Import Save</Link>
      </li>
      <li
        onClick={() => {
          window.location.reload();
        }}
      >
        <Link>Reset</Link>
      </li>
      <li>
        <Link>Numbers On</Link>
      </li>
      <li>
        <Link>Flashing On</Link>
      </li>
      <p>running on v.0.1251</p>
    </ul>
  );
};

export default SaveMenu;
