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
  setTimeout(hidePlus, 900);

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
        <p
          style={
            active
              ? {
                  visibility: "visible",
                  transform: "translateY(-25px)",
                  transition: "transform 250ms",
                }
              : { visibility: "hidden" }
          }
        >
          +1
        </p>
      </span>
    </>
  );
};

export default Cookie;
