import React from "react";

import UpdateLogs from "./UpdateLogs";

import classes from "./UpdateMenu.module.css";

const UpdateMenu = () => {
  return (
    <div className={classes.wrapper}>
      <UpdateLogs />
    </div>
  );
};

export default UpdateMenu;
