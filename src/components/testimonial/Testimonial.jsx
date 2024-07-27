import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from "./card/Card";
import { test } from "./../../store/test";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // laptop and larger screens
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // tablet screens
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // mobile screens
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="pt-[9.4em] dark:bg-black dark:text-white bg-white text-black">
      <div className="xl:max-w-screen-xl container mx-auto">
        <div className="w-full ">
          <div className="mb-[25px] text-center">
            <h4 className=" mb-[0.5em] font-jakarta capitalize">
              testimonial
            </h4>
          </div>
          <div className="mb-[25px] text-center  capitalize">
            <h2 className="mb-[0.5em] font-jakarta font-bold text-[50px]">
              what they say?
            </h2>
          </div>
          <div className="mt-[3.1em] pb-10 ">
            <Slider {...settings}>
              {test.map((e, idx) => (
                <Card item={e} key={idx} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
