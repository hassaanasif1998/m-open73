import Head from "next/head";
import Header from "../../../components/utils/Header";
import LServices from "../../../components/Services/LServices";
import Footer from "../../../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Legal() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: M-Open73 | Legal Services"
        description="Welcome to Legal services homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Legal Services</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <LServices />
      <Footer />
    </div>
  );
}
