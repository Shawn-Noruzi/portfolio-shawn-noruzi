import React from "react";
import "./mediabar.scss";

const MediaBar = (mobile) => {
  return (
    <div className="icon-bar">
      <a href="https://github.com/Shawn-Noruzi" className="github">
        <i className="fa fa-github"></i>
      </a>
      <a href="mailto:Shawn.Noruzi@gmail.com" className="google">
        <i className="fa fa-google"></i>
      </a>
      <a href="https://www.linkedin.com/in/shawn-noruzi/" className="linkedin">
        <i className="fa fa-linkedin"></i>
      </a>
    </div>
  );
};

export default MediaBar;
