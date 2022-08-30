import Head from "next/head";
import Header from "../components/utils/Header";
import Partners from "../components/FooterPages/Partners";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Partners: M-Open73 | Partners"
        description="Welcome to Partners page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Partners</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Partners />
      <Footer />
    </div>
  );
}
