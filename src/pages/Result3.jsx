import React from "react";
import "../css/style.css";
import resultImage from "../img/result-image.png";

function Result3() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img
          src={resultImage}
          alt=""
          className="result-image"
        />
        <h3 className="result-heading">挑戦の日！</h3>
        <p className="result-description">
          Your courage and determination will lead to success!
        </p>
      </div>
    </div>
  );
}

export default Result3;
