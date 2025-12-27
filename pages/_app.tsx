import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React from "react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        zIndex: 1000,
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
          borderBottom: i18n.language === "en" ? "2.5px solid #2563eb" : "none",
          transition: "border-bottom 0.2s",
        }}
      >
        en
      </button>
      <span style={{ color: "#888", fontWeight: 700 }}>/</span>
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
          borderBottom: i18n.language === "ja" ? "2.5px solid #2563eb" : "none",
          transition: "border-bottom 0.2s",
        }}
      >
        jp
      </button>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LanguageSwitcher />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
