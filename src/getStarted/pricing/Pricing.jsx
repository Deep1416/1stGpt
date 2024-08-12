import axios from "axios";
import React, { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [packageName, setPackageName] = useState("Personal");
  const [amount, setAmount] = useState("15");
  const [currency, setCurrency] = useState("USD");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  const handlePayNow = async (PkgName) => {
    setPackageName(PkgName);

    // Update amount based on billing cycle and package name
    if (billingCycle === "yearly") {
      if (PkgName === "Personal") {
        setAmount("15");
      } else if (PkgName === "Premium") {
        setAmount("20");
      } else {
        setAmount("30");
      }
    } else {
      if (PkgName === "Personal") {
        setAmount("20");
      } else if (PkgName === "Premium") {
        setAmount("25");
      } else {
        setAmount("35");
      }
    }

    // console.log(amount, packageName);

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      const response = await axios.post(
        "http://localhost:4000/v1/pay",
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

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
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
          <div className="flex justify-center items-center mb-10">
            <div className="border border-[#312e37] rounded-[60px] p-[9px] flex">
              <div
                className={`h-10 px-[35px] text-[14px] font-medium uppercase z-10 font-heebo leading-10 cursor-pointer rounded-[20px] ${
                  billingCycle === "yearly"
                    ? "bg-[#8768f8] text-[#ffffff]"
                    : "text-[#c0bcca]"
                }`}
                onClick={() => handleBillingCycleChange("yearly")}
              >
                Yearly
              </div>
              <div
                className={`h-10 px-[35px] text-[14px] font-medium uppercase z-10 font-heebo leading-10 cursor-pointer rounded-[20px] ${
                  billingCycle === "monthly"
                    ? "bg-[#8768f8] text-[#ffffff]"
                    : "text-[#c0bcca]"
                }`}
                onClick={() => handleBillingCycleChange("monthly")}
              >
                Monthly
              </div>
            </div>
          </div>
          <div>
            <div className=" border border-[#312e37] bg-[#17151b]">
              <div className="-ml-[1px] flex text-center">
                <div className="w-[31%] max-w-[31%] text-left pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  {/* Add some content or a logo here */}
                </div>
                <div className="w-[23%] max-w-[23%] pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  <h2 className="text-[24px] mb-[10px] font-heebo text-[#c0bcca]">
                    Personal
                  </h2>
                  <h3 className="font-heebo text-[14px] font-medium mb-[11px] text-[#c0bcca]">
                    <span className="text-4xl font-medium">
                      ${billingCycle === "yearly" ? "15" : "20"}
                    </span>{" "}
                    /month
                  </h3>
                  <p className="text-[14px] font-normal mb-[24px] font-heebo text-[#7e7a86]">
                    {billingCycle === "yearly"
                      ? "billed yearly"
                      : "billed monthly"}{" "}
                    <br />{" "}
                    <span className="text-[#c0bcca]">
                      ${billingCycle === "yearly" ? "180.00" : "240.00"}
                    </span>{" "}
                    total
                  </p>
                  <button
                    onClick={() => handlePayNow("Personal")}
                    className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                  >
                    Buy Personal
                  </button>
                </div>
                <div className="w-[23%] max-w-[23%] pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  <h2 className="text-[24px] mb-[10px] font-heebo text-[#c0bcca]">
                    Premium
                  </h2>
                  <h3 className="font-heebo text-[14px] font-medium mb-[11px] text-[#c0bcca]">
                    <span className="text-4xl font-medium">
                      ${billingCycle === "yearly" ? "20" : "25"}
                    </span>{" "}
                    /month
                  </h3>
                  <p className="text-[14px] font-normal mb-[24px] font-heebo text-[#7e7a86]">
                    {billingCycle === "yearly"
                      ? "billed yearly"
                      : "billed monthly"}{" "}
                    <br />{" "}
                    <span className="text-[#c0bcca]">
                      ${billingCycle === "yearly" ? "240.00" : "300.00"}
                    </span>{" "}
                    total
                  </p>
                  <button
                    onClick={() => handlePayNow("Premium")}
                    className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                  >
                    Buy Premium
                  </button>
                </div>
                <div className="w-[23%] max-w-[23%] pt-[35px] pb-10 px-[30px] border-l border-[#312e37]">
                  <h2 className="text-[24px] mb-[10px] font-heebo text-[#c0bcca]">
                    Enterprise
                  </h2>
                  <h3 className="font-heebo text-[14px] font-medium mb-[11px] text-[#c0bcca]">
                    <span className="text-4xl font-medium">
                      ${billingCycle === "yearly" ? "30" : "35"}
                    </span>{" "}
                    /month
                  </h3>
                  <p className="text-[14px] font-normal mb-[24px] font-heebo text-[#7e7a86]">
                    {billingCycle === "yearly"
                      ? "billed yearly"
                      : "billed monthly"}{" "}
                    <br />{" "}
                    <span className="text-[#c0bcca]">
                      ${billingCycle === "yearly" ? "360.00" : "420.00"}
                    </span>{" "}
                    total
                  </p>
                  <button
                    onClick={() => handlePayNow("Enterprise")}
                    className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                  >
                    Buy Enterprise
                  </button>
                </div>
              </div>
              <div className="flex bg-[#2b2830]">
                <div className="w-[31%] max-w-[31%] h-[54px] flex items-center px-[30px]">
                  <span className="text-[14px] font-medium tracking-wider uppercase font-heebo text-[#c0bcca]">
                    Main Features
                  </span>
                </div>
                {/* <div className="w-[69%] max-w-[69%] h-[54px] flex items-center px-[30px] after:left-[30px] after:right-[30px] after:absolute after:h-1 after:rounded-[5px] after:-mt-[2px] after:bg-[#0f0e11]">

                </div> */}
              </div>
            </div>
          </div>
          <div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className="pt-[35px] w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Tokens per month
                </span>
              </div>
              <div className="pt-[35px] w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  5,500
                </span>
              </div>
              <div className="pt-[35px] w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  12,500
                </span>
              </div>
              <div className="pt-[35px] w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  20,000
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Upscales per month
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  1,500
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  3,500
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  7,000
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Background removals
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  4,000
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  8,000
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  15,000
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Pending jobs
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Private generations
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Priority infrastructure
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  -
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Relaxed generation
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  -
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  -
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="flex bg-[#2b2830]">
            <div className="w-[31%] max-w-[31%] h-[54px] flex items-center px-[30px]">
              <span className="text-[14px] font-medium tracking-wider uppercase font-heebo text-[#c0bcca]">
                Other Features
              </span>
            </div>
            {/* <div className="w-[69%] max-w-[69%] h-[54px] flex items-center px-[30px] after:left-[30px] after:right-[30px] after:absolute after:h-1 after:rounded-[5px] after:-mt-[2px] after:bg-[#0f0e11]">

                </div> */}
          </div>
          <div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className="pt-[35px] w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Essential SRBThemes models
                </span>
              </div>
              <div className="pt-[35px] w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className="pt-[35px] w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className="pt-[35px] w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Expanded SRBThemes models
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Community models
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  -
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
            <div className="-ml-[1px] flex text-center bg-[#17151b] ">
              <div className=" w-[31%] max-w-[31%] text-left justify-start px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  Custom Model
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  -
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  -
                </span>
              </div>
              <div className=" w-[23%] max-w-[23%] text-center justify-center px-[30px] py-[10px] leading-snug flex items-center border-l border-l-[#312e37]">
                <span className="text-[16px] tracking-wider font-medium font-heebo text-[#c0bcca]">
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="border border-[#312e37] bg-[#17151b]">
            <div className="-ml-[1px] flex items-center">
              <div className="w-[31%] max-w-[31%] px-10 py-[30px] border-l border-l-[#312e37]"></div>
              <div className="text-center w-[23%] max-w-[23%] px-10 py-[30px] border-l border-l-[#312e37]">
                <button
                  onClick={() => handlePayNow("Personal")}
                  className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                >
                  Buy Personal
                </button>{" "}
              </div>
              <div className="text-center w-[23%] max-w-[23%] px-10 py-[30px] border-l border-l-[#312e37]">
                <button
                  onClick={() => handlePayNow("Premium")}
                  className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                >
                  Buy Premium
                </button>{" "}
              </div>
              <div className="text-center w-[23%] max-w-[23%] px-10 py-[30px] border-l border-l-[#312e37]">
                <button
                  onClick={() => handlePayNow("Premium")}
                  className="w-full max-w-full font-semibold text-[14px] tracking-wider font-heebo h-10 leading-10 px-[34px] uppercase text-center whitespace-nowrap rounded-[20px] overflow-hidden text-ellipsis bg-[#1c1925] text-[#c0bcca] border-[#8768f8] border-2"
                >
                  Buy Enterprice
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
