// pages/contact.tsx
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("../components/content/Contact"), {
  ssr: false,
});

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactPage() {
  return (
    <div className="p-16">
      <Contact />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
