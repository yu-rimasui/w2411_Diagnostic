import React from "react";
import "../css/style.css";
import topImage from "../img/result-image.png";

function Result3() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img
          src={topImage}
          alt="ビジョナリーイノベーター"
          className="result-image"
        />
        <h3 className="result-heading">ビジョナリーイノベーター</h3>
        <p className="result-description">
          適した起業方法：
          <br />
          テクノロジースタートアップ、クリエイティブエージェンシー
        </p>
      </div>
    </div>
  );
}

export default Result3;
