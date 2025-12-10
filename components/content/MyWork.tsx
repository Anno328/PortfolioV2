import Image from "next/image";
import WorkCard from "../../atom/WorkCard";
import React, { useState } from "react";

function MyWork() {
  const [showPopup, setShowPopup] = useState(false);

  const popupDetail = (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={() => setShowPopup(false)}
    >
      <div
        className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 right-0 flex justify-end z-10">
          <button
            className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
            onClick={() => setShowPopup(false)}
          >
            ×
          </button>
        </div>
        <p>
          戸建て住宅に設置する太陽光発電に用いるソーラパネルの発電量や使用量を管理するシステムを開発。10人未満のアジャイル体制にて開発を実施。
        </p>
        <h3 className="font-bold mt-4">≪担当業務≫</h3>
        <ul className="list-disc ml-6">
          <li>
            ・フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の構築
          </li>
          <li>・開発・保守を担当</li>
          <li>・顧客との調整、ヒアリング</li>
          <li>・若手メンバーの育成・コードレビュー・技術相談対応</li>
          <li>・小さなタスク単位での進行管理</li>
        </ul>
        <h3 className="font-bold mt-4">≪習得スキル≫</h3>
        <ul className="list-disc ml-6">
          <li>・React / Express を用いたフルスタック開発スキル</li>
          <li>
            ・Azure App Service、Azure Functions
            等を活用したクラウド環境構築スキル
          </li>
          <li>・アジャイル開発（スクラム）でのチーム開発経験</li>
          <li>・API 設計、非同期通信まわりの実装ノウハウ</li>
          <li>・パフォーマンスを意識したフロント・バック間のデータ連携設計</li>
          <li>・顧客ヒアリング・要件整理スキル</li>
        </ul>
        <h3 className="font-bold mt-4">≪コメント≫</h3>
        <ul className="list-disc ml-6">
          <li>
            ・太陽光発電量をリアルタイムに可視化するため、非同期通信やデータ更新の負荷を考慮して設計を行いました。
          </li>
          <li>
            ・React・Express・Azure
            を組み合わせるフルスタック構成であったため、各レイヤー間の整合性を意識した開発を心がけました。
          </li>
          <li>
            ・アジャイル開発（スクラム）で進行しており、短いスプリントの中で要件調整
            → 実装 → テスト →
            レビューを繰り返すことで、迅速に改善を回す経験ができました。
          </li>
          <li>
            ・顧客との調整やヒアリングも担当し、非エンジニア向けにもわかりやすく技術的背景を説明する力が身につきました。
          </li>
          <li>
            ・若手メンバーへの技術支援やコードレビューを積極的に行い、チーム全体の生産性と品質向上に貢献しました。
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <Image src="/y0743.png" alt="logo" width={250} height={250} />

      <p className="text-xl mt-10">Bussiness Projects:</p>
      <WorkCard
        title="一般家庭向け電力系Webサービス"
        description="太陽光発電に用いるソーラパネルの発電量や使用量を管理するサービス。フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の構築・開発・保守を担当した。"
        imgUrl="/y0615.png"
        onClick={() => setShowPopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowPopup(true)}
      />
      {showPopup && popupDetail}
      <WorkCard
        title="医師向け患者診断サポートサービス"
        description="生体情報を定期的に、正確に把握する必要がある糖尿病患者や妊婦さんが、ウェアラブル端末を用いて生体情報をクラウドにアップロードし医師に連携するサービス。.netCore、クラウド環境(Azure)でのWebページ保守を担当した。"
        imgUrl="/y0187.png"
      />
      <WorkCard
        title="法人向けCO2フリー電力可視化・DRサポートサービス"
        description="法人向けに、ある拠点で使った電力の内どれくらいがCO2フリー電力であるかを可視化するサービス。また、電力逼迫時に電力使用を控えるよう要請するデマンドレスポンス業務のサポートも行う。フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の開発・保守、CICD環境の構築・最適化を担当した。"
        imgUrl="/y1042.png"
      />
      <WorkCard
        title="コンソーシアム型ブロックチェーンサービスPoC検証"
        description="HyperLedger Fabricを利用したコンソーシアム型サービスの構築を実施。セキュアな拠点入場管理システムを構築した。"
        imgUrl="/y1202.png"
      />
      <WorkCard
        title="フリーアドレス座席管理サービス(社内サービス)"
        description="ログインに顔認証を用いたフリーアドレス座席管理サービス。企画から、使用技術の選定・開発・運用まで担当。"
        imgUrl="/y0451.png"
      />
      <WorkCard
        title="Azure PaaS サポートエンジニア"
        description="Azure PaaS サポートエンジニアとしてAzure App Servise の領域を担当。 App Service の領域において、お客様より承る「このようなエラーが発生した」「こういった動作をしてほしいが実現可能か」かといったご質問についてサポートエンジニアとしてサポートを提供していた。 サポートではお客様の理解度に合わせて図表で示す、公開情報をご案内するといったお客様目線での対応を心がけており、クラウド（Azure）の技術的な知見に加えて、お客様とのコミュニケーションを含むソフトスキルを身につけた。        "
        imgUrl="/1384.png"
      />
      <WorkCard
        title="ナレッジプラットフォーム"
        description="課題を抱える企業や個人が、知見を持つエキスパートに1時間単位でビジネス
        相談ができるスポットコンサル「ビザスクinterview」を主軸とした各種サービスが利用できるプラットフォームの開発・保守に従事した。"
        imgUrl="/580.png"
      />

      <p className="text-xl mt-10">Private Projects:</p>
      <WorkCard
        title="CreateiveCoding"
        description="3dモデルをWebページ上に描画できるSplineや、簡易なアニメーションを実現できるLottieを利用した見栄えのいいインタラクションをサンドボックス環境で作成している。"
        link="https://materials-kappa.vercel.app/three"
        imgUrl="/958.png"
      />
      <WorkCard
        title="写真ポートフォリオ"
        description="趣味で撮影した写真のポートフォリオを公開しています。アニメーション部分を試行しており、見栄えの良いサイトを目指しました。"
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

      <p className="text-xl mt-10">Writing:</p>
      <WorkCard
        title="Qiita"
        description="Qiitaで習得したノウハウをアウトプットしています。Please follow me!"
        link="https://qiita.com/Annoske"
        imgUrl="/y0537.png"
      />
      <WorkCard
        title="個人ブログ"
        description="ノウハウをまとめたブログを公開しています。技術的な内容を中心に執筆しています。"
        link="https://anno-blog.vercel.app/"
        imgUrl="/581.png"
      />
      <WorkCard
        title="会社テックブログ"
        description="在職中に公開したブログ記事です。技術的な内容を中心に執筆しています。"
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
