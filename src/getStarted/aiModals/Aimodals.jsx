import React, { useState, useEffect } from "react";
import { BsJournalText } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegImage, FaBookmark } from "react-icons/fa";
import { BsFileImage } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { BsFileMusic } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";
import aiModals from "./../../store/aiModals"; // Adjust the import path as needed
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const heading = [
  { id: 1, icon: <IoCubeOutline />, title: "All Models" },
  { id: 2, icon: <BsJournalText />, title: "TEXT GENERATION" },
  { id: 3, icon: <FaRegImage />, title: "TEXT TO IMAGE" },
  { id: 4, icon: <BsFileImage />, title: "IMAGE TO TEXT" },
  { id: 5, icon: <BsFileImage />, title: "IMAGE TO IMAGE" },
  { id: 6, icon: <IoVideocamOutline />, title: "TEXT TO VIDEO" },
  { id: 7, icon: <LuPhone />, title: "PHONE CALL" },
  { id: 8, icon: <BsFileMusic />, title: "MUSIC MODELS" },
];

const additionalImages = [
  { id: 1, img: "/path/to/additional-image1.jpg", title: "Additional Image 1", disc: "Description for additional image 1" },
  { id: 2, img: "/path/to/additional-image2.jpg", title: "Additional Image 2", disc: "Description for additional image 2" },
  // Add more images as needed
];

const Aimodals = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [isFilterHovered, setIsFilterHovered] = useState(false);
  const [filteredModals, setFilteredModals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

  useEffect(() => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      if (selectedId === 1) {
        setFilteredModals(aiModals);
      } else {
        const selectedHeading = heading.find((item) => item.id === selectedId);
        const filtered = aiModals.filter((modal) =>
          modal.categories.includes(selectedHeading.title)
        );
        setFilteredModals(filtered);
      }
      setLoading(false);
    }, 500);
  }, [selectedId]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const handleBookmark = (id) => {
    setBookmarkedItems((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(id)) {
        newBookmarks.delete(id);
      } else {
        newBookmarks.add(id);
      }
      return newBookmarks;
    });
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
                  <div className="absolute top-full mt-2 right-0 w-[200px] bg-[#2b2830] border border-[#312e37] rounded-[5px] p-4 text-[#c0bcca] z-50">
                    <p>Newest</p>
                    <p>Oldest</p>
                    <p>A - Z</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="loader text-white">Loading...</div>
          </div>
        ) : (
          <div>
            <div className="m-0 flex flex-wrap -ml-5">
              {filteredModals.map((item) => (
                <div key={item.id} className="w-[25%] pl-5 mb-5">
                  <div className="border border-[#312e37] bg-[#17151b] rounded-[5px] min-h-full rounded-tl-[5px] rounded-tr-[5px] relative group">
                    <div className="-m-[1px] relative mb-0 rounded-tl-[5px] rounded-tr-[5px]">
                      <img
                        src={item.img}
                        alt=""
                        className="h-[40vh] w-full object-cover rounded-tl-[5px] rounded-tr-[5px] max-w-full"
                      />
                      <div
                        className="absolute top-2 right-2 p-2 bg-[#2b2830] rounded-full text-[#c0bcca] cursor-pointer group-hover:block hidden"
                        onClick={() => handleBookmark(item.id)}
                      >
                        {bookmarkedItems.has(item.id) ? (
                          <FaBookmark className="text-xl" />
                        ) : (
                          <FaRegBookmark className="text-xl" />
                        )}
                      </div>
                    </div>
                    <div className="pt-[18px] px-[15px] pb-[14px]">
                      <h3 className="text-base font-medium font-heebo mb-[5px] text-[#17151b]">
                        {item.title}
                      </h3>
                      <p
                        className="text-[14px] font-medium font-heebo text-[#7e7a86]"
                        style={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          lineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.disc}
                      </p>
                    </div>
                   <Link to={"/get"}>
                      <div className="h-[41px] py-[10px] px-[15px] flex justify-center items-center border border-[#312e37]">
                          <p className="text-[#7e7a86]">Try Now</p>
                      </div>
                   </Link>
                  </div>
                </div>
              ))}
            </div>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Aimodals;
