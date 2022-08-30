import Link from 'next/link';
export default function Footer() {
  return (
    <div>
      <footer className="pb-4 text-gray-200">
        <div className="max-w-5xl px-4 mx-auto divide-y divide-gray-900 xl:max-w-5xl sm:px-6 md:px-8">
          <ul className="grid text-sm font-medium sm:pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            <li className="row-span-2 space-y-5">
              <h2 className="text-2xl tracking-wide text-white">M-Open73</h2>
              <ul className="space-y-4 text-md">
                <li>
                  <Link href="/about">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Who we are
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white"
                    >
                      What we do
                    </a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/portfolio">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Portfolio
                    </a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/experts">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Meet our experts
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="row-span-2 space-y-5">
              <h2 className="text-2xl tracking-wide text-white">Services</h2>
              <ul className="space-y-4 text-md">
                <li>
                  <Link href="/ai-solutions">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      A.I Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/web-mobile-apps">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white"
                    >
                      Web & Mobile Apps
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/business-advisory">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Business Advice
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/startups">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Startups
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="row-span-2 space-y-5">
              <h2 className="text-2xl tracking-wide text-white">Newsroom</h2>
              <ul className="space-y-4 text-md">

                <li>
                  <Link href="/news">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white"
                    >
                      News
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/press">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Press
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </li>


            <li className="space-y-5">
              <h2 className="text-2xl tracking-wide text-white">Connect</h2>
              <ul className="space-y-4 text-md">
                <li>
                  <Link href="/twitter">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      Twitter
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/linkedin">
                    <a
                      className="text-xl transition-colors duration-200 hover:text-white">
                      LinkedIn
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/facebook">
                    <a
                      className="text-xl font-semibold transition-colors duration-200 hover:text-white">
                      Facebook
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-t border-black lg:flex-row">
            <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <Link href="/term-of-services">
                  <a
                    className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
                  >
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
                  >
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <a
                    className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
                  >
                    Cookie Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <a
                    className="font-semibold text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
                  >
                    Partners
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <Link href="/">
                <a className="font-semibold tracking-tight text-gray-200 transition-colors duration-300 text-md hover:text-white hover:text-deep-purple-accent-400"
                >
                  © 2022 M-Open73 Consultancy.
                </a>
              </Link>
            </ul>
          </div>
        </div >
      </footer >
    </div>
  );
}
