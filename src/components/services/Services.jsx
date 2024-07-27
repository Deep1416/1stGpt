import React from "react";
import service1 from "/service/service-1.jpg";
import service2 from "/service/service-2.jpg";
import service3 from "/service/service-3.jpg";
import service4 from "/service/service-4.jpg";
import service5 from "/service/service-5.jpg";
import service6 from "/service/service-6.jpg";
import service7 from "/service/service-7.jpg";

const Services = () => {
  let images = [
    {
      img: service1,
      name: "Color Code"
    },
    {
      img: service2,
      name: "AI Generator"
    },
    { img: service3, name: "AI Images" },
    { img: service4, name: "Artifical" },
    { img: service5, name: "AI Coding" },
    { img: service6, name: "Innvovation" },
    { img: service7, name: "BackLight" },
  ];

  return (
    <div className="pt-[9.4em] bg-white dark:bg-black dark:text-white text-black">
      <div className=" xl:max-w-screen-xl container mx-auto">
        <div className="mb-5 text-center">
          <div className="mb-[25px]">
            <h4 className="mb-[0.5em] font-jakarta">Services</h4>
          </div>
        </div>
        <div className="mb-5">
          <div className="text-center font-jakarta">
            <h2 className="mb-[0.5em] text-[50px] font-bold leading-tight font-jakarta">
              We Provide The High <br />
              Quality & Performance
            </h2>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  md:gap-8 sm:gap-6 gap-4">
            {images.map((item, id) => (
              <div
                className="relative lg:w-[302px] lg:h-[302px] w-fit h-fit overflow-hidden group rounded-[10px]"
                key={id}
              >
                <div className="w-full h-full rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:rounded-[10px]  ">
                  <img
                    src={item.img}
                    alt={`Service ${id + 1}`}
                    className="h-full w-full rounded-[10px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-95"
                  />
                </div>
                <div className="absolute inset-0 hover:rounded-[10px] bg-black bg-opacity-50 flex items-end justify-start pl-4 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-[10px]">
                  <button
                    className="px-4 py-2 rounded-md font-jakarta font-bold text-white transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-10px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #16C9BC 0%, #078CE8 100%)",
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
