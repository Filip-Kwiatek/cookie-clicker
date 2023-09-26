import React from "react";

import classes from "./UpperWrapper.module.css";

const UpperWrapper = (props) => {
  return <div className={classes.wrap}>{props.children}</div>;
};

export default UpperWrapper;
