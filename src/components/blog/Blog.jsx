import React from "react";
import blogPost from "./../../store/BlogPost";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link, Element } from "react-scroll";


const Blog = () => {
  const settings = {
    arrows: false,
    dots: false,
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
   <Element name="Blog">
     <div className="pt-[9.4em] dark:bg-black dark:text-white ">
      <div className="xl:max-w-screen-xl container mx-auto ">
        <div className="text-center">
          <div className="mb-5">
            <div className="mb-[25px]">
              <h4 className="mb-[0.5em] text-[15px]">Our Blog</h4>
            </div>
          </div>
        </div>
        <div className="text-center mb-5">
          <div className="">
            <h2 className="text-[50px] leading-[56px] mb-[0.5em] font-bold font-jakarta">
              Breaking News And <br />
              Updates
            </h2>
          </div>
        </div>
        <div className="">
        <Slider {...settings}>
          {blogPost.map((item) => (
            <div className="mt-[52px]" key={item.id}>
              <div className="relative w-[400px] h-[486px]">
                <div className="relative w-[400px] h-[313px] overflow-hidden rounded-[12px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-[12px]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 rounded-[12px] flex items-center justify-center"></div>
                </div>
                <div className="mt-[15px] pt-5 pr-[35px]">
                  <div className="text-left">
                    <div className="inline items-center text-[#707070] text-[12px]">
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="mt-[15px] text-[21px] font-jakarta font-semibold capitalize ">
                    <h3 className="leading-normal">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
           </Slider>
        </div>
      </div>
    </div>
   </Element>
  );
};

export default Blog;
