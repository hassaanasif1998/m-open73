import Head from "next/head";
import Header from "../components/utils/Header";
import WebAndMobile from "../components/FooterPages/WebAndMobile";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="M-Open73 | Website And Mobile Apps"
        description="Welcome to M-Open73 Website And Mobile Apps page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Website And Mobile Apps</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <WebAndMobile />
      <Footer />
    </div>
  );
}
