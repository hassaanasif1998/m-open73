import Head from "next/head";
import Header from "../components/utils/Header";
import PrivacyPolicy from "../components/FooterPages/PrivacyPolicy";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Privacy-Policy: M-Open73 | Privacy Policy"
        description="Welcome to Privacy Policy page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Privacy Policy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
