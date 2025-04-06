import React from "react";
import "../css/style.css";
import topImage from "../img/result-image.png"; // 適宜画像パスを変更

function Result1() {
  return (
    <div className="result-container">
      <h2 className="result-title">診断結果</h2>
      <div className="result-content">
        <img src={topImage} alt="戦略的プランナー" className="result-image" />
        <h3 className="result-heading">戦略的プランナー</h3>
        <p className="result-description">
          適した起業方法：
          <br />
          コンサルティング業、プロジェクトマネジメント関連のビジネス
        </p>
      </div>
    </div>
  );
}

export default Result1;
