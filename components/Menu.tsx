import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../components/Profile"));
const TopicCard = dynamic(() => import("../atom/TopicCard"));
import { useContext } from "react";
import { AppContext } from "../pages/index";

const Menu = () => {
  const { setContent, setShow } = useContext(AppContext);

  function onTopicClick(contentTitle: string) {
    setShow(false);
    setTimeout(() => {
      setContent(contentTitle);
      setShow(true);
    }, 10);
  }

  return (
    <div className="bg-slate-50 w-1/3 float-lefttext-centerstatic overflow-auto md:w-1/4 text-center">
      <Profile />
      <div className="Topics mt-10 flex flex-col gap-4">
        <div
          onClick={() => {
            onTopicClick("ABOUT ME");
          }}
        >
          <TopicCard topicTitle="ABOUT ME" imagePath="/y0530.png" />
        </div>
        <div
          onClick={() => {
            onTopicClick("MY WORK");
          }}
        >
          <TopicCard topicTitle="MY WORK" imagePath="/y0749.png" />
        </div>
        <div
          onClick={() => {
            onTopicClick("SKILL");
          }}
        >
          <TopicCard topicTitle="SKILL" imagePath="/y0682.png" />
        </div>
        <div
          onClick={() => {
            onTopicClick("CONTACT");
          }}
        >
          <TopicCard topicTitle="CONTACT" imagePath="/y0550.png" />
        </div>
        <div
          onClick={() => {
            onTopicClick("SUPPORT");
          }}
        >
          <TopicCard topicTitle="SUPPORT" imagePath="/1210.png" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
