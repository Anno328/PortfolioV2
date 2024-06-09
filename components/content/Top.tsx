import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

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
