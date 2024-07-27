import React from "react";
import "./ourService.css";
const OurService = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white  text-black   ">
      <div className="pt-[7.4em] min-h-[1px] xl:max-w-screen-xl container mx-auto">
        <div className="mb-[25px]">
          <h4 className="text-center mb-[0.5em] text-[15px]">Our Services</h4>
        </div>
        <div className="text-center font-jakarta mb-5">
          <h2 className="lg:leading-[56px]  lg:text-[50px] md:leading-[40px] md:text-[36px] leading-[1.2rem] text-[26px] font-bold mb-[0.5em]">
            We provide the high <br /> quality &amp; performance{" "}
          </h2>
        </div>
        <div className="mt-[4.50em] pb-[10em] font-jakarta md:px-[10em]">
          <div className="flex items-center md:flex-row flex-col">
            <div className="w-1/2">
              <div className="flex items-center gap-4 md:flex-row flex-col">
                <div className="w-[3em] h-[3em] zoom-animation">
                  <img
                    src="./ourService/ai.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-[22px] leading-normal capitalize ">
                  We Offer Innovative Artificial <br /> Intelligence Products.
                  We Provide Solutions That Enable
                </h3>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex items-center gap-4 md:flex-row flex-col">
                <div className="w-[3em] h-[3em] zoom-animation">
                  <img
                    src="./ourService/setting.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-[22px] leading-normal capitalize ">
                  We Provide Solutions That Enable <br /> Them To Predict Future
                  .Them To Predict Future .
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
