import React, { useEffect } from "react";

const Timer = ({ dispatch, secondReminding }) => {
  const mins = Math.floor(secondReminding / 60);
  const secs = secondReminding % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
};

export default Timer;
