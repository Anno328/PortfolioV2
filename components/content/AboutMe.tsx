//:TODO  Resume
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
    <div>
      <Image src="/y0679.png" alt="logo" width={250} height={250} />
      <div className="text-center mb-8">
        <ThemeProvider theme={theme}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Anno328/Resume/blob/master/Resume.pdf"
          >
            <Button
              color="primary"
              variant="outlined"
              endIcon={<ContactsIcon />}
            >
              resume
            </Button>
          </a>
        </ThemeProvider>
      </div>
      <div className="text-left">
        <span className="text-xl md:text-base">Name:</span>
        <span className="text-xl md:text-base">AnnoRyoya</span>
        <br />
        <span className="text-xl md:text-base">Age :</span>
        <span className="text-xl md:text-base">26</span>
        <br />
        <br />
        <span className="text-xl md:text-base">Profile:</span>
        <br />
        <span className="text-base md:text-xs">
          Webアプリケーションエンジニアを3年経験し、複数のBtoB,BtoCのWebアプリを構築した。その中で、フロントエンド（React）～バックエンド（Express）の設計・開発、クラウド(Azure)の構築ノウハウを身に着けた。また、CICD(AzureDevOps
          Pipeline)の整備を通して、資産品質の担保や開発プロセスの効率化に貢献した。その後、Azure
          PaaS サポートエンジニアとしてAzure App Servise
          の領域を担当し、お客様より承る「このようなエラーが発生した」「こういった動作をしてほしいが実現可能か」かといったご質問についてサポートエンジニアとしてサポートの提供を行った。
          そして再度Webアプリケーション開発に従事し、Nuxt/Typescriptを利用したアプリケーションの開発保守を担当した。
        </span>
        <br />
        <br />
        {/* <Image 
            src='/myphoto.jpeg'
            alt='logo'       
            width={300}
            height={500}/> */}
      </div>
      <div className="text-left text-base md:text-xs">
        <p className="text-xl mt-10 md:text-sm">Vison:</p>
        <p className="">フルスタックWebエンジニアを目指しています。</p>
        {/* <p className=''>I would like to offer a personalized website!!</p> */}
      </div>

      <div className="text-left text-base md:text-xs">
        <p className="text-xl mt-10 md:text-sm">Offline:</p>
        <p className="">コーヒーをたくさん飲みます.</p>
        <p className="">古着が好きでよく着てます.</p>
        <p className="">映画が好きです.(特にSF)</p>
        <p className="">小説が好きです.(特にSF)</p>
        <p className="">猫が好きです.(たまに猫カフェに行きます)</p>
        <p className="">バスケが好きです.</p>
        <p className="">写真を撮ることが好きです.</p>
        <br />
      </div>
    </div>
  );
}

export default AboutMe;
