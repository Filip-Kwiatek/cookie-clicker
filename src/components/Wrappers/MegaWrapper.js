import React from "react";

import classes from "./MegaWrapper.module.css";

const MegaWrapper = (props) => {
  return <div className={classes.wrap}>{props.children}</div>;
};

export default MegaWrapper;
