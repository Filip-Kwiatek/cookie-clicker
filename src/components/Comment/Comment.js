import { useCallback, useEffect, useState } from "react";

import classes from "./Comment.module.css";

const Comment = () => {
  const comments = [
    "Your cookies are renowned!",
    "Your cookies are good!",
    "Nice cookies <3",
  ];
  const [currentIndex, setCurrentIndex] = useState("Start baking!");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * comments.length);
    setCurrentIndex(comments[index]);
  });

  useEffect(() => {
    const intervalId = setInterval(shuffle, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className={classes.wrapper}>
      <p>{currentIndex}</p>
    </div>
  );
};

export default Comment;
