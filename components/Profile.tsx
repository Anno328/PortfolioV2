import { useContext } from "react";
import { AppContext } from "../pages/index";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const { setContent, setShow } = useContext(AppContext);

  function onTopicClick(contentTitle: string) {
    setContent(contentTitle);
    setShow(true);
  }

  return (
    <div>
      <div
        className="bg-gray-50 w-40 h-40 rounded-full mx-auto mt-12 drop-shadow-lg  md:w-16 md:h-16"
        onClick={() => {
          onTopicClick("initial");
        }}
      >
        <Image src="/icon.png" alt="logo" width={200} height={200} />
      </div>
      <p className="font-black text-2xl mt-4 md:text-sm">AnnoRyoya</p> <br />
      <div className="flex items-center justify-center mt-4 text-center">
        <a
          href="https://www.linkedin.com/in/Anno-Ryoya/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 hover:opacity-80 transition-opacity"
        >
          <FaLinkedin size={25} />
        </a>

        <a
          href="https://github.com/Anno328"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 hover:opacity-80 transition-opacity"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
