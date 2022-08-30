import Head from "next/head";
import Contact from "../components/contact/Contact";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Contact: M-Open73 Constact Us"
        description="Welcome to Constact Us page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Contact Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
