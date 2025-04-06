import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

const questionsPart1 = [
  {
    q_id: "q1",
    q_text: "毎日の食事で、新しい味やレシピに挑戦するのが好き？"
  },
  {
    q_id: "q2",
    q_text: "日々のスケジュールを計画的に立てることに自信がある？"
  },
  {
    q_id: "q3",
    q_text: "休日は外出して新しい場所を探索する派？"
  },
  {
    q_id: "q4",
    q_text: "趣味や特技を見つけるために、積極的に新しいことに挑戦する？"
  },
  {
    q_id: "q5",
    q_text: "家族や友人との時間を大切にして、交流を楽しんでる？"
  },
];

function Question1({ answers, setAnswers }) {
  useEffect(() => {
    window.scrollTo(0, 0); // ページがマウントされたときにトップにスクロール
  }, []);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (q_id, value) => {
    setAnswers((prev) => ({ ...prev, [q_id]: parseInt(value) }));
  };

  const handleNext = () => {
    // 全回答チェック
    const allAnswered = questionsPart1.every(
      (q) => answers[q.q_id] !== undefined
    );
    if (!allAnswered) {
      // 未回答がある
      setErrorMessage("すべて回答してください");
      return;
    }
    setErrorMessage("");
    navigate("/question2");
  };

  return (
    <div className="main-content">
      <h3 className="vertical-margin">
        以下の質問に、直感的に回答してください。
      </h3>
      {questionsPart1.map((q) => (
        <div key={q.q_id} className="question-container">
          <p className="question-text">
            問{parseInt(q.q_id.replace("q", ""))}, {q.q_text}
          </p>
          <div className="radio-group">
            <label className="custom-radio radio-large">
              <input
                type="radio"
                name={q.q_id}
                value="1"
                checked={answers[q.q_id] === 1}
                onChange={() => handleChange(q.q_id, "1")}
              />
              <span className="radio-mark"></span>
            </label>
            <label className="custom-radio radio-medium">
              <input
                type="radio"
                name={q.q_id}
                value="2"
                checked={answers[q.q_id] === 2}
                onChange={() => handleChange(q.q_id, "2")}
              />
              <span className="radio-mark"></span>
            </label>
            <label className="custom-radio radio-small">
              <input
                type="radio"
                name={q.q_id}
                value="3"
                checked={answers[q.q_id] === 3}
                onChange={() => handleChange(q.q_id, "3")}
              />
              <span className="radio-mark"></span>
            </label>
            <label className="custom-radio radio-medium">
              <input
                type="radio"
                name={q.q_id}
                value="4"
                checked={answers[q.q_id] === 4}
                onChange={() => handleChange(q.q_id, "4")}
              />
              <span className="radio-mark"></span>
            </label>
            <label className="custom-radio radio-large">
              <input
                type="radio"
                name={q.q_id}
                value="5"
                checked={answers[q.q_id] === 5}
                onChange={() => handleChange(q.q_id, "5")}
              />
              <span className="radio-mark"></span>
            </label>
          </div>
          <div className="radio-labels">
            <span>当てはまらない</span>
            <span>当てはまる</span>
          </div>
        </div>
      ))}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="button-container">
        <button className="button" onClick={handleNext}>
          次へ
        </button>
      </div>
    </div>
  );
}

export default Question1;
