import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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

  const fetchResponse = async (query) => {
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", {
        prompt: query,
        // Add other necessary parameters for your API
      });
      const reply = response.data.reply; // Adjust based on your API response format
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
    <div className="pt-[38px] flex flex-col z-10 bg-[#1f1f2e] min-h-screen justify-end">
      <div className=" w-full px-10 my-0 mx-auto text-white ">
        <h1 className="mb-[23px] text-[22px] font-semibold text-[#c0bcca] font-heebo">
          Chat Bot Definition
        </h1>
        <div className="w-full max-w-[1400px] px-10 mx-auto space-y-4 overflow-y-auto mb-20">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`bg-[#2d2d3d] p-4 rounded-lg ${
                msg.type === "user" ? "self-end" : "self-start"
              }`}
            >
              <div className="flex items-center space-x-2">
                <span
                  className={`${
                    msg.type === "user"
                      ? "bg-[#7966e4] text-[#1f1f2e]"
                      : "bg-[#464657] text-[#2d2d3d]"
                  } px-3 py-1 rounded-full font-bold`}
                >
                  {msg.type === "user" ? "YOU" : "BOT"}
                </span>
                <span className="text-lg font-medium">{msg.text}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className=" px-10 rounded-lg flex items-center fixed bottom-0 w-full max-w-[1400px] mx-auto left-0 right-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Send a message..."
            className="bg-[#1f1f2e] text-white px-4 py-2 w-full rounded-l-lg outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-[#7966e4] text-white px-4 py-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
