import Head from "next/head";
import Header from "../components/utils/Header";
import Blog from "../components/FooterPages/Blog";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Blog: M-Open73 | Blog"
        description="Welcome to Blog page."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 | Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}
