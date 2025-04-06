import React from "react";
import "../css/style.css";
import topImage from "../img/result-image.png"; // 画像を差し替え

function Result2() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img src={topImage} alt="堅実なビルダー" className="result-image" />
        <h3 className="result-heading">堅実なビルダー</h3>
        <p className="result-description">
          適した起業方法：
          <br />
          小規模店舗経営、職人技を活かしたサービス業
        </p>
      </div>
    </div>
  );
}

export default Result2;
