import Head from "next/head";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import CookiePolicy from "../components/FooterPages/CookiePolicy";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Cookie-Policy: M-Open73 | Cookie Policy"
        description="Welcome to Cookie Policy page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Cookie Policy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <CookiePolicy />
      <Footer />
    </div>
  );
}
