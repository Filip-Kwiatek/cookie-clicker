import React from "react";

import classes from "./Credits.module.css";

const Credits = () => {
  return (
    <div className={classes.credits}>
      <b>Cookie Clicker</b> © <a href="/">Orteil</a>, 2013 - hosted by
      <a href="/"> DashNet</a> | check out my
      <a href="/"> Twitter</a> and <a href="/">tumblr</a> | also : 
      <a href="/"> Nested</a> | the big update is <a href="/">out</a>!
    </div>
  );
};

export default Credits;
