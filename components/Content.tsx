import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { AppContext } from "../pages/index";
import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
const ContentTitle = dynamic(() => import("../components/ContentTitle"));
const ContentSubject = dynamic(() => import("../components/ContentSubject"));
import Top from "./content/Top";
import AboutMe from "./content/AboutMe";
import { useTranslation } from "next-i18next";
import MyWork from "./content/MyWork";
import Skill from "./content/Skill";
import Contact from "./content/Contact";
import Support from "./content/Support";

const Content = (props: any) => {
  const { content, show, setShow } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => {
      setShow(true);
    }, 10);
    return () => clearTimeout(timer);
  }, [content]);

  useEffect(() => {
    const contentElement = document.querySelector("#content");
    contentElement?.scrollTo(0, 0);
  });

  return (
    <div
      id="content"
      className=" h-screen w-3/5 float-right text-center text-2xl px-32 overflow-auto md:w-2/3 md:text-base md:px-6"
    >
      <CSSTransition in={show} timeout={300} classNames="alert">
        <div>
          {content == "initial" && (
            <div>
              <ContentTitle contentTitle={t("greeting")} />
              <ContentSubject subject={Top} />
            </div>
          )}

          {content == t("aboutMe") && (
            <div>
              <ContentTitle contentTitle={t("aboutMe")} />
              <ContentSubject subject={AboutMe} />
            </div>
          )}

          {content == t("myWork") && (
            <div>
              <ContentTitle contentTitle={t("myWork")} />
              <ContentSubject subject={MyWork} />
            </div>
          )}

          {content == t("skills") && (
            <div>
              <ContentTitle contentTitle={t("skills")} />
              <ContentSubject subject={Skill} />
            </div>
          )}

          {content == t("contact") && (
            <div>
              <ContentTitle contentTitle={t("contact")} />
              <ContentSubject subject={Contact} />
            </div>
          )}

          {content == t("support") && (
            <div>
              <ContentTitle contentTitle={t("support")} />
              <ContentSubject subject={Support} />
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Content;
