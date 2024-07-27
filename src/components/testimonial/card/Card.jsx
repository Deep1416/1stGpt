import React from "react";

const Card = ({ item }) => {
  return (
    <div
      className="mb-8 md:mb-10 lg:mb-12 xl:mb-14 w-full md:w-[392px] rounded-lg shadow-lg p-6 md:p-10 border pb-4"
      style={{
        background: 'linear-gradient(90deg, #1d2329 0%, #171b20 100%)',
        borderColor: '#2a323b'
      }}
    >
      <div className="flex items-center justify-center flex-col">
        <div className="mb-[25px] w-14 h-14 md:w-20 md:h-20">
          <img
            src={item.image}
            alt="Testimonial Image"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="text-white font-jakarta text-center">
          <p className="text-[1.3em] italic leading-8">
            “There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.”
          </p>
          <div className="mt-[25px]">
            <h2 className="text-white font-semibold text-base md:text-lg">
              {item.name}
            </h2>
            <span className="text-gray-300 text-xs md:text-sm uppercase">
              {item.professioon}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
