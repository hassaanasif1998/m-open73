import Head from "next/head";
import Header from "../components/utils/Header";
import TermsOfService from "../components/FooterPages/TermsOfService";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Terms-of-Services | Terms of Services"
        description="Welcome to Term of Services page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Terms of Service</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <TermsOfService />
      <Footer />
    </div>
  );
}
