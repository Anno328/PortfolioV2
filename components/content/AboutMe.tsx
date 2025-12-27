import Image from "next/image";
import Button from "@mui/material/Button";
import ContactsIcon from "@mui/icons-material/Contacts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(75, 85, 99, var(--tw-text-opacity))",
    },
  },
});

function AboutMe() {
  return (
    <div className="fade-in">
      <Image src="/icon.png" alt="logo" width={250} height={250} />
      <div className="text-left">
        <span className="text-xl md:text-base">Name:</span>
        <span className="text-xl md:text-base">AnnoRyoya</span>
        <br />
        <span className="text-xl md:text-base">Age :</span>
        <span className="text-xl md:text-base">28</span>
        <br />
        <br />
        <span className="text-xl md:text-base">Profile:</span>
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
          <span className="text-base md:text-xs">
            Webエンジニアとしてキャリアをスタートし、これまで 複数のBtoB/BtoC
            Webアプリ開発で、設計〜実装〜運用まで一貫して担当してきました。
            React / Nuxt / TypeScript を用いたフロントエンド開発、Express /
            Python API
            開発、Azureを中心としたクラウド構築など、幅広い領域を横断できるフルスタックエンジニアです。
            開発だけでなく、技術選定やアーキテクチャ検討、CI/CD基盤の改善、プロジェクトの生産性や品質向上にも継続的に携わってきました。
            また、スクラムイベントの推進、コードレビューなど、小規模チームでのリードポジションを担う経験もあります。
            日本マイクロソフトでは Azure App
            ServiceのPaaSサポートエンジニアとして多くの技術課題を解決し、非エンジニアを含む幅広いユーザーへのコミュニケーションスキルを習得しました。
            この経験は、現在の仕様調整・要件整理・顧客コミュニケーションにも活きています。
            現在は AI を活用したワークフロー改善や、プロダクトへの AI
            機能導入をリードしており、
            「チームの生産性最大化」と「事業価値に直結する機能開発」
            を重視した取り組みを行っています。
          </span>
        </blockquote>
        <br />
        <br />
        <span className="text-xl md:text-base">Recommendation Comment:</span>
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
            安野さんは前職、現職で Web Application 開発スキル、Cloud Solution
            の開発、運用、サポート経験と、ソフトスキル
            (傾聴力、顧客のニーズや期待の把握、ならびに、顧客目線の解りやすい説明)
            を持っています。
            チームプレイヤーとして、チームメンバーと積極的に関わり、迅速に技術、ビジネススキル、ソフトスキルを習得し、チームに貢献していただけます。
            また、ミッションクリティカルなシステムの緊急対応という緊迫した状態においても、チームメンバーと協力し、顧客の期待値に添ったスピード感での対応をしていただけます。
            顧客目線の解りやすい資料 (Blog、顧客への説明資料など)
            の作成と、Verbal
            なコミュニケーションスキルを持った、ソフトスキルと技術スキル、知識を兼ね備えたエンジニアとして、あらゆる職種での貢献が期待できます。
            他者に対する気遣い、気配りから、チームプレイヤーとして力を発揮していただき、また、自己研鑽を怠らない
            Growth
            mindset、仕事に対する強い責任感を持っていて、安心して仕事を任せることができるメンバーです。
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
              LinkedInで推薦コメントを見る
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutMe;
