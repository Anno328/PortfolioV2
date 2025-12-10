import dynamic from "next/dynamic";
import { useContext } from "react";
import { AppContext } from "../../pages/index";

// Player を動的インポートし、SSR を無効化
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

function Top() {
  const { setContent } = useContext(AppContext);
  return (
    <div>
      <div>
        <Player
          autoplay={true}
          loop={true}
          src="/lottie1.json"
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
      <p>Hello,I'm AnnoRyoya.</p>

      <p>I'm a Web Developer!</p>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            textDecoration: "underline",
            display: "block",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "inherit",
            marginBottom: "1.5rem",
          }}
          onClick={() => setContent("ABOUT ME")}
        >
          ABOUT ME
        </button>
        <button
          style={{
            textDecoration: "underline",
            display: "block",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "inherit",
            marginBottom: "1.5rem",
          }}
          onClick={() => setContent("SKILL")}
        >
          SKILL
        </button>
        <button
          style={{
            textDecoration: "underline",
            display: "block",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "inherit",
            marginBottom: "1.5rem",
          }}
          onClick={() => setContent("MY WORK")}
        >
          MY WORK
        </button>
        <button
          style={{
            textDecoration: "underline",
            display: "block",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "inherit",
          }}
          onClick={() => setContent("CONTACT")}
        >
          CONTACT
        </button>
      </div>
      {/* 右下固定のパフォーマンスPDFボタン */}
      <a
        href="/Lighthouse Report Viewer.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          fontSize: "12px",
          color: "#6b7280",
          textDecoration: "underline",
          background: "rgba(255,255,255,0.8)",
          borderRadius: "4px",
          padding: "4px 8px",
          zIndex: 1000,
        }}
      >
        このページのパフォーマンスを見る
      </a>
    </div>
  );
}

export default Top;
