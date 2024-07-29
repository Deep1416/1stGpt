import React, { useState } from "react";
import { BsJournalText } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import { BsFileImage } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { BsFileMusic } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";

const heading = [
  {
    id: 1,
    icon: <IoCubeOutline />,
    title: "All Models",
  },
  {
    id: 2,
    icon: <BsJournalText />,
    title: "TEXT GENERATION",
  },
  {
    id: 3,
    icon: <FaRegImage />,
    title: "TEXT TO IMAGE",
  },
  {
    id: 4,
    icon: <BsFileImage />,
    title: "IMAGE TO TEXT",
  },
  {
    id: 5,
    icon: <BsFileImage />,
    title: "IMAGE TO IMAGE",
  },
  {
    id: 6,
    icon: <IoVideocamOutline />,
    title: "TEXT TO VIDEO",
  },
  {
    id: 7,
    icon: <LuPhone />,
    title: "PHONE CALL",
  },
  {
    id: 8,
    icon: <BsFileMusic />,
    title: "MUSIC MODELS",
  },
];

const Aimodals = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isFilterHovered, setIsFilterHovered] = useState(false);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className=" bg-black">
      <div className="py-10 px-10">
        <div className="mb-7">
          <h1 className="text-[22px] font-semibold text-[#c0bcca] font-heebo">
            AI Models Store
          </h1>
        </div>
        <div className="border-b-[#312e37] border-b mb-[30px]">
          <div className="relative flex gap-3 flex-wrap items-center">
            {heading.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative font-heebo text-[14px] font-medium tracking-wider uppercase leading-10 mr-[30px] text-[#c0bcca] cursor-pointer`}
              >
                <div className="flex gap-2 items-center">
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
                {selectedId === item.id && (
                  <div
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#c0bcca] transition-all duration-300 transform ${
                      selectedId === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="flex justify-between items-center gap-[50px] z-10 flex-wrap">
            <div className="flex">
              <div className="flex items-center flex-wrap">
                <input
                  type="text"
                  placeholder="Search AI Model"
                  className="my-[5px] mr-[10px] text-[16px] min-w-[220px] tracking-wider py-[10px] px-5 h-10 bg-transparent rounded-[20px] outline-none  transition-all border-2 border-[#312e37] text-[#c0bcca] font-heebo"
                />
                <div className="my-[5px]">
                  <button
                    className="w-fit max-w-full font-medium text-[14px] tracking-wider h-10 px-[34px] uppercase text-center rounded-[20px] whitespace-nowrap outline-none outline-transparent font-heebo border-2 text-[#c0bcca]"
                    style={{
                      borderImage:
                        "linear-gradient(270deg, #8768f8, #b7a4fb, #8768f8, #b7a4fb) 1",
                      borderRadius: "20px",
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="flex my-[5px] gap-1 relative">
              <div className="font-heebo text-base font-normal text-[#7e7a86] break-words">
                <select
                  name=""
                  id=""
                  className="h-10 w-full px-[14px] bg-[#2b2830] border-2 border-transparent rounded-[5px] outline-none text-base text-[#c0bcca] font-heebo"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Buildings">Buildings</option>
                  <option value="Characters">Characters</option>
                  <option value="Environments">Environments</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Illustration">Illustration</option>
                  <option value="Graphical">Graphical</option>
                  <option value="Photography">Photography</option>
                  <option value="Textures">Textures</option>
                </select>
              </div>
              <div
                className="font-heebo text-base font-normal text-[#7e7a86] break-words relative"
                onMouseEnter={() => setIsFilterHovered(true)}
                onMouseLeave={() => setIsFilterHovered(false)}
              >
                <div className="h-10 w-10 rounded-[5px] bg-[#2b2830] flex justify-center items-center text-[#c0bcca] cursor-pointer">
                  <MdOutlineFilterList className="text-xl" />
                </div>
                {isFilterHovered && (
                  <div className="absolute top-full mt-2 right-0 w-[200px] bg-[#2b2830] border border-[#312e37] rounded-[5px] p-4 text-[#c0bcca]">
                    <p>Newest</p>
                    <p>Oldest</p>
                    <p>A - Z</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aimodals;
