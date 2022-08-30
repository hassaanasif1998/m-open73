import Head from "next/head";
import Header from "../components/utils/Header";
import Portfolio from "../components/FooterPages/Portfolio";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Portfolio: M-Open73 | Portfolio"
        description="Welcome to Portfolio page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}
