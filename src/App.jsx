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
const IndexPage = React.lazy(() => import("./pages/IndexPage"));
const Question1 = React.lazy(() => import("./pages/Question1"));
const Question2 = React.lazy(() => import("./pages/Question2"));
const Result1 = React.lazy(() => import("./pages/Result1"));
const Result2 = React.lazy(() => import("./pages/Result2"));
const Result3 = React.lazy(() => import("./pages/Result3"));
const Result4 = React.lazy(() => import("./pages/Result4"));
import LoadingTransition from "./components/LoadingTransition"; // LoadingTransitionをインポート
import "./css/effect.css";



// AnimatedRoutesコンポーネントを定義
const AnimatedRoutes = ({
  answers,
  setAnswers,
  result,
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
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<IndexPage />} />
            <Route
              path="/question1"
              element={<Question1 answers={answers} setAnswers={setAnswers} />}
            />
            <Route
              path="/question2"
              element={<Question2 answers={answers} setAnswers={setAnswers} resultProp={result} />}
            />
            <Route path="/result1" element={<Result1 />} />
            <Route path="/result2" element={<Result2 />} />
            <Route path="/result3" element={<Result3 />} />
            <Route path="/result4" element={<Result4 />} />
          </Routes>
        </React.Suspense>
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
