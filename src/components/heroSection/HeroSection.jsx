import React from "react";
import "./HeroSection.css";
import Header from "../header/Header";
import Marque from "./marque/Marque";
import WrapperContainer from "../wrapperContainer/WrapperContainer";

const HeroSection = () => {
  return (<>
    <div className="relative  font-jakarta  ">
      <div
        className="herosection md:min-h-[900px]  min-h-screen object-center "
        style={{ backgroundImage: `url('/herosection.jpg')` }}
      >
        <Header />
        <div className=" xl:max-w-screen-xl container mx-auto  flex justify-center xl:justify-start items-center  md:py-52 py-40 ">
          <div className=" text-white">
            <p className=" font-medium ">Generator & Text to Speech </p>
            <h1 className=" md:text-7xl text-3xl  font-extrabold  lg:leading-[95px] py-8">
              Your Complete <br />
              Generative Voice <br />
              Artificial <br />
            </h1>
            <button
              className="py-[13px] px-[39px] rounded-[12px] text-white inline-block"
              style={{
                background: "linear-gradient(90deg, #16C9BC 0%, #078CE8 100%)",
              }}
            >
              Get Started
            </button>
          </div>
        </div> 
        <Marque/>
      </div>
    </div>
   
  </>
  );
};

export default HeroSection;
