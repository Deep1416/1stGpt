import React, { useRef, useEffect } from "react";

const About = () => {
  const imgRef = useRef(null);
  let imgBounds = null;

  useEffect(() => {
    const imgElement = imgRef.current;

    const updateBounds = () => {
      imgBounds = imgElement.getBoundingClientRect();
    };

    const rotateToMouse = (e) => {
      if (!imgBounds) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const center = {
        x: mouseX - centerX,
        y: mouseY - centerY,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      imgElement.style.transform = `
        scale3d(1.0, 1.0, 1.0)
        perspective(800px)
        rotate3d(
          ${-center.y / 100},
          ${center.x / 100},
          0,
          ${Math.log(distance) * 0.8}deg
        )
      `;
    };

    updateBounds();
    window.addEventListener('mousemove', rotateToMouse);
    window.addEventListener('resize', updateBounds);

    return () => {
      window.removeEventListener('mousemove', rotateToMouse);
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  return (
    <div className="dark:bg-black dark:text-white text-black bg-white">
      <div className="xl:max-w-screen-xl container mx-auto">
        <div className="leading-none w-full">
          <div className="flex items-center md:flex-row flex-col">
            <div className="w-1/2">
              <img ref={imgRef} src="./about/about-img.png" alt="About Us" className=" h-auto max-w-full"/>
            </div>
            <div className="w-1/2">
              <div>
                <div className="mb-[25px]">
                  <h3 className="mb-[0.5em] font-jakarta">About Us</h3>
                </div>
                <div className="">
                  <div className="capitalize">
                    <h2 className="mb-[0.5em]  font-bold font-jakarta   lg:leading-[56px]  lg:text-[50px] md:leading-[40px] md:text-[36px] text-[26px]">
                      Easy Ways To Use <br />
                      AI Tools, And Tools <br />
                      To Build AI.
                    </h2>
                  </div>
                  <div className="mb-[30px] font-jakarta leading-7">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots <br />
                      in a piece of classical Latin literature from 45 BC,
                      making
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-[12px] w-fit"
                  style={{
                    background:
                      "linear-gradient(90deg, #16C9BC 0%, #078CE8 100%)",
                  }}
                >
                  <button className="py-5 px-[39px]">About Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
