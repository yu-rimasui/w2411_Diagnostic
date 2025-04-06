import React from "react";
import "../css/style.css";
import topImage from "../img/result-image.png";

function Result4() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img
          src={topImage}
          alt="クリエイティブクラフター"
          className="result-image"
        />
        <h3 className="result-heading">クリエイティブクラフター</h3>
        <p className="result-description">
          適した起業方法：
          <br />
          ハンドメイド商品の製作販売、アート関連のワークショップ運営
        </p>
      </div>
    </div>
  );
}

export default Result4;
