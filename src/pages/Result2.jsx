import React from "react";
import "../css/style.css";
import resultImage from "../img/result-image.png"; // 画像を差し替え

function Result2() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img src={resultImage} alt="" className="result-image" />
        <h3 className="result-heading">新たな発見の１日！</h3>
        <p className="result-description">
          Embrace new opportunities and surprises!
        </p>
      </div>
    </div>
  );
}

export default Result2;
