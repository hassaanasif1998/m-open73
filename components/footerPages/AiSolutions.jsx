import Quote from "../Quote";

export default function Main() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pb-24 mx-auto pt-52">
          <h1 className="mb-6 font-bold text-center text-white text-80 font-4 lh-6 ld-04">
            A.I Solutions
          </h1>
          <h2 className="pb-5 text-2xl font-semibold text-center text-gray-700 font-4 lh-6 ld-04">
            nine4 is a free to use template website for websites made
            <br />
            with Next.js and styled with Tailwind CSS
          </h2>
          <div className="ml-6 text-center">
            <a
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <span className="justify-center">Get a Quote</span>
              </div>
            </a>
            <a
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <span className="justify-center">Contact Us</span>
              </div>
            </a>
          </div>
        </div>

        <h2 className="pt-5 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Benefits of working with M-Open73.
        </h2>
        <br></br>
        <p className="mx-auto text-xl font-normal leading-relaxed text-center text-gray-300 fs521 lg:w-2/3">
          Here is our collection of free to use templates made with Next.js &
          styled with Tailwind CSS.
        </p>
        <div className="max-w-4xl px-3 pt-12 pb-24 mx-auto fsac4 md:px-1">
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 text-lg font-semibold text-white">
              Reasonably Priced
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 text-lg font-semibold text-white">
              Responsive User Interface
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 text-lg font-semibold text-white">
              Expandable Architecture
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
          <div className="ktq4">
            <img className="w-10" src="https://nine4.app/favicon.png"></img>
            <h3 className="pt-3 text-lg font-semibold text-white">
              UX Catering Visuals
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
        <h2 className="pt-5 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Key Consultancy Services
        </h2>
        <div className="max-w-6xl px-3 pt-32 pb-1 mx-auto fsac4 md:px-1">

          <div className="ktq4">
            <img src="https://nine4.app/images/nine4-3.png"></img>
            <h3 className="pt-3 text-lg font-semibold text-white">
              Business Adviosry
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md fkrr1">
              Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
              Nullam vehicula, libero at euismod tristique, neque ligula faucibus
              urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
              rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
              odio.
            </p>
          </div>
          <div className="ktq4">
            <img src="https://nine4.app/images/nine4-3.png"></img>
            <h3 className="pt-3 text-lg font-semibold text-white">
              Software Development
            </h3>
            <p className="pt-2 text-gray-200 value-text text-md fkrr1">
              Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
              Nullam vehicula, libero at euismod tristique, neque ligula faucibus
              urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
              rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
              odio.
            </p>
          </div>
        </div>
        <Quote />
      </section>
    </div>
  );
}
