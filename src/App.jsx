// App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexPage from "./pages/IndexPage";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Register from "./pages/Register";
import Result1 from "./pages/Result1";
import Result2 from "./pages/Result2";
import Result3 from "./pages/Result3";
import Result4 from "./pages/Result4";
import LoadingTransition from "./components/LoadingTransition"; // LoadingTransitionをインポート
import "./css/effect.css";

// 採点関数を外部に移動
const calculateResult = (answersObj) => {
  let realistScore = 0; // 現実主義リアリスト
  let creatorScore = 0; // 空想主義クリエイター
  let goalScore = 0; // 目標型
  let buildScore = 0; // 積み上げ型

  // 質問ごとの加算処理
  const realistQuestions = [1, 5, 9, 13, 17];
  const creatorQuestions = [4, 8, 12, 16, 20];
  const goalQuestions = [2, 6, 10, 14, 18];
  const buildQuestions = [3, 7, 11, 15, 19];

  // 加算ロジック
  for (const [key, value] of Object.entries(answersObj)) {
    const questionNum = parseInt(key.replace("q", ""), 10); // "q1" -> 1

    if (realistQuestions.includes(questionNum)) {
      realistScore += parseInt(value, 10);
    }
    if (creatorQuestions.includes(questionNum)) {
      creatorScore += parseInt(value, 10);
    }
    if (goalQuestions.includes(questionNum)) {
      goalScore += parseInt(value, 10);
    }
    if (buildQuestions.includes(questionNum)) {
      buildScore += parseInt(value, 10);
    }
  }

  // 軸ごとの比較
  const realismVsCreation =
    realistScore >= creatorScore ? "realist" : "creator";
  const goalVsBuild = goalScore >= buildScore ? "goal" : "build";

  // 結果の決定
  let result;
  if (realismVsCreation === "realist" && goalVsBuild === "goal") {
    result = "result1"; // 現実主義リアリスト × 目標型
  } else if (realismVsCreation === "realist" && goalVsBuild === "build") {
    result = "result2"; // 現実主義リアリスト × 積み上げ型
  } else if (realismVsCreation === "creator" && goalVsBuild === "goal") {
    result = "result3"; // 空想主義クリエイター × 目標型
  } else {
    result = "result4"; // 空想主義クリエイター × 積み上げ型
  }

  // 採点結果を返す（result と score オブジェクト）
  return {
    result,
    score: {
      realistScore,
      creatorScore,
      goalScore,
      buildScore,
    },
  };
};

// AnimatedRoutesコンポーネントを定義
const AnimatedRoutes = ({
  answers,
  setAnswers,
  handleResult,
  setScore,
  userName,
  setUserName,
  userMail,
  setUserMail,
  result,
  score,
  setIsLoading, // setIsLoadingをプロップとして受け取る
}) => {
  const location = useLocation();

  useEffect(() => {
    // ルートが変更されたときにローディングを開始
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false); // 一定時間後にローディングを終了
    }, 1000); // アニメーションの持続時間に合わせて調整（例: 1000ms）

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={1500}>
        <Routes location={location}>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/question1"
            element={<Question1 answers={answers} setAnswers={setAnswers} />}
          />
          <Route
            path="/question2"
            element={
              <Question2
                answers={answers}
                setAnswers={setAnswers}
                handleResult={() => {
                  const { result, score } = calculateResult(answers);
                  handleResult(result, score);
                  setScore(score);
                }}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                userName={userName}
                setUserName={setUserName}
                userMail={userMail}
                setUserMail={setUserMail}
                answers={answers}
                result={result}
                score={score}
              />
            }
          />
          <Route path="/result1" element={<Result1 />} />
          <Route path="/result2" element={<Result2 />} />
          <Route path="/result3" element={<Result3 />} />
          <Route path="/result4" element={<Result4 />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  const [answers, setAnswers] = useState({}); // {"q1": 1, "q2": 3, ...}
  const [result, setResult] = useState(null); // "result1", "result2" etc.
  const [score, setScore] = useState({}); // 採点結果のJSON
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ローディング状態を追加

  // handleResult関数を定義
  const handleResult = (result, score) => {
    setResult(result);
    setScore(score);
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <AnimatedRoutes
          answers={answers}
          setAnswers={setAnswers}
          handleResult={handleResult}
          setScore={setScore}
          userName={userName}
          setUserName={setUserName}
          userMail={userMail}
          setUserMail={setUserMail}
          result={result}
          score={score}
          setIsLoading={setIsLoading} // setIsLoadingを渡す
        />
        {isLoading && <LoadingTransition />}{" "}
        {/* ローディング中にアニメーションを表示 */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
