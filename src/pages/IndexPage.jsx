import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import topImage from "../img/top-image.png";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="index-container">
      <h1>診断テスト</h1>
      <p>スタートボタンを押して、20の質問に答えよう！</p>
      <div className="image-wrapper">
        <img src={topImage} alt="" className="top-image" />
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            navigate("/question1");
          }}
        >
          スタート
        </button>
      </div>
    </div>
  );
}

export default IndexPage;


