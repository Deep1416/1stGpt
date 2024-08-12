import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "user", text: "What is chatBot?" },
    {
      type: "bot",
      text: "At the most basic level, a chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person. Chatbots can be as simple as rudimentary programs that answer a simple query with a single-line response, or as sophisticated as digital assistants that learn and evolve to deliver increasing levels of personalization as they gather and process information.",
    },
    { type: "user", text: "How do chatbots work?" },
    {
      type: "bot",
      text: "Chatbots boost operational efficiency and bring cost savings to businesses while offering convenience and added services to internal employees and external customers. They allow companies to easily resolve many types of customer queries and issues while reducing the need for human interaction.",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Get selected model from Redux
  const selectedModel = useSelector((state) => state?.model?.selectedModel);

  // Set a default model name if none is selected
  const defaultModelName = "gpt";
  const modelName = selectedModel?.modelName || defaultModelName;

  const fetchResponse = async (query) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    try {
      const response = await axios.post(
        `http://localhost:4000/v1/ai/${modelName}`,
        { query }, // Send query as JSON
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );
      console.log(response);
      let reply = null
      if(modelName==="lama"){
        reply =response?.data?.text
      }else{
        reply = response?.data?.data?.Output;
      }
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: reply },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: input },
      ]);
      fetchResponse(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="flex flex-col z-10 bg-[#0f0e11] min-h-screen justify-end relative">
        <div className="w-full px-10 my-0 mx-auto text-white">
          <h1 className="text-[22px] font-semibold text-[#c0bcca] font-heebo">
            Chat Bot Definition
          </h1>
          <div className="w-full mt-[20px] mx-auto space-y-5 overflow-y-auto mb-20">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.type === "user"
                    ? "bg-[#2b2830] text-[#c0bcca]"
                    : "bg-[#17151b] text-[#7e7a86] border-[#312e37] border"
                } px-4 py-8 rounded-lg relative mt-3`}
              >
                <div className="flex items-center space-x-2 ">
                  <span
                    className={`${
                      msg.type === "user"
                        ? "bg-[#7C5FE3] text-[#1f1f2e]"
                        : "bg-[#2B2830] text-[#7E7A68]"
                    } px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3`}
                  >
                    {msg.type === "user" ? "YOU" : "BOT"}
                  </span>
                  <span>{msg.text}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      <div className="px-10 rounded-sm sticky z-50 bottom-0 bg-[#0f0e11] flex gap-1 mx-auto p-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Send a message..."
          className="bg-[#1f1f2e] text-white px-4 py-2 w-full rounded outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-[#1f1f2e] text-white px-4 py-2 rounded-r-lg"
        >
          <FiSend size={20} />
        </button>
      </div>
    </>
  );
};

export default ChatBot;
