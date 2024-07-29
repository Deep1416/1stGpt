import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import Faqs from "./../../store/Faq.json";
import { Link, Element } from "react-scroll";

const Faq = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
   <Element name="Faq">
     <div className="pt-[9.4em] dark:bg-black  dark:text-white bg-white text-white">
      <div className=" xl:max-w-screen-xl container mx-auto">
        <div className="text-center">
          <div className="mb-5">
            <div className="mb-[25px]">
              <h4 className="mb-[0.5em] text-[15px] dark:text-white text-black">Our FAQ's</h4>
            </div>
          </div>
        </div>
        <div className="text-center mb-5">
          <div className="">
            <h2 className="text-[50px] leading-[56px] mb-[0.5em] font-bold font-jakarta dark:text-white text-black">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="pb-5 ">
          {Faqs.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className=" mb-[1.8em] py-[30px] px-[35px] rounded-[12px] border-1 border-[rgb(42,50,59)]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #1D2329 0%, #171B20 100%)",
                }}
              >
                <div className="text-left font-jakarta">
                  <div className="flex justify-between">
                    <p className="text-[22px] font-semibold">{item.question}</p>
                    <span onClick={() => handleToggle(item.id)}>
                      {isExpanded ? (
                        <RiSubtractLine className="text-[35px] font-bold cursor-pointer" />
                      ) : (
                        <IoIosAdd className="text-[35px] font-bold cursor-pointer" />
                      )}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="pt-5 text-[#a9a7b0]">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
   </Element>
  );
};

export default Faq;
