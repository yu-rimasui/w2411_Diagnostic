import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import topImage from "../img/top-image.png";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="index-container">
      <h1>起業家適性診断</h1>
      <p>20個の質問に答えて、あなたの起業家適性を診断しましょう。</p>
      <div className="image-wrapper">
        <img src={topImage} alt="診断イメージ" className="top-image" />
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            navigate("/question1");
          }}
        >
          診断スタート
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
