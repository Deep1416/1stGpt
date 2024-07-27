import React from "react";
import gallery1 from "/gallery/1.jpg";
import gallery2 from "/gallery/2.jpg";
import gallery3 from "/gallery/3.jpg";
import gallery4 from "/gallery/4.jpg";
import gallery5 from "/gallery/5.jpg";
import gallery6 from "/gallery/6.jpg";
import "./Gallery.css"; // Import your CSS file

const Gallery = () => {
  const gallery = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery6 },
    // { id: 7, img: gallery7 },
    // { id: 8, img: gallery8 },
    // { id: 9, img: gallery9 },
  ];

  return (
    <div className="pt-[9.4em] dark:bg-black dark:text-white w-full ">
      <div className="">
      <div className="flex flex-nowrap items-center shrink-1">
        {gallery.map((item) => (
          <div className="relative w-60 h-56 overflow-hidden  grow-1" key={item.id}>
            <img src={item.img} alt={`Gallery item ${item.id}`} className=" image w-full h-full object-cover " />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
      <div className="pt-[100px] pb-10">
        <div className="text-center">

        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
