//TODO: OSS + mabl + Teach reqruit

import type { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { Dispatch, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Menu = dynamic(() => import("../components/Menu"));
const Content = dynamic(() => import("../components/Content"));

export const AppContext = React.createContext(
  {} as {
    content: string;
    setContent: Dispatch<React.SetStateAction<string>>;
    show: boolean;
    setShow: Dispatch<React.SetStateAction<boolean>>;
  }
);

const Home: NextPage = () => {
  const [content, setContent] = useState("initial");
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  // 言語切り替え後にlocalStorageからcontentを復元
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("content");
      if (saved) {
        setContent(saved);
        localStorage.removeItem("content");
      }
    }
  }, []);

  return (
    <div className="font-monofont-bold text-gray-700 flex">
      <AppContext.Provider value={{ content, setContent, show, setShow }}>
        <Menu />
        <Content />
      </AppContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ja", ["common"])),
    },
  };
};

export default Home;
