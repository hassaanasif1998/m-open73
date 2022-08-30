import Head from "next/head";
import Header from "../../../components/utils/Header";
import ItServices from "../../../components/Services/ItServices";
import Footer from "../../../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Tech() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Tech Services: M-Open73 | Tech Services"
        description="Welcome to Tech Services homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Tech Services</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <ItServices />
      <Footer />
    </div>
  );
}
