import Head from "next/head";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import BusinessAdvisory from "../components/FooterPages/BusinessAdvisory";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Business-advisory: M-Open73 | Business Advisory"
        description="Welcome to Business Advisory page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73| Business Advisory</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <BusinessAdvisory />
      <Footer />
    </div>
  );
}
