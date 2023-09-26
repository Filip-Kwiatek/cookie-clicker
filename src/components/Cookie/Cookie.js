import { useState } from "react";

import classes from "./Cookie.module.css";

const Cookie = ({ handleClick }) => {
  const [active, setIsActive] = useState(false);

  const showPlus = () => {
    setIsActive(!active);
  };

  const hidePlus = () => {
    setIsActive(false);
  };

  setTimeout(hidePlus, 1000);

  return (
    <>
      <img
        className={classes.cookie}
        src="https://64.media.tumblr.com/a2d28a3237729239a9eb0d91e1b47c8a/tumblr_mrma4kuNQP1s5jjtzo1_500.png"
        alt="cookie"
        onClick={() => {
          handleClick();
          showPlus();
        }}
      />
      <span className={classes.plus}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3179/3179538.png"
          alt="plus one"
          style={{ visibility: active ? "visible" : "hidden" }}
        />
      </span>
    </>
  );
};

export default Cookie;
