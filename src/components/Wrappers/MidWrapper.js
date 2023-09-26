import React from "react";

import classes from "./MidWrapper.module.css";

const MidWrapper = (props) => {
  return <div className={classes.wrap}>{props.children}</div>;
};

export default MidWrapper;
