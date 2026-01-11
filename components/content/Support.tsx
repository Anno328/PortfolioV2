import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Support() {
  const { t } = useTranslation();
  const { locale } = useRouter();

  // アプリ情報
  const apps = [
    {
      title: "ReadMemory",
      icon: "/readmemory-icon.png",
      url: {
        ja: "https://apps.apple.com/jp/app/readmemory/id6756952288",
        en: "https://apps.apple.com/us/app/readmemory/id6756952288",
      },
    },
    {
      title: "WatchMemory",
      icon: "/watchmemory-icon.png",
      url: {
        ja: "https://apps.apple.com/jp/app/watchmemory/id6757134610",
        en: "https://apps.apple.com/us/app/watchmemory/id6757134610",
      },
    },
  ];

  return (
    <div className="fade-in" style={{ marginTop: "2rem" }}>
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
      {/* アプリ紹介セクション */}
      <div
        style={{
          margin: "2.5rem 0 2.5rem 0",
          background: "#f3f4f6",
          borderRadius: "1rem",
          padding: "2rem 1.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          width: "100%",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginBottom: "1.2rem",
          }}
        >
          {locale === "ja" ? "iOSアプリ" : "iOS Apps"}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {apps.map((app) => (
            <a
              key={app.title}
              href={locale === "ja" ? app.url.ja : app.url.en}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                minWidth: "120px",
              }}
            >
              <Image
                src={app.icon}
                alt={app.title}
                width={64}
                height={64}
                style={{ borderRadius: 16 }}
              />
              <span style={{ marginTop: "0.7rem", fontSize: "1rem" }}>
                {app.title}
              </span>
            </a>
          ))}
        </div>
      </div>
      <a
        href="https://www.buymeacoffee.com/ryoyaanno"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          margin: "2.5rem auto 0 auto",
          width: "max-content",
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
