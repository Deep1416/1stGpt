import React, { useRef, useEffect, useState } from "react";
import marque from "./../../../store/marque.json";
import './marque.css'; // Make sure to import the CSS file

const Marque = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    marqueeElement.addEventListener('mouseenter', handleMouseEnter);
    marqueeElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marqueeElement.removeEventListener('mouseenter', handleMouseEnter);
      marqueeElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div className={`marquee-content flex ${isPaused ? 'paused' : ''}`}>
        {marque.concat(marque).map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="marquee-item"
            onClick={() => setIsPaused(!isPaused)}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marque;
