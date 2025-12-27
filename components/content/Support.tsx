import Image from "next/image";
import { useTranslation } from "next-i18next";

function Support() {
  const { t } = useTranslation();
  return (
    <div className="fade-in" style={{ textAlign: "center", marginTop: "2rem" }}>
      <blockquote
        style={{
          borderLeft: "4px solid #facc15",
          background: "#f3f4f6",
          padding: "1rem",
          margin: "1rem 0 2.5rem 0",
          borderRadius: "0.5rem",
          display: "inline-block",
          textAlign: "left",
          maxWidth: "420px",
        }}
      >
        <span className="text-base md:text-xs">{t("supportMessage")}</span>
      </blockquote>
      <a
        href="https://www.buymeacoffee.com/ryoyaanno"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "2rem",
        }}
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/arial-green.png"
          alt="Buy Me A Coffee"
          width={217}
          height={60}
          style={{
            display: "block",
          }}
        />
      </a>
    </div>
  );
}

export default Support;
