import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

// 採点関数
const calculateResult = (answersObj) => {
  // ランダムに結果を選ぶ配列
  const results = ["result1", "result2", "result3", "result4"];
  const randomIndex = Math.floor(Math.random() * results.length);
  const result = results[randomIndex];

  // スコアもランダムに設定する場合（任意）
  const score = {
    realistScore: Math.floor(Math.random() * 10),
    creatorScore: Math.floor(Math.random() * 10),
    goalScore: Math.floor(Math.random() * 10),
    buildScore: Math.floor(Math.random() * 10),
  };

  return { result, score };
};

const questionsPart2 = [
  { q_id: "q6", q_text: "仕事やプライベートで、クリエイティブなアイデアを生み出すことが得意？"},
  {
    q_id: "q7",
    q_text: "定期的な運動やスポーツで、健康維持に努めてる？"
  },
  {
    q_id: "q8",
    q_text: "旅行や外出で、普段と違う環境に触れることを楽しんでる？"
  },
  {
    q_id: "q9",
    q_text: "日常の中で、小さな幸せや充実感を見つけることが得意？"
  },
  {
    q_id: "q10",
    q_text: "自分の理想のライフスタイルを実現するために、積極的に行動してる？"
  },
];

function Question2({ answers, setAnswers, resultProp }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({});

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

    const { result: calculatedResult, score: calculatedScore } = calculateResult(answers);
    setResult(calculatedResult);
    setScore(calculatedScore);

    if (resultProp === "result1") {
      navigate("/result1");
    } else if (resultProp === "result2") {
      navigate("/result2");
    } else if (resultProp === "result3") {
      navigate("/result3");
    } else {
      navigate("/result4");
    }
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
