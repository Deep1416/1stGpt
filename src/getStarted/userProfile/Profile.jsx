import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi"; // Importing a settings icon
import { Link } from "react-router-dom";

const Profile = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((selected) => selected !== item)
        : [...prevSelected, item]
    );
  };

  const categories = [
    "Advertising",
    "Architecture",
    "Art",
    "Education",
    "Fashion",
    "Film TV",
    "Interior",
    "Marketing",
    "Graphics",
    "Games",
    "Stock Images",
    "Other",
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="py-[34px] px-10 border-b border-b-[#312e37]">
        <h2 className="m-0 p-0 text-[22px] leading-snug font-semibold text-[#c0bcca] font-heebo capitalize">
          User Profile
        </h2>
      </div>
      <div className="max-w-[780px] w-full px-10 py-0 mx-auto my-0">
        <div className="py-10">
          <div className="rounded-[5px] p-[30px] flex items-center mt-[10px] bg-[#17151b] border border-[#312e37] relative mb-[10px]">
            <button className="absolute top-4 right-4 p-2 bg-[#2b2830] rounded-full text-[#c0bcca] hover:bg-[#312e37] transition-colors">
              <FiSettings className="text-xl" />
            </button>
            <div className="w-[200px] max-w-[200px] mr-[30px]">
              <img
                src="/avatr.png"
                alt=""
                className="w-full h-full object-cover rounded-[5px] aspect-square"
              />
            </div>
            <div className="align-baseline">
              <ul className="m-0 p-0 list-none flex flex-wrap -ml-5">
                <li className="my-[15px] mx-0 w-1/2 pl-5">
                  <div className="">
                    <h4 className="m-0 p-0 font-medium tracking-wider text-[11px] uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-[7px] text-[#7e7a86] font-heebo">
                      Name
                    </h4>
                    <h3 className="m-0 p-0 font-normal text-base text-[#c0bcca] font-heebo">
                      {userInfo?.firstname+" " +userInfo?.lastname ?? "N/A"}
                    </h3>
                  </div>
                </li>
                <li className="my-[15px] mx-0 w-1/2 pl-5">
                  <div className="">
                    <h4 className="m-0 p-0 font-medium tracking-wider text-[11px] uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-[7px] text-[#7e7a86] font-heebo">
                      Username
                    </h4>
                    <h3 className="m-0 p-0 font-normal text-base text-[#c0bcca] font-heebo">
                      {userInfo?.username ?? "N/A"}
                    </h3>
                  </div>
                </li>
                <li className="my-[15px] mx-0 w-1/2 pl-5">
                  <div className="">
                    <h4 className="m-0 p-0 font-medium tracking-wider text-[11px] uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-[7px] text-[#7e7a86] font-heebo">
                      Email Address
                    </h4>
                    <h3 className="m-0 p-0 font-normal text-base text-[#c0bcca] font-heebo">
                      {userInfo?.email ?? "N/A"}
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-[5px] flex items-center justify-between mb-[38px] gap-[30px] pt-[38px] pb-[33px] border border-[#312e37] bg-[#17151b] px-[30px]">
            <div className="">
              <h4 className="m-0 p-0 font-medium tracking-wider text-[11px] uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-[7px] text-[#7e7a86] font-heebo">
                YOUR PLAN
              </h4>
              <p className="font-normal text-base text-[#7e7a86] font-heebo">
                <span className="text-[#c0bcca]">Personal Plan</span>- You will
                be given 8000 tokens every month
              </p>
            </div>
            <div>
              <button className="w-fit max-w-full font-medium text-[14px] tracking-wider font-heebo h-10 leading-10 py-0 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-2 border-[#8768f8]">
                Upgrade
              </button>
            </div>
          </div>
          <div className="rounded-[5px] flex items-center justify-between mb-[38px] gap-[30px] pt-[38px] pb-[33px] border border-[#312e37] bg-[#17151b] px-[30px]">
            <div className="">
              <h4 className="m-0 p-0 font-medium tracking-wider text-[11px] uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-[7px] text-[#7e7a86] font-heebo">
                YOUR WORK
              </h4>
              <p className="font-normal text-base text-[#7e7a86] font-heebo">
                <span className="text-[#c0bcca]">Your Creation</span>- You have
                created 1530 images every month
              </p>
            </div>
            <div>
              <button className="w-fit max-w-full font-medium text-[14px] tracking-wider font-heebo h-10 leading-10 py-0 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-2 border-[#8768f8]">
                VIEW YOUR WORK
              </button>
            </div>
          </div>
          <div className="">
            <h4 className="font-normal text-base mb-[14px] font-heebo text-[#c0bcca]">
              What are your interests?
            </h4>
            <div>
              <ul className="flex flex-wrap -ml-[10px] list-none">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="pl-[10px] mb-[10px]"
                    onClick={() => handleItemClick(category)}
                  >
                    <Link
                      className={`bg-[#2b2830] px-5 rounded-[5px] w-fit max-w-full text-[14px] leading-tight h-10 font-heebo uppercase text-center whitespace-nowrap overflow-hidden text-ellipsis text-[#c0bcca] flex justify-center items-center cursor-pointer ${
                        selectedItems.includes(category)
                          ? "border-2 border-[#8768f8]"
                          : "border border-transparent"
                      }`}
                    >
                      <span>{category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
