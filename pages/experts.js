import Head from "next/head";
import Header from "../components/utils/Header";
import Experts from "../components/FooterPages/Experts";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Experts: M-Open73 | Experts"
        description="Welcome to Experts page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Experts</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Experts />
      <Footer />
    </div>
  );
}
