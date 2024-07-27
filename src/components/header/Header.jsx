import React, { useState, useEffect } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import Top_Header from "./top-header/Top_Header";
import "./Header.css"; // Import the CSS file
import DarkLight from "../DarkLight";
import AuthModal from "../authModel/AuthModel";


const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024 && window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`hidden lg:block container mx-auto py-3  ${
          isSticky ? "sticky-header" : ""
        }`}
      >
        {!isSticky && <Top_Header />}
        <div
          className={`main-header flex items-center justify-between py-2 px-8 ${
            isSticky ? "header-blur sticky-header" : ""
          }`}
        >
          <h1 className="text-[50px] leading-normal capitalize font-jakarta font-bold dark:text-white text-black">
            1stGPT
          </h1>
          <nav>
            <ul className="flex items-center gap-8 font-medium leading-[0.32] font-jakarta text-white">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Testimonial</li>
              <li>Faq</li>
              <li>Blog</li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <div>
              <TiSocialFacebook className="text-xl text-white" />
            </div>
            <div>
              <IoLogoTwitter className="text-xl text-white" />
            </div>
            <div>
              <FaInstagram className="text-xl text-white" />
            </div>
            <button
              className="py-[13px] px-[39px] rounded-[12px] text-white"
              style={{
                background: "linear-gradient(90deg, #16C9BC 0%, #078CE8 100%)",
              }}
              onClick={() => setModalOpen(true)}
            >
              Get Started
            </button>
          </div>
        </div>
        <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </header>
      <header className="lg:hidden container mx-auto p-3 absolute w-full">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <img src={'/logo-1.svg'} alt="Logo" className="w-full h-auto" />
          </div>
          <div className="text-white cursor-pointer text-2xl">
            <GiHamburgerMenu />
          </div>
        </div>
      </header>
      <DarkLight/>
    </>
  );
};

export default Header;
