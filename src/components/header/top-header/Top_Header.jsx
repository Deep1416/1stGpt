import React from "react";

const Top_Header = () => {
  return (
    <nav className="container mx-auto ">
      <div className="hidden  lg:flex justify-between items-center gap-4 text-white mt-4 text-[12px] px-8 capitalize">
        <div
          className="w-1/2 p-2 rounded-md"
          style={{
            background: "linear-gradient(90deg, #16c9bc 0%, #078ce8 100%)",
          }}
        >
          <p className="text-center">
            The ChatGPT Signifies Its Ability To Hold Interactive
          </p>
        </div>
        <div
          className="w-1/2 p-2 rounded-md"
          style={{
            background: "linear-gradient(90deg, #4a2e7b 0%, #31376a 100%)",
          }}
        >
          <p className="text-center">
            Artificial Intelligence Refers To The Simulation
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Top_Header;
