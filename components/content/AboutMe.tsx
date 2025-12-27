import Image from "next/image";
import Button from "@mui/material/Button";
import ContactsIcon from "@mui/icons-material/Contacts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "next-i18next";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(75, 85, 99, var(--tw-text-opacity))",
    },
  },
});

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="fade-in">
      <Image src="/icon.png" alt="logo" width={150} height={150} />
      <div className="text-left">
        <span className="text-xl md:text-base">{t("name")}:</span>
        <span className="text-xl md:text-base">AnnoRyoya</span>
        <br />
        <span className="text-xl md:text-base">{t("age")} :</span>
        <span className="text-xl md:text-base">28</span>
        <br />
        <br />
        <span className="text-xl md:text-base">{t("profile")}:</span>
        <br />
        <blockquote
          style={{
            borderLeft: "4px solid #facc15",
            background: "#f3f4f6",
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "0.5rem",
          }}
        >
          <span className="text-base md:text-xs">{t("aboutMeProfile")}</span>
        </blockquote>
        <br />
        <br />
        <span className="text-xl md:text-base">
          {t("recommendationComment")}:
        </span>
        <br />
        <blockquote
          style={{
            borderLeft: "4px solid #facc15",
            background: "#f3f4f6",
            padding: "1rem",
            margin: "1rem 0",
            borderRadius: "0.5rem",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              color: "#facc15",
              fontSize: "0.95em",
              display: "inline-block",
              marginTop: "0.5rem",
            }}
          >
            Escalation Manager at Microsoft
          </span>
          <br />
          <br />

          <span className="text-base md:text-xs">
            {t("aboutMeRecommendation")}
            <br />
          </span>
          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <a
              href="https://www.linkedin.com/in/anno-ryoya/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                display: "inline-block",
                color: "#2563eb",
                fontSize: "0.875rem",
              }}
            >
              {t("aboutMeLinkedIn")}
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutMe;
