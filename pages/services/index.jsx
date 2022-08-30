import Head from "next/head";
import Header from "../../components/utils/Header";
import Main from "../../components/home/Main";
import Footer from "../../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Services: M-Open73 | Services Home"
        description="Welcome to Services homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Services Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
