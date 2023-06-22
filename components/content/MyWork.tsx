import Image from 'next/image';
import WorkCard from '../../atom/WorkCard';

function MyWork(){
    return (
      <div>
        <Image 
          src='/y0743.png'
          alt='logo'       
          width={250}
          height={250}/>

        <p className='text-xl mt-10'>Bussiness Projects:</p>
        <WorkCard 
        title='一般家庭向け電力系Webサービス'
        description='太陽光発電に用いるソーラパネルの発電量や使用量を管理するサービス。フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の構築・開発・保守を担当した。'
        imgUrl='/y0615.png'
        />
        <WorkCard 
        title='医師向け患者診断サポートサービス'
        description='生体情報を定期的に、正確に把握する必要がある糖尿病患者や妊婦さんが、ウェアラブル端末を用いて生体情報をクラウドにアップロードし医師に連携するサービス。.netCore、クラウド環境(Azure)でのWebページ保守を担当した。'
        imgUrl='/y0187.png'
        />
        <WorkCard 
        title='法人向けCO2フリー電力可視化・DRサポートサービス'
        description='法人向けに、ある拠点で使った電力の内どれくらいがCO2フリー電力であるかを可視化するサービス。また、電力逼迫時に電力使用を控えるよう要請するデマンドレスポンス業務のサポートも行う。フロントエンド(React)、バックエンド(Express)、クラウド環境(Azure)の開発・保守、CICD環境の構築・最適化を担当した。'
        imgUrl='/y1042.png'
        />
        <WorkCard 
        title='コンソーシアム型ブロックチェーンサービスPoC検証'
        description='HyperLedger Fabricを利用したコンソーシアム型サービスの構築を実施。セキュアな拠点入場管理システムを構築した。'
        imgUrl='/y1202.png'
        />
        <WorkCard 
        title='フリーアドレス座席管理サービス(社内サービス)'
        description='ログインに顔認証を用いたフリーアドレス座席管理サービス。企画から、使用技術の選定・開発・運用まで担当。'
        imgUrl='/y0451.png'
        />
        <WorkCard 
        title='Azure PaaS サポートエンジニア'
        description='Azure PaaS サポートエンジニアとしてAzure App Servise の領域を担当。 App Service の領域において、お客様より承る「このようなエラーが発生した」「こういった動作をしてほしいが実現可能か」かといったご質問についてサポートエンジニアとしてサポートを提供していた。 サポートではお客様の理解度に合わせて図表で示す、公開情報をご案内するといったお客様目線での対応を心がけており、クラウド（Azure）の技術的な知見に加えて、お客様とのコミュニケーションを含むソフトスキルを身につけた。        '
        imgUrl='/1384.png'
        />

        <p className='text-xl mt-10'>Private Projects:</p>
        <WorkCard 
        title='WhatIPay'
        description='毎月払っているサブスクの金額を管理し可視化するサービス。Next.js、クラウド環境(Firebase)でのWebページ開発を実施。'
        link='https://whatipay-54f12.web.app/'
        imgUrl='/y1207.png'
        />
        <WorkCard 
        title='WatchNow(In Progress!!)'
        description='上映時間とジャンルだけで、映画を検索するサービス。サブスクリプションのリンクも表示し、検索結果から即視聴できる。Next.jsでのWebページ開発を実施中。'
        imgUrl='/y0961.png'
        link='https://watch-now.vercel.app/'
        />
        <WorkCard 
        title='SayCheese!(In Progress!!)'
        description='写真(人物撮影)を撮りたい人と、写真を撮ってほしい人をマッチングするサービス。Next.jsでのWebページ開発を実施中。'
        imgUrl='/y0547.png'
        />

        <p className='text-xl mt-10'>OSS:</p>
        <WorkCard 
        title='Buy me a cofee.(In Progress!!)'
        description='BuyMeACofee!ボタンを手軽に導入するためのパッケージ。Stripeにリダイレクトさせて決済まで行う。'
        link='https://github.com/Anno328/buy-me-a-cofee'
        imgUrl='/y0357.png'
        />

        <p className='text-xl mt-10'>Writing:</p>
        <WorkCard 
        title='Qiita'
        description='Qiitaで習得したノウハウをアウトプットしています。Please follow me!'
        link='https://qiita.com/Annoske'
        imgUrl='/y0537.png'
        />
        
        {/* <p className='text-xl mt-10'>Studying:</p>
        <WorkCard 
        title='3DModel作成'
        description='ブラウザで3Dモデルを描画できることを検証した。(react-three-fiber)自作で3Dモデルが作成できれば、よりリッチなWebサイトが構築できると考え勉強中！'
        imgUrl='/y0896.png'
        /> */}
      </div>
    )
  }
  
  export default MyWork 