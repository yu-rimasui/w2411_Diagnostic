import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

const questionsPart2 = [
  { q_id: "q11", q_text: "日々の習慣やルーティンを大切にしていますか？" },
  { q_id: "q12", q_text: "斬新なアイデアを考えることにワクワクしますか？" },
  { q_id: "q13", q_text: "リスク管理を重視しますか？" },
  { q_id: "q14", q_text: "大きな変化を起こすことに魅力を感じますか？" },
  { q_id: "q15", q_text: "小さな成功の積み重ねを好みますか？" },
  { q_id: "q16", q_text: "既存の枠にとらわれない発想ができますか？" },
  { q_id: "q17", q_text: "現実的な制約内で解決策を見出すことが得意ですか？" },
  {
    q_id: "q18",
    q_text: "遠い未来の目標に向かって進むことにモチベーションを感じますか？",
  },
  { q_id: "q19", q_text: "日々の努力の積み重ねを重視しますか？" },
  { q_id: "q20", q_text: "創造的な問題解決アプローチを取ることが多いですか？" },
];

function Question2({ answers, setAnswers, handleResult }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // ページがマウントされたときにトップにスクロール
  }, []);

  const handleChange = (q_id, value) => {
    setAnswers((prev) => ({ ...prev, [q_id]: parseInt(value) }));
  };

  const handleSubmit = () => {
    // 全回答チェック
    const allAnswered = questionsPart2.every((q) => answers[q.q_id]);
    if (!allAnswered) {
      setErrorMessage("すべて回答してください");
      return;
    }
    setErrorMessage("");

    handleResult();
    navigate("/register");
  };

  return (
    <div className="main-content">
      <h3 className="vertical-margin">
        以下の質問に、直感的に回答してください。
      </h3>
      {questionsPart2.map((q) => (
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
        <button className="button" onClick={handleSubmit}>
          送信
        </button>
      </div>
    </div>
  );
}

export default Question2;
