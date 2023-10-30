import { useState } from "react";

import classes from "./Cookie.module.css";

const Cookie = ({ handleClick, boughtTimes }) => {
  const [active, setIsActive] = useState(false);

  const showPlus = () => {
    setIsActive(!active);
  };

  const hidePlus = () => {
    setIsActive(false);
  };
  setTimeout(hidePlus, 900);
  console.log(boughtTimes);

  return (
    <>
      <div className={classes.icons}>
        <span className={classes.pointer}>{boughtTimes.pointer}</span>
        <span className={classes.grandma}>{boughtTimes.grandma}</span>
        <span className={classes.factory}>{boughtTimes.factory}</span>
        <span className={classes.mine}>{boughtTimes.mine}</span>
        <span className={classes.shipment}>{boughtTimes.shipment}</span>
        <span className={classes.alchemylab}>{boughtTimes.alchemylab}</span>
        <span className={classes.portal}>{boughtTimes.portal}</span>
        <span className={classes.timemachine}>{boughtTimes.timemachine}</span>
      </div>
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
