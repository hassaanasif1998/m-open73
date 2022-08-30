import Head from "next/head";
import Link from 'next/link';
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="404: M-Open73 | Page Not Found"
        description="404 page for all our missing pages"
        canonical="https://nine4-3.vercel.app/404"
        openGraph={{
          url: "https://nine4-3.vercel.app/404",
        }}
      />
      <Head>
        <title>M-Open73 | Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto text-center mt-52 max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <Link href="/">
          <a
            className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
