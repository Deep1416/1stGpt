import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className=" text-center py-20 text-5xl font-bold">
          <h1>
          Insider AI Art Insights From Premier Artists.
          </h1>
        </div>
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-[22px] font-semibold capitalize mb-[0.5em] font-jakarta">
              Sign Up Newsletter
            </h2>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                aria-label="Email address"
                className=" border-b-2 p-2 mr-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="text-[22px] font-semibold capitalize mb-[0.5em] font-jakarta">
                Useful Links
              </h2>
              <ul className="font-medium">
                <li className="p-2 text-[15px] font-jakarta">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="p-2 text-[15px] font-jakarta">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Services
                  </a>
                </li>
                <li className="p-2 text-[15px] font-jakarta">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="p-2 text-[15px] font-jakarta">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold capitalize mb-[0.5em] font-jakarta">
                Support
              </h2>
              <ul className="font-medium">
                <li className="p-2 text-[15px] font-jakarta">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="p-2 text-[15px] font-jakarta">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Terms Of Service
                  </a>
                </li>
                <li className="p-2 text-[15px] font-jakarta">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[22px] font-semibold capitalize mb-[0.5em] font-jakarta">
                Office
              </h2>
              <ul className="font-medium">
                <li className="p-2 text-[15px] font-jakarta">
                  <a href="#" className="hover:underline">
                    Germany — 785 15th Street, <br /> Office 478 Berlin, DE
                    81566
                  </a>
                </li>
                <li className="p-2 text-[15px] font-jakarta">
                  <a href="#" className="hover:underline">
                    hello@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              1chatGpt™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.791-2.253 8.186 8.186 0 0 1-2.592.987A4.108 4.108 0 0 0 9.772 4.75a4.174 4.174 0 0 0 .104.936A11.676 11.676 0 0 1 1.392.744a4.056 4.056 0 0 0-.554 2.07 4.083 4.083 0 0 0 1.821 3.396 4.076 4.076 0 0 1-1.86-.516v.053a4.111 4.111 0 0 0 3.292 4.027 4.102 4.102 0 0 1-1.852.069 4.108 4.108 0 0 0 3.834 2.85A8.227 8.227 0 0 1 0 15.153 11.606 11.606 0 0 0 6.29 17c7.547 0 11.675-6.244 11.675-11.665 0-.18-.004-.357-.012-.533A8.306 8.306 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10a9.966 9.966 0 0 0 6.837 9.47c.5.09.682-.217.682-.483 0-.238-.009-.867-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.003.071 1.53 1.03 1.53 1.03.892 1.527 2.341 1.086 2.91.83.09-.647.35-1.086.636-1.337-2.22-.252-4.555-1.112-4.555-4.945 0-1.092.39-1.986 1.03-2.683-.103-.253-.447-1.271.098-2.65 0 0 .84-.27 2.75 1.025A9.554 9.554 0 0 1 10 4.832c.85.004 1.705.115 2.505.338 1.909-1.296 2.748-1.025 2.748-1.025.546 1.379.202 2.397.1 2.65.642.697 1.028 1.591 1.028 2.683 0 3.841-2.337 4.69-4.564 4.937.36.31.678.918.678 1.852 0 1.337-.012 2.418-.012 2.746 0 .269.18.579.688.481A9.963 9.963 0 0 0 20 10c0-5.523-4.477-10-10-10Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.001 0C4.478 0 0 4.477 0 10c0 5.522 4.478 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.477-10-9.999-10ZM7.38 15.235H4.58V7.5h2.8v7.735Zm-1.4-8.82a1.62 1.62 0 0 1-1.617-1.618c0-.894.723-1.618 1.617-1.618.894 0 1.618.724 1.618 1.618a1.621 1.621 0 0 1-1.618 1.618Zm10.255 8.82h-2.797v-4.125c0-.983-.021-2.245-1.369-2.245-1.371 0-1.58 1.07-1.58 2.173v4.197H8.892V7.5h2.681v1.055h.039c.373-.705 1.282-1.45 2.637-1.45 2.82 0 3.34 1.857 3.34 4.27v3.86Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
