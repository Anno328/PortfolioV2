import Image from "next/image";
import WorkCard from "../../atom/WorkCard";
import React, { useState } from "react";

function MyWork() {
  const [showPopup, setShowPopup] = useState(false);
  const [showDoctorPopup, setShowDoctorPopup] = useState(false);
  const [showC02Popup, setShowC02Popup] = useState(false);
  const [showAzurePopup, setShowAzurePopup] = useState(false);
  const [showKnowledgePopup, setShowKnowledgePopup] = useState(false);

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
        <div className="space-y-8 text-left">
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">概要</h2>
            <p className="text-sm">
              戸建て住宅に設置する太陽光発電に用いるソーラパネルの発電量や使用量を管理するシステムを開発。10人未満のアジャイル体制にて開発を実施。
            </p>
          </section>
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">担当業務</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>
                フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の構築
              </li>
              <li>開発・保守を担当</li>
              <li>顧客との調整、ヒアリング</li>
              <li>若手メンバーの育成・コードレビュー・技術相談対応</li>
              <li>小さなタスク単位での進行管理</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">習得スキル</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>React / Express を用いたフルスタック開発スキル</li>
              <li>
                Azure App Service、Azure
                Functions等を活用したクラウド環境構築スキル
              </li>
              <li>アジャイル開発（スクラム）でのチーム開発経験</li>
              <li>API 設計、非同期通信まわりの実装ノウハウ</li>
              <li>
                パフォーマンスを意識したフロント・バック間のデータ連携設計
              </li>
              <li>顧客ヒアリング・要件整理スキル</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-lg mb-2 border-b pb-1">コメント</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>
                太陽光発電量をリアルタイムに可視化するため、非同期通信やデータ更新の負荷を考慮して設計を行いました。
              </li>
              <li>
                React・Express・Azureを組み合わせるフルスタック構成であったため、各レイヤー間の整合性を意識した開発を心がけました。
              </li>
              <li>
                アジャイル開発（スクラム）で進行しており、短いスプリントの中で要件調整→実装→テスト→レビューを繰り返すことで、迅速に改善を回す経験ができました。
              </li>
              <li>
                顧客との調整やヒアリングも担当し、非エンジニア向けにもわかりやすく技術的背景を説明する力が身につきました。
              </li>
              <li>
                若手メンバーへの技術支援やコードレビューを積極的に行い、チーム全体の生産性と品質向上に貢献しました。
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
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
        onClick={() => setShowDoctorPopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowDoctorPopup(true)}
      />
      {showDoctorPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowDoctorPopup(false)}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => setShowDoctorPopup(false)}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">概要</h2>
                <p className="text-sm">
                  生体情報を定期的に、正確に把握する必要がある糖尿病患者や妊婦さんが、ウェアラブル端末を用いて生体情報をクラウドにアップロードし医師に連携するシステムの開発を実施。
                </p>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  担当業務
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>10人未満のアジャイル開発</li>
                  <li>デバイス連携先との連携方式設計を担当</li>
                  <li>既存構成のドキュメント化を担当</li>
                  <li>.NetCore、クラウド環境(Azure)でのWebページ保守を担当</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  習得スキル
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    医療系システムにおけるデータ連携要件の理解（セキュリティ、整合性、耐障害性）
                  </li>
                  <li>デバイス側との通信プロトコル、API仕様調整スキル</li>
                  <li>
                    Azure（Functions、App
                    Service、ストレージ等）の構成把握および調整スキル
                  </li>
                  <li>.NetCore を用いた保守・改修対応スキル</li>
                  <li>
                    アジャイル環境下での課題管理・ステークホルダー調整能力
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  コメント
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    本案件は参画期間が短かったため、特にクラウド周りの構成調整やデバイス提供会社との仕様すり合わせが中心業務となりました。短期間でもスムーズに作業を進められるよう、既存ドキュメントやログを精査し、状況把握のスピードを意識しました。
                  </li>
                  <li>
                    医療データ連携という特性上、精度やセキュリティを重視し、データ連携方式の検討では不整合や漏れが出ないよう慎重に設計を行いました。
                  </li>
                  <li>
                    既存構成のドキュメント化では、属人化していた部分を整理し、今後参加するメンバーが理解しやすい構成図・フローにまとめることでプロジェクト全体の開発効率化に貢献しました。
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
      <WorkCard
        title="法人向けCO2フリー電力可視化・DRサポートサービス"
        description="法人向けに拠点で使った電力の内どれほどの割合がCO2フリー電力であるかを可視化するサービス。また、電力逼迫時に電力使用を控えるよう要請するデマンドレスポンス(DR)業務のサポートもサービスの開発。20人未満のアジャイル体制にて開発を実施。"
        imgUrl="/y1042.png"
        onClick={() => setShowC02Popup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowC02Popup(true)}
      />
      {showC02Popup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowC02Popup(false)}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => setShowC02Popup(false)}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">概要</h2>
                <p className="text-sm">
                  法人向けに拠点で使った電力の内どれほどの割合がCO2フリー電力であるかを可視化するサービス。また、電力逼迫時に電力使用を控えるよう要請するデマンドレスポンス(DR)業務のサポートもサービスの開発。20人未満のアジャイル体制にて開発を実施。
                </p>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  担当業務
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の開発・保守
                  </li>
                  <li>既存構成のドキュメント化を担当</li>
                  <li>顧客との調整、ヒアリング</li>
                  <li>
                    アジャイル(スクラム)開発の推進(スクラムイベントの実施)
                  </li>
                  <li>
                    CI/CD 環境（Azure DevOps / GitHub
                    Actions）の構築・最適化を主導
                  </li>
                  <li>
                    インフラ構成・システム全体構造の整理とドキュメント化、およびチームへの説明
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  習得スキル
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    React / Express を用いた Web
                    アプリケーション設計・実装スキル
                  </li>
                  <li>
                    Azure（App Service、Functions、Storage
                    等）を中心としたクラウド構成の理解と運用スキル
                  </li>
                  <li>
                    CI/CD パイプライン（GitHub Actions / Azure
                    DevOps）の構築・効率化
                  </li>
                  <li>スクラムマスター的役割を含むアジャイル開発推進力</li>
                  <li>
                    非機能要件（性能・運用・可用性）を踏まえた全体設計の視点
                  </li>
                  <li>
                    顧客ヒアリングの実施と仕様調整のコミュニケーションスキル
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  コメント
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    電力データという大規模かつ変動の大きいデータを扱うため、バックエンドおよびクラウド構成ではパフォーマンスを意識した設計・チューニングを行いました。
                  </li>
                  <li>
                    CI/CD
                    環境の整備では、開発チームのボトルネックだったビルド時間・デプロイ手順を見直し、自動化・高速化を実現することで、開発スピード向上に貢献しました。
                  </li>
                  <li>
                    顧客ヒアリングでは、専門用語の多い電力業界の要件を正確に理解し、技術的な観点から実現性を整理して提案することで、開発方針の早期確立を支援しました。
                  </li>
                  <li>
                    スクラムイベントの推進では、チーム内のコミュニケーション改善や課題共有の習慣化を促し、アジャイル開発の成熟度向上に寄与しました。
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
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
        description="Azure App Service の領域を担当し、技術的な問い合わせや不具合対応、ナレッジ発信を行ったサポートエンジニア業務。"
        imgUrl="/1384.png"
        onClick={() => setShowAzurePopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowAzurePopup(true)}
      />
      {showAzurePopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowAzurePopup(false)}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => setShowAzurePopup(false)}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  担当業務
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    App Service
                    の領域において、お客様より承る「このようなエラーが発生した」「こういった動作をしてほしいが実現可能か」といったご質問についてサポートエンジニアとしてサポートを提供
                  </li>
                  <li>
                    App Service
                    の仕様に関する詳細な質問や不具合の懸念がある事象に関しては、海外のエンジニアとディスカッションを行い、質問いただいたお客様へ情報をご案内
                  </li>
                  <li>社内外へのナレッジ発信（テックブログ、勉強会）</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  習得スキル
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    Azure App Service を中心とした PaaS
                    製品の詳細な動作仕様の理解
                  </li>
                  <li>
                    ログ解析や Kudu/診断ツールを用いたトラブルシューティング能力
                  </li>
                  <li>
                    製品チーム（英語圏）との技術ディスカッション・エスカレーション対応
                  </li>
                  <li>
                    顧客の技術レベルに合わせた説明スキル（技術抽象化・逐次説明の工夫）
                  </li>
                  <li>
                    再発防止策やベストプラクティスの整理・ドキュメント化スキル
                  </li>
                  <li>正確かつ迅速な状況把握および課題切り分けスキル</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  コメント
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    お問い合わせ内容の背景や運用状況を丁寧にヒアリングすることで、単に回答を提供するだけでなく「本質的な原因の特定」「再発防止策の提示」まで踏み込み、お客様満足度の向上に寄与しました。
                  </li>
                  <li>
                    海外エンジニアとの調整では、英語での技術議論だけでなく、お客様側にも噛み砕いて説明する役割を担い、双方のコミュニケーションギャップ解消に貢献しました。
                  </li>
                  <li>
                    App Service
                    の仕様や制約を深く理解し、技術的に難易度の高い問い合わせの担当を任される機会が増え、チーム内のナレッジ共有にも積極的に取り組みました。
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
      <WorkCard
        title="ナレッジプラットフォーム"
        description="課題を抱える企業や個人が、知見を持つエキスパートに1時間単位でビジネス相談ができるスポットコンサル「ビザスクinterview」を主軸とした各種サービスが利用できるプラットフォーム。"
        imgUrl="/580.png"
        onClick={() => setShowKnowledgePopup(true)}
        showDetailButton={true}
        onDetailClick={() => setShowKnowledgePopup(true)}
      />
      {showKnowledgePopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowKnowledgePopup(false)}
        >
          <div
            className="bg-white py-12 px-8 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 flex justify-end z-10">
              <button
                className="text-gray-500 hover:text-gray-800 bg-white rounded-full p-2"
                onClick={() => setShowKnowledgePopup(false)}
              >
                ×
              </button>
            </div>
            <div className="space-y-8 text-left">
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">概要</h2>
                <p className="text-sm">
                  課題を抱える企業や個人が、知見を持つエキスパートに1時間単位でビジネス相談ができるスポットコンサル「ビザスクinterview」を主軸とした各種サービスが利用できるプラットフォーム。
                </p>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  担当業務
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    フロントエンド(Nuxt)、バックエンド(Python)の開発・保守
                  </li>
                  <li>開発体験向上のためのCICD環境改善</li>
                  <li>利用ユーザとの調整、ヒアリング</li>
                  <li>AIコーディングツールの最適化</li>
                  <li>小規模(半年ほど)のプロジェクトリード</li>
                  <li>システムへのAI組み込み</li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  習得スキル
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>Nuxt / TypeScript を用いたフロントエンド開発スキル</li>
                  <li>
                    Python（FastAPI / Flask 等）による API 設計・実装スキル
                  </li>
                  <li>
                    CI/CD パイプラインの構築改善による開発効率化（GitHub Actions
                    / CircleCI）
                  </li>
                  <li>
                    AI
                    コーディングツールを業務フローへ統合するためのプロセス設計
                  </li>
                  <li>ユーザヒアリングを通じた機能改善・要件整理のスキル</li>
                  <li>
                    小規模チームのプロジェクトリード（進行管理・仕様調整・レビュー）
                  </li>
                  <li>
                    AI 機能の PoC 設計、API
                    連携、サービス導入に伴う技術検証スキル
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="font-bold text-lg mb-2 border-b pb-1">
                  コメント
                </h2>
                <ul className="list-disc ml-6 text-sm">
                  <li>
                    既存システムの課題を整理し、CI/CD
                    の自動化やレビュー体制の改善を主導することで、開発速度と品質の向上に貢献しました。
                  </li>
                  <li>
                    AI
                    コーディングツールの活用では、開発フローに合わせた設定調整・ベストプラクティスの整理を行い、チーム全体の生産性向上に寄与しました。
                  </li>
                  <li>
                    ユーザヒアリングでは、業務背景や課題の本質を把握し、技術的観点から最適な提案を行うことで、プロダクト改善に直接つながるアウトプットを創出しました。
                  </li>
                  <li>
                    AI 機能の組み込みにおいては、PoC
                    段階から検証・実装まで一貫して担当し、新しい価値提供を実現する機能の土台づくりに貢献しました。インフラチームや開発横断チームとの調整も担当し、開発組織としてAIをシステムに組み込む基盤の構築に貢献しました。
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}

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
        title="企業テックブログ"
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
