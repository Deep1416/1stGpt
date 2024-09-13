import axios from "axios";
import React, { useState } from "react";

const Pricing = () => {
 
  const [packageName, setPackageName] = useState("Plan 5");
  const [amount, setAmount] = useState("5");
  const [currency, setCurrency] = useState("USD");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  const handlePayNow = async (PkgName) => {
    setPackageName(PkgName);
    // Update amount based on billing cycle and package name
      if (PkgName === "Plan 5") {
        setAmount("5");
      } else if (PkgName === "Plan 10") {
        setAmount("10");
      } else if(PkgName === "Plan 30"){
        setAmount("30");
      }
    

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      const response = await axios.post(
        "https://free.1stgpt.ai/v1/pay",
        { currency, amount, packageName },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json", // Content-Type for JSON payload
          },
        }
      );

      console.log(response);

      const { links } = response.data.data;
      const approvalUrl = links.find(
        (link) => link.rel === "approval_url"
      ).href;
      window.location.href = approvalUrl;
    } catch (error) {
      setError("Payment initiation failed. Please try again.");
      console.error("Payment initiation error:", error);
    }
  };

  return (
    <div className="pt-[93px] pb-[100px] bg-black">
      <div className="mb-[43px] text-center">
        <div className="w-full max-w-[1400px] px-10 mx-auto">
          <h1 className="font-heebo -mb-[1px] text-[40px] text-[#c0bcca]">
            Simple Pricing, Unbeatable Value
          </h1>
          <p className="text-[18px] font-normal font-heebo text-[#7e7a86]">
            Start small and free, upgrade as you go. Take control of everything.
          </p>
        </div>
      </div>
      <div className="mb-[111px]">
        <div className="w-full max-w-[1400px] px-10 mx-auto">
          <div>
            <div className="border border-[#312e37] bg-[#17151b]">
              <div className="-ml-[1px] flex text-center">
                <div className="w-[50%] max-w-[50%] pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  <h2 className="text-[24px] mb-[10px] font-heebo text-[#c0bcca]">
                    Plan 5
                  </h2>
                  <h3 className="font-heebo text-[14px] font-medium mb-[11px] text-[#c0bcca]">
                    <span className="text-4xl font-medium">$5</span> /month
                  </h3>
                  <div className="text-white mb-10">500 credits</div>
                  <button
                    onClick={() => handlePayNow("Plan 5")}
                    className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                  >
                    Buy Personal
                  </button>
                </div>
                <div className="w-[50%] max-w-[50%] pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  <h2 className="text-[24px] mb-[10px] font-heebo text-[#c0bcca]">
                    Plan 10
                  </h2>
                  <h3 className="font-heebo text-[14px] font-medium mb-[11px] text-[#c0bcca]">
                    <span className="text-4xl font-medium">$10</span> /month
                  </h3>
                  <div className="text-white mb-10">1000 credits</div>
                  <button
                    onClick={() => handlePayNow("Plan 10")}
                    className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                  >
                    Buy Premium
                  </button>
                </div>
                <div className="w-[50%] max-w-[50%] pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  <h2 className="text-[24px] mb-[10px] font-heebo text-[#c0bcca]">
                    Plan 30
                  </h2>
                  <h3 className="font-heebo text-[14px] font-medium mb-[11px] text-[#c0bcca]">
                    <span className="text-4xl font-medium">$30</span> /month
                  </h3>
                  <div className="text-white mb-10">5000 credits</div>
                  <button
                    onClick={() => handlePayNow("Plan 30")}
                    className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                  >
                    Buy Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
