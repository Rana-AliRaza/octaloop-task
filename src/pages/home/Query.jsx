import React, { useState } from "react";
import forImg from "../../assets/images/qf.png";
import "../../styling/global.css";

const Query = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const accordionData = [
    {
      id: 1,
      question: "How do I create NFTs on 3dotlink?",
      answer: (
        <>
          <p className="mb-2 ">
            Artists and creators can use our AI-integrated platform to generate
            NFTs by providing specific inputs, such as the desired features and
            elements for their digital artwork.
          </p>
        </>
      ),
    },
    {
      id: 2,
      question: "What kind of art does 3dotlink support?",
      answer: (
        <>
          <p className="mb-2 ">
            Flowbite is first conceptualized and designed using the Figma
            software, so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </>
      ),
    },
    {
      id: 3,
      question: "How are digital artworks verified for authenticity?",
      answer: (
        <>
          <p className="mb-2 ">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="">
            However, we recommend using both Flowbite, Flowbite Pro, and even
            Tailwind UI as there is no technical reason stopping you from using
            the best of two worlds.
          </p>
          <ul className="ps-5 ">
            <li>
              <a href="https://flowbite.com/pro/" className="">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" className="">
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      question: "Can artists access and manage their collections on 3dotlink?",
      answer: (
        <>
          <p className="mb-2 ">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="">
            However, we recommend using both Flowbite, Flowbite Pro, and even
            Tailwind UI as there is no technical reason stopping you from using
            the best of two worlds.
          </p>
          <ul className="ps-5 ">
            <li>
              <a href="https://flowbite.com/pro/" className="">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" className="">
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="query bg-black h-fit py-8 pt-20">
      <div className="query-main w-full mx-auto">
        <div className="flex flex-wrap items-center mx-auto max-w-screen-2xl">
          {/* Left Section */}
          <div className="qer w-full lg:w-1/2 px-4 lg:pl-20">
            {/* Heading Section */}
            <div className="heading mb-6">
              <h4 className="text-4xl text-white font-zed font-medium">
                Have any question?
              </h4>
              <p className="my-2 font-inter mt-2 text-slate-50 text-lg font-medium">
                Curious about 3dotlink? Explore our frequently asked questions
                to find answers.
              </p>
            </div>
            <div className="font-medium text-center border-b border-gray-100">
              <ul className="flex flex-wrap justify-center lg:justify-start -mb-px font-zed text-white font-medium">
                {["General", "Pre ICO", "Token", "Client", "Legal"].map(
                  (tab, index) => (
                    <li key={index} className="me-2">
                      <button className="inline-block p-4 border-b-4 border-transparent rounded-t-lg hover:border-primaryDark font-medium text-lg">
                        {tab}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Accordion Section */}
            <div id="accordion-collapse" className="mt-4 py-2">
              {accordionData.map(({ id, question, answer }) => (
                <div
                  key={id}
                  className="text-white bg-red-900/80 rounded-xl my-2"
                >
                  <h2 id={`accordion-heading-${id}`}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 text-xl text-white font-medium font-zed hover:bg-primaryLight gap-3 rounded-xl"
                      onClick={() => toggleAccordion(id)}
                    >
                      <span
                        className={`${
                          activeAccordion === id
                            ? "text-primaryLight"
                            : "text-white"
                        }`}
                      >
                        {question}
                      </span>
                      <svg
                        className={`w-3 h-3 transform ${
                          activeAccordion === id ? "rotate-180 block" : "hidden"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  {activeAccordion === id && (
                    <div
                      id={`accordion-body-${id}`}
                      className="p-5 text-lg text-white"
                    >
                      {answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="anime flex flex-col justify-end items-end w-full lg:w-1/2 px-4 h-full">
            <img
              src={forImg}
              alt="Foreground illustration"
              className="w-full  lg:w-2/3 mt-auto lg:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;
