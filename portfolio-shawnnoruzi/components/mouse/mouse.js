import React from "react";
import "./mouse.scss";


const Mouse = ({ visible = true }) => {
  const className = ["scroll"];

  if (visible === false) {
    className.push("hidden");
  }
  return (
    <button className={className.join(" ").trim()}>
      <span />
    </button>
  );
};

export default Mouse;


