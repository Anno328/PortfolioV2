import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../components/Profile"));
const TopicCard = dynamic(() => import("../atom/TopicCard"));
import { useContext } from "react";
import { AppContext } from "../pages/index";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Menu = () => {
  const { setContent, setShow, content } = useContext(AppContext);
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = i18n.language === "ja" ? "en" : "ja";
    router.push(router.pathname, router.asPath, { locale: nextLocale });
  };

  function onTopicClick(contentKey: string) {
    setShow(false);
    setTimeout(() => {
      setContent(contentKey);
      setShow(true);
    }, 10);
  }

  return (
    <div className="bg-slate-50 w-1/4 text-center static overflow-auto md:w-1/4 h-screen flex flex-col">
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: 8,
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => {
            router
              .push(router.pathname, router.asPath, { locale: "en" })
              .then(() => {
                window.location.reload();
              });
          }}
          style={{
            padding: "0.15rem 0.5rem",
            border: "none",
            background: "none",
            color: i18n.language === "en" ? "#2563eb" : "#222",
            fontWeight: 700,
            minWidth: "32px",
            cursor: "pointer",
            borderBottom:
              i18n.language === "en" ? "2.5px solid #2563eb" : "none",
            transition: "border-bottom 0.2s",
          }}
          className="text-[0.95rem] md:text-xs"
        >
          en
        </button>
        <span
          style={{ color: "#888", fontWeight: 700 }}
          className="text-[1rem] md:text-xs"
        >
          /
        </span>
        <button
          onClick={() => {
            router
              .push(router.pathname, router.asPath, { locale: "ja" })
              .then(() => {
                window.location.reload();
              });
          }}
          style={{
            padding: "0.15rem 0.5rem",
            border: "none",
            background: "none",
            color: i18n.language === "ja" ? "#2563eb" : "#222",
            fontWeight: 700,
            minWidth: "32px",
            cursor: "pointer",
            borderBottom:
              i18n.language === "ja" ? "2.5px solid #2563eb" : "none",
            transition: "border-bottom 0.2s",
          }}
          className="text-[0.95rem] md:text-xs"
        >
          jp
        </button>
      </div>
      <div className="h-[15%] mt-4">
        <Profile />
      </div>
      <div className="Topics h-[85%] flex flex-col gap-2 md:gap-2 min-h-0 overflow-auto justify-evenly">
        <div
          className="flex-1 min-h-12 max-h-24"
          onClick={() => {
            onTopicClick(t("aboutMe"));
          }}
        >
          <TopicCard topicTitle={t("aboutMe")} imagePath="/y0530.png" />
        </div>
        <div
          className="flex-1 min-h-12 max-h-24"
          onClick={() => {
            onTopicClick(t("myWork"));
          }}
        >
          <TopicCard topicTitle={t("myWork")} imagePath="/y0749.png" />
        </div>
        <div
          className="flex-1 min-h-12 max-h-24"
          onClick={() => {
            onTopicClick(t("skills"));
          }}
        >
          <TopicCard topicTitle={t("skills")} imagePath="/y0682.png" />
        </div>
        <div
          className="flex-1 min-h-12 max-h-24"
          onClick={() => {
            onTopicClick(t("contact"));
          }}
        >
          <TopicCard topicTitle={t("contact")} imagePath="/y0550.png" />
        </div>
        <div
          className="flex-1 min-h-12 max-h-24"
          onClick={() => {
            onTopicClick(t("support"));
          }}
        >
          <TopicCard topicTitle={t("support")} imagePath="/1210.png" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
