import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCoins, deductCoin } from "./../../redux/addSlice";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import { marked } from "marked";
import DOMPurify from 'dompurify'; // To sanitize HTML content

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "user", text: "What is chatBot?" },
    {
      type: "bot",
      text: "At the most basic level, a chatbot is a computer program that simulates and processes human conversation...",
    },
    { type: "user", text: "How do chatbots work?" },
    {
      type: "bot",
      text: "Chatbots boost operational efficiency and bring cost savings...",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // const [showPopup, setShowPopup] = useState(false); // State for the popup
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();
  const selectedModel = useSelector((state) => state?.model?.selectedModel);
  const defaultModelName = "gpt";
  const modelName = selectedModel?.modelName || defaultModelName;
  const coins = useSelector((state) => state?.data?.coinBalance);
  
  const fetchResponse = async (query) => {
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `https://freedomgpt-xn47.onrender.com/v1/ai/${modelName}`,
        { query },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      let reply = null;
      if (modelName === "lama") {
        reply = response?.data?.text;
      } else {
        reply = response?.data?.data?.Output;
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: reply },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "Sorry, I couldn't fetch a response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCoin = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`https://freedomgpt-xn47.onrender.com/v1/user/token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(addCoins(response?.data?.data?.Credit));
    } catch (error) {
      console.log("from coin endpoint", error);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      if (coins <= 0) {
        setShowPopup(true); // Show popup if credits are insufficient
        return;
      }
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: input },
      ]);
      setInput("");
      await fetchCoin(); // Ensure fetchCoin completes before fetching response
      await fetchResponse(input);
      if (coins > 0) {
        if(modelName==='lama'){
          dispatch(deductCoin(8));
        }else if(modelName==='gpt'){
          dispatch(deductCoin(4));
        }else {
          dispatch(deductCoin(1)); // Deduct 1 coin after fetching the response
        }
        }
       

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

  const renderMessage = (msg, index) => {
    // Check if the message contains code blocks denoted by triple backticks
    const codeBlockMatch = msg.text.match(/```(\w+)?\n([\s\S]*?)```/);

    if (codeBlockMatch) {
      const language = codeBlockMatch[1] || "javascript"; // Get language or default to javascript
      const codeText = codeBlockMatch[2]; // Extract the code between the backticks

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#17151b] text-[#7e7a86] border-[#312e37] border px-4 py-8 rounded-lg relative mt-3"
        >
          <span className="bg-[#2B2830] text-[#7E7A68] px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3">
            BOT
          </span>
          <SyntaxHighlighter language={language} style={materialDark}>
            {codeText}
          </SyntaxHighlighter>
          <CopyToClipboard text={codeText}>
            <button className="text-sm text-blue-500 mt-2">Copy Code</button>
          </CopyToClipboard>
        </motion.div>
      );
    }

    // Convert Markdown to HTML
    const markdownText = marked.parse(msg.text);
    const sanitizedText = DOMPurify.sanitize(markdownText);

    // If no code block is detected, render as a normal message
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          msg.type === "user"
            ? "bg-[#2b2830] text-[#c0bcca]"
            : "bg-[#17151b] text-[#7e7a86] border-[#312e37] border"
        } px-4 py-8 rounded-lg relative mt-3`}
      >
        <span
          className={`${
            msg.type === "user"
              ? "bg-[#7C5FE3] text-[#1f1f2e]"
              : "bg-[#2B2830] text-[#7E7A68]"
          } px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3`}
        >
          {msg.type === "user" ? "YOU" : "BOT"}
        </span>
        <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />
      </motion.div>
    );
  };

  return (
    <>
      <div className="flex flex-col z-10 bg-[#0f0e11] min-h-screen justify-end relative">
        <div className="w-full px-10 my-0 mx-auto text-white">
          <h1 className="text-[22px] font-semibold text-[#c0bcca] font-heebo">
            Chat Bot Definition
          </h1>
          <div className="w-full mt-[20px] mx-auto space-y-5 overflow-y-auto mb-20">
            {messages.map((msg, index) => renderMessage(msg, index))}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-[#7e7a86] py-8"
              >
                ...loading
              </motion.div>
            )}
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
          className="bg-[#1f1f2e] text-white px-4 py-2 rounded-r-lg flex items-center gap-2"
        >
          <FiSend size={20} />
          <div className="text-[10px]">{coins} Credits</div>
        </button>
      </div>
      {/* Popup for insufficient credits */}
      {/* {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg relative max-w-sm mx-auto">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX size={20} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800">
              Insufficient Credits
            </h2>
            <p className="mt-2 text-gray-600">
              You need more credits to send a message. Please add credits to continue.
            </p>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ChatBot;

