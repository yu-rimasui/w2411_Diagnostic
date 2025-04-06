// LoadingTransition.jsx
import React from "react";
import "../css/effect.css"; // 外部スタイルシートをインポート

const LoadingTransition = () => (
  <div className="loading-overlay">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30vw" /* 画面横幅の30%に拡大 */
      height="30vw" /* アスペクト比を維持 */
      viewBox="0 0 24 24" /* カスタムSVGに合わせて変更 */
      role="img" /* アクセシビリティ向上 */
      aria-label="読み込み中" /* アクセシビリティ向上 */
    >
      {/* カスタムSVGのパスを追加 */}
      <path
        className="spinner_ngNb"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="translate(12, 12) scale(0)" /* アニメーション開始時の変換 */
      />
      <path
        className="spinner_ngNb spinner_6TBP"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="translate(12, 12) scale(0)" /* アニメーション開始時の変換 */
      />
    </svg>
  </div>
);

export default LoadingTransition;
