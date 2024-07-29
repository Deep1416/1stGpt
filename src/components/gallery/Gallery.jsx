import React, { useRef, useEffect } from "react";
import gallery1 from "/gallery/1.jpg";
import gallery2 from "/gallery/2.jpg";
import gallery3 from "/gallery/3.jpg";
import gallery4 from "/gallery/4.jpg";
import gallery5 from "/gallery/5.jpg";
import gallery6 from "/gallery/6.jpg";
import "./Gallery.css"; // Import your CSS file

const Gallery = () => {
  const galleryRef = useRef(null);

  const gallery = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery6 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const galleryElement = galleryRef.current;
      const galleryTop = galleryElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (galleryTop < windowHeight * 0.8) {
        galleryElement.classList.add("reveal");
      } else {
        galleryElement.classList.remove("reveal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={galleryRef} className="gallery dark:bg-black dark:text-white w-full">
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img
              src={item.img}
              alt={`Gallery item ${item.id}`}
              className="gallery-image"
            />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
