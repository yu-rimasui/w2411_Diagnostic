import React from "react";
import "../css/style.css";
import resultImage from "../img/result-image.png";

function Result4() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img
          src={resultImage}
          alt=""
          className="result-image"
        />
        <h3 className="result-heading">リラックスできる１日！</h3>
        <p className="result-description">
          Take a deep breath and enjoy the calmness around you!
        </p>
      </div>
    </div>
  );
}

export default Result4;
