import Head from "next/head";
import Header from "../components/utils/Header";
import AiSolutions from "../components/FooterPages/AiSolutions";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Ai-Solutions: M-Open73 | A.I Solutions"
        description="Welcome to A.I Solutions page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | A.I Solutions</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <AiSolutions />
      <Footer />
    </div>
  );
}
