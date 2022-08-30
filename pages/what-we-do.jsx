import Head from "next/head";
import Header from "../components/utils/Header";
import WhatWeDo from "../components/FooterPages/WhatWeDo";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="M-Open73 | What We DO"
        description="Welcome to M-Open73 What We DO."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | What We DO</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
