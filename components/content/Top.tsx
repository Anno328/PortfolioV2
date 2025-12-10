import dynamic from "next/dynamic";
import { useRef } from "react";

// Player を動的インポートし、SSR を無効化
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

function Top() {
  const playerRef = useRef(null);

  return (
    <div>
      <div>
        <Player
          ref={playerRef}
          autoplay={true}
          loop={true}
          src="/lottie1.json"
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
      <p>Hello,I'm AnnoRyoya.</p>

      <p>I'm a Web Developer!</p>
    </div>
  );
}

export default Top;
