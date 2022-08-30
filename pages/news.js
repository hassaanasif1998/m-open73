import Head from "next/head";
import Header from "../components/utils/Header";
import News from "../components/FooterPages/News";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Startups: M-Open73 | Startups"
        description="Welcome to Startups page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Startups</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <News />
      <Footer />
    </div>
  );
}
