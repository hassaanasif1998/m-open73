import Head from "next/head";
import About from "../components/about/About.jsx";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="About: M-Open About Us"
        description="Welcome to About us page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-open 73| About Us </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
