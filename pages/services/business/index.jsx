import Head from "next/head";
import Header from "../../../components/utils/Header";
import BServices from "../../../components/Services/BServices";
import Footer from "../../../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Business() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: M-Open73 | Business Services"
        description="Welcome to Business Services homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Business Services</title>
        <link rel="icon" href="../../public/favicon.png" />
      </Head>
      <Header />
      <BServices />
      <Footer />
    </div>
  );
}
