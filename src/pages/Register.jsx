// Register.jsx
import React, { useState, useEffect } from "react"; // useEffectを追加
import { useNavigate } from "react-router-dom";
import "../css/style.css";

function Register({
  userName,
  setUserName,
  userMail,
  setUserMail,
  result,
  answers,
  score,
}) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // ページがマウントされたときにトップにスクロール
  }, []);

  // メールアドレスの正規表現パターン
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleRegister = async () => {
    // 必須チェック
    if (!userName || !userMail) {
      setErrorMessage("ユーザーネームとメールアドレスを入力してください");
      return;
    }

    // メールアドレスのバリデーション
    if (!emailRegex.test(userMail)) {
      setErrorMessage("正しいメールアドレス形式で入力してください");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    // GASエンドポイントのURL
    const scriptID =
      "AKfycbzPGICdewMWvS_2ULbAioBWq74punfYV9wcJH3ACj3ghOo89j-ps0qhA8_B7Y3bPGTh";
    const endPoint = `https://script.google.com/macros/s/${scriptID}/exec`;

    // リクエストのペイロードをURLエンコード形式で作成
    const payload = new URLSearchParams();
    payload.append("res_JSON", JSON.stringify(answers));
    payload.append("score", JSON.stringify(score));
    payload.append("user_name", userName);
    payload.append("user_mail", userMail);
    payload.append("result", result);

    try {
      // no-corsモードでリクエストを送信
      await fetch(endPoint, {
        method: "POST",
        mode: "no-cors", // CORSエラーを回避するため
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      // 成功したものとして処理
      setSuccessMessage("データが正常に保存されました。");

      // 成功後のページ遷移
      if (result === "result1") navigate("/result1");
      else if (result === "result2") navigate("/result2");
      else if (result === "result3") navigate("/result3");
      else navigate("/result4");
    } catch (error) {
      console.error("Error saving data:", error);
      setErrorMessage(
        "データの保存中にエラーが発生しました。再度お試しください。"
      );
    }
  };

  return (
    <div className="main-content">
      <div className="vertical-margin">
        <h1>ユーザ登録</h1>
        <h4 style={{ marginTop: "30px" }}>
          メールアドレスを登録して、診断結果を確認しましょう。
        </h4>
      </div>

      <div className="form-group">
        <label htmlFor="userName" className="form-label">
          ユーザネーム
        </label>
        <input
          id="userName"
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="userMail" className="form-label">
          メールアドレス
        </label>
        <input
          id="userMail"
          type="email"
          placeholder="User Mail"
          value={userMail}
          onChange={(e) => setUserMail(e.target.value)}
          className="form-input"
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="button-container">
        <button className="button" onClick={handleRegister}>
          登録
        </button>
      </div>
    </div>
  );
}

export default Register;
