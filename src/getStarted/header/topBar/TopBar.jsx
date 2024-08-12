import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {
  IoShareSocialOutline,
  IoSearchOutline,
  IoNotificationsOutline,
  IoLanguage,
} from "react-icons/io5";
import { RiFullscreenFill } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectModel } from "../../../redux/modelSlice";

const Topbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedModel, setSelectedModel] = useState("Liberty"); // State to hold the selected model
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {coinBalance} = useSelector(store=>store?.coins)
  console.log(coinBalance);
  

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleProfilePopupToggle = () => {
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  const handleModelClick = (modelName, credits) => {
    setSelectedModel(modelName); // Update the state with the selected model name
    dispatch(selectModel({ modelName, credits })); // Dispatch the selected model with its credits
    setIsPopupVisible(false); // Close the modal after selecting
  };

  return (
    <>
      <div className="">
        <div className="flex gap-5 justify-evenly items-center flex-grow">
          <div className="font-heebo text-black">
            <div className="flex gap-1 items-center w-full text-center rounded-[5px] bg-[#2b2830] py-[5px] pr-2">
              <span className="inline-block w-[50%] text-[#c0bcca]">
                {coinBalance}
              </span>
              <div className="h-6 w-[1px] bg-[#413e45]"></div>
              <span className="inline-block w-[50%] text-[12px] text-[#7e7a86]">
                Credit Remain
              </span>
            </div>
          </div>
          <div className="font-heebo">
            <Link to={"/get/pricing"}>
              <button className="w-fit max-w-full font-medium text-[14px] tracking-wider h-10 px-[34px] uppercase text-center whitespace-nowrap outline-none outline-transparent font-heebo border-2 text-[#c0bcca] border-[#8768f8] rounded-full ">
                Upgrade
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex relative" onClick={handlePopupToggle}>
        <div className="uppercase text-black flex cursor-pointer items-center gap-2 px-2 py-1 border rounded-l-md bg-white">
          <span className="inline-block text-[10px] font-heebo text-[#212529]">
            Selected Model
          </span>
        </div>
        <div>
          <span className="uppercase text-[#6c757d] font-semibold flex cursor-pointer items-center gap-2 px-2 py-1 border-white border rounded-r-md">
            <span>{selectedModel}</span> {/* Display the selected model name */}
            {isPopupVisible ? (
              <FaCaretUp className="text-[15px]" />
            ) : (
              <FaCaretDown className="text-[15px]" />
            )}
          </span>
        </div>
        {isPopupVisible && (
          <div className="absolute top-[60px] -right-48 mt-2 mx-auto bg-[#2B2830] text-[#b8b5ac] rounded-lg shadow-lg z-50 w-[700px]">
            <section className="flex flex-col gap-2 p-4 ">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Favorite Models</div>
                <div>11 models</div>
              </div>
              <hr />
              <article
                className="p-2 cursor-pointer"
                onClick={() => handleModelClick("gpt", 10)}
              >
                <h2 className="text-xl font-bold">Gpt-4 omi</h2>
                <p>
                  <span>10</span> credits/message
                </p>
              </article>
              <hr />
              <article
                className="p-2 cursor-pointer"
                onClick={() => handleModelClick("lama", 10)}
              >
                <h2>Groq Llama3 70B</h2>
                <p>
                  <span>10</span> credits/message
                </p>
              </article>
              <hr />
              <article
                className="p-2 cursor-pointer"
                onClick={() => handleModelClick("gemini", 10)}
              >
                <h2>Google Gemini</h2>
                <p>
                  <span>10</span> credits/message
                </p>
              </article>
              <hr />
              <article
                className="p-2 cursor-pointer"
                onClick={() => handleModelClick("gptmini", 10)}
              >
                <h2>Gpt 3.5</h2>
                <p>
                  <span>10</span> credits/message
                </p>
              </article>
            </section>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-3 flex-wrap gap-1 flex-shrink-0">
        <button
          className="bg-[#2b2830] hover:bg-gray-800 p-3 rounded-lg focus:outline-none transition-colors relative"
          onClick={handleProfilePopupToggle}
        >
          <img src="/avatr.png" alt="" className="h-10 w-10" />
          {isProfilePopupVisible && (
            <div className="absolute right-0 top-12 mt-2 w-56 bg-[#17151b] text-[#7e7a86] rounded-lg shadow-lg z-50 p-4">
              <div className="flex items-center mb-4">
                <img
                  src="/avatr.png" // Replace with the actual path to profile image
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-bold">
                    {userInfo?.firstname + " " + userInfo?.lastname ?? "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {userInfo?.email ?? "N/A"}
                  </p>
                </div>
              </div>
              <Link to={"/get/profile"}>
                <button className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
                  Profile
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded"
              >
                Log Out
              </button>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default Topbar;
