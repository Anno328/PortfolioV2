import Image from "next/image";
import WorkCard from "../../atom/WorkCard";
import React, { useState, useRef } from "react";
import { useTranslation } from "next-i18next";

function MyWork() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosing, setPopupClosing] = useState(false);
  const [showDoctorPopup, setShowDoctorPopup] = useState(false);
  const [doctorPopupClosing, setDoctorPopupClosing] = useState(false);
  const [showC02Popup, setShowC02Popup] = useState(false);
  const [c02PopupClosing, setC02PopupClosing] = useState(false);
  const [showAzurePopup, setShowAzurePopup] = useState(false);
  const [azurePopupClosing, setAzurePopupClosing] = useState(false);
  const [showKnowledgePopup, setShowKnowledgePopup] = useState(false);
  const [knowledgePopupClosing, setKnowledgePopupClosing] = useState(false);

  const handleClosePopup = () => {
    setPopupClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setPopupClosing(false);
    }, 500); // fadeOutAnimeのdurationと合わせる
  };

  const popupDetail = (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${
        popupClosing ? "fade-out" : "fade-in"
      }`}
      onClick={handleClosePopup}
    >
      <div
        className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 right-0 flex justify-end z-10">
          <button
            className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
            onClick={handleClosePopup}
          >
            ×
          </button>
        </div>
        <div className="space-y-8 text-left">
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">
              {t("work.overview")}
            </h2>
            <p className="text-sm">{t("work.general.overview")}</p>
          </section>
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">
              {t("work.responsibility")}
            </h2>
            <ul className="list-disc ml-6 text-sm">
              <li>{t("work.general.responsibility.1")}</li>
              <li>{t("work.general.responsibility.2")}</li>
              <li>{t("work.general.responsibility.3")}</li>
              <li>{t("work.general.responsibility.4")}</li>
              <li>{t("work.general.responsibility.5")}</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">
              {t("work.skills")}
            </h2>
            <ul className="list-disc ml-6 text-sm">
              <li>{t("work.general.skills.1")}</li>
              <li>{t("work.general.skills.2")}</li>
              <li>{t("work.general.skills.3")}</li>
              <li>{t("work.general.skills.4")}</li>
              <li>{t("work.general.skills.5")}</li>
              <li>{t("work.general.skills.6")}</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">
              {t("work.comment")}
            </h2>
            <ul className="list-disc ml-6 text-sm">
              <li>{t("work.general.comment.1")}</li>
              <li>{t("work.general.comment.2")}</li>
              <li>{t("work.general.comment.3")}</li>
              <li>{t("work.general.comment.4")}</li>
              <li>{t("work.general.comment.5")}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
      <Image src="/y0743.png" alt="logo" width={250} height={250} />

      <p className="text-xl mt-10">{t("businessProjects")}:</p>
      <WorkCard
        title={t("work.general.title")}
        description={t("work.general.description")}
        imgUrl="/y0615.png"
        onClick={() => setShowPopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowPopup(true)}
      />
      {showPopup && popupDetail}
      <WorkCard
        title={t("work.doctor.title")}
        description={t("work.doctor.description")}
        imgUrl="/y0187.png"
        onClick={() => setShowDoctorPopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowDoctorPopup(true)}
      />
      {showDoctorPopup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${
            doctorPopupClosing ? "fade-out" : "fade-in"
          }`}
          onClick={() => {
            setDoctorPopupClosing(true);
            setTimeout(() => {
              setShowDoctorPopup(false);
              setDoctorPopupClosing(false);
            }, 500);
          }}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => {
                  setDoctorPopupClosing(true);
                  setTimeout(() => {
                    setShowDoctorPopup(false);
                    setDoctorPopupClosing(false);
                  }, 500);
                }}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.overview")}
                </h2>
                <p className="text-sm">{t("work.doctor.overview")}</p>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.responsibility")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.doctor.responsibility.1")}</li>
                  <li>{t("work.doctor.responsibility.2")}</li>
                  <li>{t("work.doctor.responsibility.3")}</li>
                  <li>{t("work.doctor.responsibility.4")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.skills")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.doctor.skills.1")}</li>
                  <li>{t("work.doctor.skills.2")}</li>
                  <li>{t("work.doctor.skills.3")}</li>
                  <li>{t("work.doctor.skills.4")}</li>
                  <li>{t("work.doctor.skills.5")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.comment")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.doctor.comment.1")}</li>
                  <li>{t("work.doctor.comment.2")}</li>
                  <li>{t("work.doctor.comment.3")}</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
      <WorkCard
        title={t("work.c02.title")}
        description={t("work.c02.description")}
        imgUrl="/y1042.png"
        onClick={() => setShowC02Popup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowC02Popup(true)}
      />
      {showC02Popup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${
            c02PopupClosing ? "fade-out" : "fade-in"
          }`}
          onClick={() => {
            setC02PopupClosing(true);
            setTimeout(() => {
              setShowC02Popup(false);
              setC02PopupClosing(false);
            }, 500);
          }}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => {
                  setC02PopupClosing(true);
                  setTimeout(() => {
                    setShowC02Popup(false);
                    setC02PopupClosing(false);
                  }, 500);
                }}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.overview")}
                </h2>
                <p className="text-sm">{t("work.c02.overview")}</p>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.responsibility")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.c02.responsibility.1")}</li>
                  <li>{t("work.c02.responsibility.2")}</li>
                  <li>{t("work.c02.responsibility.3")}</li>
                  <li>{t("work.c02.responsibility.4")}</li>
                  <li>{t("work.c02.responsibility.5")}</li>
                  <li>{t("work.c02.responsibility.6")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.skills")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.c02.skills.1")}</li>
                  <li>{t("work.c02.skills.2")}</li>
                  <li>{t("work.c02.skills.3")}</li>
                  <li>{t("work.c02.skills.4")}</li>
                  <li>{t("work.c02.skills.5")}</li>
                  <li>{t("work.c02.skills.6")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.comment")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.c02.comment.1")}</li>
                  <li>{t("work.c02.comment.2")}</li>
                  <li>{t("work.c02.comment.3")}</li>
                  <li>{t("work.c02.comment.4")}</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
      <WorkCard
        title={t("work.blockchain.title")}
        description={t("work.blockchain.description")}
        imgUrl="/y1202.png"
      />
      <WorkCard
        title={t("work.freeaddress.title")}
        description={t("work.freeaddress.description")}
        imgUrl="/y0451.png"
      />
      <WorkCard
        title={t("work.azure.title")}
        description={t("work.azure.description")}
        imgUrl="/1384.png"
        onClick={() => setShowAzurePopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowAzurePopup(true)}
      />
      {showAzurePopup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${
            azurePopupClosing ? "fade-out" : "fade-in"
          }`}
          onClick={() => {
            setAzurePopupClosing(true);
            setTimeout(() => {
              setShowAzurePopup(false);
              setAzurePopupClosing(false);
            }, 500);
          }}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => {
                  setAzurePopupClosing(true);
                  setTimeout(() => {
                    setShowAzurePopup(false);
                    setAzurePopupClosing(false);
                  }, 500);
                }}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.responsibility")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.azure.responsibility.1")}</li>
                  <li>{t("work.azure.responsibility.2")}</li>
                  <li>{t("work.azure.responsibility.3")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.skills")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.azure.skills.1")}</li>
                  <li>{t("work.azure.skills.2")}</li>
                  <li>{t("work.azure.skills.3")}</li>
                  <li>{t("work.azure.skills.4")}</li>
                  <li>{t("work.azure.skills.5")}</li>
                  <li>{t("work.azure.skills.6")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.comment")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.azure.comment.1")}</li>
                  <li>{t("work.azure.comment.2")}</li>
                  <li>{t("work.azure.comment.3")}</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
      <WorkCard
        title={t("work.knowledge.title")}
        description={t("work.knowledge.description")}
        imgUrl="/580.png"
        onClick={() => setShowKnowledgePopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowKnowledgePopup(true)}
      />
      {showKnowledgePopup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ${
            knowledgePopupClosing ? "fade-out" : "fade-in"
          }`}
          onClick={() => {
            setKnowledgePopupClosing(true);
            setTimeout(() => {
              setShowKnowledgePopup(false);
              setKnowledgePopupClosing(false);
            }, 500);
          }}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => {
                  setKnowledgePopupClosing(true);
                  setTimeout(() => {
                    setShowKnowledgePopup(false);
                    setKnowledgePopupClosing(false);
                  }, 500);
                }}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.overview")}
                </h2>
                <p className="text-sm">{t("work.knowledge.overview")}</p>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.responsibility")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.knowledge.responsibility.1")}</li>
                  <li>{t("work.knowledge.responsibility.2")}</li>
                  <li>{t("work.knowledge.responsibility.3")}</li>
                  <li>{t("work.knowledge.responsibility.4")}</li>
                  <li>{t("work.knowledge.responsibility.5")}</li>
                  <li>{t("work.knowledge.responsibility.6")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.skills")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.knowledge.skills.1")}</li>
                  <li>{t("work.knowledge.skills.2")}</li>
                  <li>{t("work.knowledge.skills.3")}</li>
                  <li>{t("work.knowledge.skills.4")}</li>
                  <li>{t("work.knowledge.skills.5")}</li>
                  <li>{t("work.knowledge.skills.6")}</li>
                  <li>{t("work.knowledge.skills.7")}</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  {t("work.comment")}
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>{t("work.knowledge.comment.1")}</li>
                  <li>{t("work.knowledge.comment.2")}</li>
                  <li>{t("work.knowledge.comment.3")}</li>
                  <li>{t("work.knowledge.comment.4")}</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}

      <p className="text-xl mt-10">{t("privateProjects")}:</p>
      <WorkCard
        title={t("work.creative.title")}
        description={t("work.creative.description")}
        link="https://materials-kappa.vercel.app/three"
        imgUrl="/958.png"
      />
      <WorkCard
        title={t("work.photo.title")}
        description={t("work.photo.description")}
        link="https://photo-portfolio-ryoyaanno.vercel.app/"
        imgUrl="/951.png"
      />
      {/* <WorkCard
        title="WhatIPay"
        description="毎月払っているサブスクの金額を管理し可視化するサービス。Next.js、クラウド環境(Firebase)でのWebページ開発を実施。"
        link="https://whatipay-54f12.web.app/"
        imgUrl="/y1207.png"
      />
      <WorkCard
        title="WatchNow(In Progress!!)"
        description="上映時間とジャンルだけで、映画を検索するサービス。サブスクリプションのリンクも表示し、検索結果から即視聴できる。Next.jsでのWebページ開発を実施中。"
        imgUrl="/y0961.png"
        link="https://watch-now.vercel.app/"
      />
      <WorkCard
        title="SayCheese!(In Progress!!)"
        description="写真(人物撮影)を撮りたい人と、写真を撮ってほしい人をマッチングするサービス。Next.jsでのWebページ開発を実施中。"
        imgUrl="/y0547.png"
      /> */}

      {/* <p className="text-xl mt-10">OSS:</p>
      <WorkCard
        title="Buy me a cofee.(In Progress!!)"
        description="BuyMeACofee!ボタンを手軽に導入するためのパッケージ。Stripeにリダイレクトさせて決済まで行う。"
        link="https://github.com/Anno328/buy-me-a-cofee"
        imgUrl="/y0357.png"
      /> */}

      <p className="text-xl mt-10">{t("writing")}:</p>
      <WorkCard
        title={t("work.qiita.title")}
        description={t("work.qiita.description")}
        link="https://qiita.com/Annoske"
        imgUrl="/y0537.png"
      />
      <WorkCard
        title={t("work.blog.title")}
        description={t("work.blog.description")}
        link="https://anno-blog.vercel.app/"
        imgUrl="/581.png"
      />
      <WorkCard
        title={t("work.corpblog.title")}
        description={t("work.corpblog.description")}
        link="https://tech.visasq.com/archive/author/ryoyaanno"
        imgUrl="/581.png"
      />

      {/* <p className='text-xl mt-10'>Studying:</p>
        <WorkCard 
        title='3DModel作成'
        description='ブラウザで3Dモデルを描画できることを検証した。(react-three-fiber)自作で3Dモデルが作成できれば、よりリッチなWebサイトが構築できると考え勉強中！'
        imgUrl='/y0896.png'
        /> */}
    </div>
  );
}

export default MyWork;
