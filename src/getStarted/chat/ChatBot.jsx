// import React, { useState, useRef, useEffect } from "react";
// import { FiSend, FiX, FiUpload } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { addCoins, deductCoin } from "./../../redux/addSlice";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { motion } from "framer-motion";
// import { marked } from "marked";
// import DOMPurify from 'dompurify';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // To sanitize HTML content

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { type: "user", text: "What is chatBot?" },
//     {
//       type: "bot",
//       text: "At the most basic level, a chatbot is a computer program that simulates and processes human conversation...",
//     },
//     { type: "user", text: "How do chatbots work?" },
//     {
//       type: "bot",
//       text: "Chatbots boost operational efficiency and bring cost savings...",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [file, setFile] = useState(null); // State to store the selected file
//   const messagesEndRef = useRef(null);
//   const dispatch = useDispatch();
//   const selectedModel = useSelector((state) => state?.model?.selectedModel);
//   const defaultModelName = "gpt";
//   const modelName = selectedModel?.modelName || defaultModelName;
//   const coins = useSelector((state) => state?.data?.coinBalance);
//   const [showPopup, setShowPopup] = useState('');

//   const fetchResponse = async (query) => {
//     setLoading(true);
//     const token = localStorage.getItem("token");

//     try {
//       const formData = new FormData();
//       formData.append("query", query);
//       if (modelName === "gemini" && file) {
//         formData.append("file", file);
//       }

//       const response = await axios.post(
//         `https://free.1stgpt.ai/v1/ai/${modelName}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Check if the response indicates insufficient credits
//       if (response?.data?.statusCode === 403 && response?.data?.message === "Insufficient credits") {
//         toast.error("Insufficient credits. Please recharge.");
//         return;
//       }

//       // Check for invalid signature error
//       if (response?.data?.success === false && response?.data?.error === "invalid signature") {
//         toast.error("Invalid signature. Please log in again.");
//         return;
//       }

//       let reply = null;
//       if (modelName === "lama") {
//         reply = response?.data?.text;
//       } else {
//         reply = response?.data?.data?.Output;
//       }

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: reply },
//       ]);
//     } catch (error) {
//       console.error("Error fetching response:", error);

//       // Displaying the exact error in a toast
//       const errorMessage = error?.response?.data?.message || error.message || "An error occurred while fetching the response.";
//       toast.error(`Error: ${errorMessage}`);

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: "Sorry, I couldn't fetch a response." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCoin = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.get(`https://free.1stgpt.ai/v1/user/token`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       dispatch(addCoins(response?.data?.data?.Credit));
//     } catch (error) {
//       console.log("Error fetching coin balance:", error);

//       const errorMessage = error?.response?.data?.message || error.message || "An error occurred while fetching coin balance.";
//       toast.error(`Coin Fetch Error: ${errorMessage}`);
//     }
//   };

//   const handleSend = async () => {
//     if (input.trim()) {
//       if (coins <= 0) {
//         setShowPopup(true); // Show popup if credits are insufficient
//         return;
//       }

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "user", text: input },
//       ]);
//       setInput("");
//       await fetchCoin(); // Ensure fetchCoin completes before fetching response
//       await fetchResponse(input);

//       if (coins > 0) {
//         if (modelName === 'lama') {
//           dispatch(deductCoin(8));
//         } else if (modelName === 'gpt') {
//           dispatch(deductCoin(4));
//         } else if (modelName === 'gemini') {
//           dispatch(deductCoin(10)); // Deduct 10 coins for gemini
//         } else {
//           dispatch(deductCoin(1)); // Deduct 1 coin after fetching the response
//         }
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const renderMessage = (msg, index) => {
//     // Check if the message contains code blocks denoted by triple backticks
//     const codeBlockMatch = msg.text.match(/```(\w+)?\n([\s\S]*?)```/);

//     if (codeBlockMatch) {
//       const language = codeBlockMatch[1] || "javascript"; // Get language or default to javascript
//       const codeText = codeBlockMatch[2]; // Extract the code between the backticks

//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="bg-[#17151b] text-[#7e7a86] border-[#312e37] border px-4 py-8 rounded-lg relative mt-3"
//         >
//           <span className="bg-[#2B2830] text-[#7E7A68] px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3">
//             BOT
//           </span>
//           <SyntaxHighlighter language={language} style={materialDark}>
//             {codeText}
//           </SyntaxHighlighter>
//           <CopyToClipboard text={codeText}>
//             <button className="text-sm text-blue-500 mt-2">Copy Code</button>
//           </CopyToClipboard>
//         </motion.div>
//       );
//     }

//     // Convert Markdown to HTML
//     const markdownText = marked.parse(msg.text);
//     const sanitizedText = DOMPurify.sanitize(markdownText);

//     // If no code block is detected, render as a normal message
//     return (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className={`${
//           msg.type === "user"
//             ? "bg-[#2b2830] text-[#c0bcca]"
//             : "bg-[#17151b] text-[#7e7a86] border-[#312e37] border"
//         } px-4 py-8 rounded-lg relative mt-3`}
//       >
//         <span
//           className={`${
//             msg.type === "user"
//               ? "bg-[#7C5FE3] text-[#1f1f2e]"
//               : "bg-[#2B2830] text-[#7E7A68]"
//           } px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3`}
//         >
//           {msg.type === "user" ? "YOU" : "BOT"}
//         </span>
//         <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />
//       </motion.div>
//     );
//   };

//   return (
//     <>
//       <div className="flex flex-col z-10 bg-[#0f0e11] min-h-screen justify-end relative">
//         <div className="w-full px-10 my-0 mx-auto text-white">
//           <h1 className="text-[22px] font-semibold text-[#c0bcca] font-heebo">
//             Chat Bot Definition
//           </h1>
//           <div className="w-full mt-[20px] mx-auto space-y-5 overflow-y-auto mb-20">
//             {messages.map((msg, index) => renderMessage(msg, index))}
//             {loading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-[#17151b] text-[#7e7a86] border-[#312e37] border px-4 py-8 rounded-lg relative mt-3"
//               >
//                 <span className="bg-[#2B2830] text-[#7E7A68] px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3">
//                   BOT
//                 </span>
//                 <p className="text-[#7e7a86]">...loading</p>
//               </motion.div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="flex justify-between items-center w-full py-3 border-t border-[#2b2830] bg-[#0f0e11] absolute bottom-0 left-0">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={handleKeyPress}
//               className="w-full text-white bg-[#17151b] px-3 py-2 border border-[#2b2830] rounded-md focus:outline-none"
//               placeholder="Enter a message..."
//             />

//             <button
//               className="ml-2 bg-[#7c5fe3] text-white px-4 py-2 rounded-md hover:bg-[#6b4edc] focus:outline-none"
//               onClick={handleSend}
//               disabled={loading}
//             >
//               {loading ? "Loading..." : <FiSend />}
//             </button>

//             {/* Show file upload button when modelName is 'gemini' */}
//             {modelName === "gemini" && (
//               <label
//                 htmlFor="file-upload"
//                 className="ml-2 cursor-pointer text-white px-4 py-2 rounded-md bg-[#6b4edc] hover:bg-[#5a3dbd] flex items-center"
//               >
//                 <FiUpload className="mr-2" />
//                 Upload File
//                 <input
//                   id="file-upload"
//                   type="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   className="hidden"
//                 />
//               </label>
//             )}
//           </div>
//         </div>

//         {/* Insufficient Credits Popup */}
//         {showPopup && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
//           >
//             <div className="bg-white text-black p-6 rounded-lg shadow-lg relative">
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               >
//                 <FiX />
//               </button>
//               <p className="text-lg">Insufficient credits</p>
//             </div>
//           </motion.div>
//         )}
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   );
// };

// export default ChatBot;

// ------------------------------2nd code ---------------------------------------------
// import React, { useState, useRef, useEffect } from "react";
// import { FiSend, FiX, FiUpload } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { addCoins, deductCoin } from "./../../redux/addSlice";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { motion } from "framer-motion";
// import { marked } from "marked";
// import DOMPurify from 'dompurify'; // To sanitize HTML content

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { type: "user", text: "What is chatBot?" },
//     {
//       type: "bot",
//       text: "At the most basic level, a chatbot is a computer program that simulates and processes human conversation...",
//     },
//     { type: "user", text: "How do chatbots work?" },
//     {
//       type: "bot",
//       text: "Chatbots boost operational efficiency and bring cost savings...",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [file, setFile] = useState(null); // State to store the selected file
//   const messagesEndRef = useRef(null);
//   const dispatch = useDispatch();
//   const selectedModel = useSelector((state) => state?.model?.selectedModel);
//   const defaultModelName = "gpt";
//   const modelName = selectedModel?.modelName || defaultModelName;
//   const coins = useSelector((state) => state?.data?.coinBalance);
//   const [showPopup, setShowPopup]= useState('')

//   const fetchResponseold = async (query) => {
//     setLoading(true);
//     const token = localStorage.getItem("token");

//     try {
//       const formData = new FormData();
//       formData.append("query", query);
//       if (modelName === "gemini" && file) {
//         formData.append("file", file);
//       }

//       const response = await axios.post(
//         `https://free.1stgpt.ai/v1/ai/${modelName}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );


//         // Check if the response indicates insufficient credits
//       if (response?.data?.statusCode === 403 && response?.data?.message === "Insufficient credits") {
//         toast.error("Insufficient credits. Please recharge.");
//         return;
//       }

//       // Check for invalid signature error
//       if (response?.data?.success === false && response?.data?.error === "invalid signature") {
//         toast.error("Invalid signature. Please log in again.");
//         return;
//       }

//       let reply = null;
//       if (modelName === "lama") {
//         reply = response?.data?.text;
//       } else {
//         reply = response?.data?.data?.Output;
//       }

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: reply },
//       ]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: "Sorry, I couldn't fetch a response." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchResponse = async (query) => {
//     setLoading(true);
//     const token = localStorage.getItem("token");
  
//     try {
//       const formData = new FormData();
//       formData.append("query", query);
//       if (modelName === "gemini" && file) {
//         formData.append("file", file);
//       }
  
//       const response = await axios.post(
//         `https://free.1stgpt.ai/v1/ai/${modelName}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
  
//       // Check if the response indicates insufficient credits
//       if (response?.data?.statusCode === 403 && response?.data?.message === "Insufficient credits") {
//         toast.error("Insufficient credits. Please recharge.");
//         return;
//       }
  
//       // Check for invalid signature error
//       if (response?.data?.success === false && response?.data?.error === "invalid signature") {
//         toast.error("Invalid signature. Please log in again.");
//         return;
//       }
  
//       let reply = null;
//       if (modelName === "lama") {
//         reply = response?.data?.text;
//       } else {
//         reply = response?.data?.data?.Output;
//       }
  
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: reply },
//       ]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
  
//       // Show toast on error with proper message
//       toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
  
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: "Sorry, I couldn't fetch a response." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const fetchCoin = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.get(`https://free.1stgpt.ai/v1/user/token`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       dispatch(addCoins(response?.data?.data?.Credit));
//     } catch (error) {
//       console.log("from coin endpoint", error);
//     }
//   };

//   const handleSend = async () => {
//     if (input.trim()) {
//       if (coins <= 0) {
//         setShowPopup(true); // Show popup if credits are insufficient
//         return;
//       }
      
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "user", text: input },
//       ]);
//       setInput("");
//       await fetchCoin(); // Ensure fetchCoin completes before fetching response
//       await fetchResponse(input);
//       if (coins > 0) {
//         if(modelName==='lama'){
//           dispatch(deductCoin(8));
//         }else if(modelName==='gpt'){
//           dispatch(deductCoin(4));
//         }else if(modelName==='gemini'){
//           dispatch(deductCoin(10)); // Deduct 10 coins for gemini
//         }else {
//           dispatch(deductCoin(1)); // Deduct 1 coin after fetching the response
//         }
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const renderMessage = (msg, index) => {
//     // Check if the message contains code blocks denoted by triple backticks
//     const codeBlockMatch = msg.text.match(/```(\w+)?\n([\s\S]*?)```/);

//     if (codeBlockMatch) {
//       const language = codeBlockMatch[1] || "javascript"; // Get language or default to javascript
//       const codeText = codeBlockMatch[2]; // Extract the code between the backticks

//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="bg-[#17151b] text-[#7e7a86] border-[#312e37] border px-4 py-8 rounded-lg relative mt-3"
//         >
//           <span className="bg-[#2B2830] text-[#7E7A68] px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3">
//             BOT
//           </span>
//           <SyntaxHighlighter language={language} style={materialDark}>
//             {codeText}
//           </SyntaxHighlighter>
//           <CopyToClipboard text={codeText}>
//             <button className="text-sm text-blue-500 mt-2">Copy Code</button>
//           </CopyToClipboard>
//         </motion.div>
//       );
//     }

//     // Convert Markdown to HTML
//     const markdownText = marked.parse(msg.text);
//     const sanitizedText = DOMPurify.sanitize(markdownText);

//     // If no code block is detected, render as a normal message
//     return (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className={`${
//           msg.type === "user"
//             ? "bg-[#2b2830] text-[#c0bcca]"
//             : "bg-[#17151b] text-[#7e7a86] border-[#312e37] border"
//         } px-4 py-8 rounded-lg relative mt-3`}
//       >
//         <span
//           className={`${
//             msg.type === "user"
//               ? "bg-[#7C5FE3] text-[#1f1f2e]"
//               : "bg-[#2B2830] text-[#7E7A68]"
//           } px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3`}
//         >
//           {msg.type === "user" ? "YOU" : "BOT"}
//         </span>
//         <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />
//       </motion.div>
//     );
//   };

//   return (
//     <>
//       <div className="flex flex-col z-10 bg-[#0f0e11] min-h-screen justify-end relative">
//         <div className="w-full px-10 my-0 mx-auto text-white">
//           <h1 className="text-[22px] font-semibold text-[#c0bcca] font-heebo">
//             Chat Bot Definition
//           </h1>
//           <div className="w-full mt-[20px] mx-auto space-y-5 overflow-y-auto mb-20">
//             {messages.map((msg, index) => renderMessage(msg, index))}
//             {loading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-[#7e7a86] py-8"
//               >
//                 ...loading
//               </motion.div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//         </div>
//       </div>
//       <div className="px-10 rounded-sm sticky z-50 bottom-0 bg-[#0f0e11] flex gap-1 mx-auto p-5">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Send a message..."
//           className="bg-[#1f1f2e] text-white px-4 py-2 w-full rounded outline-none"
//         />
//         {modelName === "gemini" && (
//           <label className="bg-[#1f1f2e] text-white px-4 py-2 rounded-l-lg flex items-center gap-2 cursor-pointer">
//             <FiUpload size={20} />
//             <input
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             Upload
//           </label>
//         )}
//         <button
//           onClick={handleSend}
//           className="bg-[#7c5fe3] text-white px-4 py-2 rounded-r-lg flex items-center justify-center"
//         >
//           <FiSend size={20} />
//         </button>
//       </div>
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#1f1f2e] p-5 rounded-lg text-white relative">
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-white"
//             >
//               <FiX size={20} />
//             </button>
//             <p>Insufficient credits</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;


// import React, { useState, useRef, useEffect } from "react";
// import { FiSend, FiX, FiUpload } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { addCoins, deductCoin } from "./../../redux/addSlice";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { motion } from "framer-motion";
// import { marked } from "marked";
// import DOMPurify from 'dompurify'; // To sanitize HTML content
// import { toast } from "react-toastify"; // Import toast for notifications


// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { type: "user", text: "What is chatBot?" },
//     {
//       type: "bot",
//       text: "At the most basic level, a chatbot is a computer program that simulates and processes human conversation...",
//     },
//     { type: "user", text: "How do chatbots work?" },
//     {
//       type: "bot",
//       text: "Chatbots boost operational efficiency and bring cost savings...",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [file, setFile] = useState(null); // State to store the selected file
//   const [filePreview, setFilePreview] = useState(null); // State for image preview
//   const messagesEndRef = useRef(null);
//   const dispatch = useDispatch();
//   const selectedModel = useSelector((state) => state?.model?.selectedModel);
//   const defaultModelName = "gpt";
//   const modelName = selectedModel?.modelName || defaultModelName;
//   const coins = useSelector((state) => state?.data?.coinBalance);
//   const [showPopup, setShowPopup]= useState('');
  

//   // Function to handle file input and show preview
//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     setFile(uploadedFile);

//     // Generate file preview
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       setFilePreview(event.target.result);
//     };
//     reader.readAsDataURL(uploadedFile);
//   };

//   const fetchResponse = async (query) => {
//     setLoading(true);
//     const token = localStorage.getItem("token");

//     try {
//       const formData = new FormData();
//       formData.append("query", query);
//       if (modelName === "gemini" && file) {
//         formData.append("file", file); // Attach the file
//       }

//       const response = await axios.post(
//         `https://free.1stgpt.ai/v1/ai/${modelName}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Check if the response indicates insufficient credits
//       if (response?.data?.statusCode === 403 && response?.data?.message === "Insufficient credits") {
//         toast.error("Insufficient credits. Please recharge.");
//         return;
//       }

//       // Check for invalid signature error
//       if (response?.data?.success === false && response?.data?.error === "invalid signature") {
//         toast.error("Invalid signature. Please log in again.");
//         return;
//       }

//       let reply = null;
//       if (modelName === "lama") {
//         reply = response?.data?.text;
//       } else {
//         reply = response?.data?.data?.Output;
//       }

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: reply },
//       ]);
//     } catch (error) {
//       console.error("Error fetching response:", error);

//       // Show toast on error with proper message
//       toast.error(error.response?.data?.message || "Something went wrong. Please try again.");

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "bot", text: "Sorry, I couldn't fetch a response." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCoin = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.get(`https://free.1stgpt.ai/v1/user/token`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       dispatch(addCoins(response?.data?.data?.Credit));
//     } catch (error) {
//       console.log("from coin endpoint", error);
//     }
//   };

//   const handleSend = async () => {
//     if (input.trim()) {
//       if (coins <= 0) {
//         setShowPopup(true); // Show popup if credits are insufficient
//         return;
//       }
      
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "user", text: input },
//       ]);
//       setInput("");
//       await fetchCoin(); // Ensure fetchCoin completes before fetching response
//       await fetchResponse(input);
//       if (coins > 0) {
//         if(modelName==='lama'){
//           dispatch(deductCoin(8));
//         }else if(modelName==='gpt'){
//           dispatch(deductCoin(4));
//         }else if(modelName==='gemini'){
//           dispatch(deductCoin(10)); // Deduct 10 coins for gemini
//         }else {
//           dispatch(deductCoin(1)); // Deduct 1 coin after fetching the response
//         }
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const renderMessage = (msg, index) => {
//     // Check if the message contains code blocks denoted by triple backticks
//     const codeBlockMatch = msg.text.match(/```(\w+)?\n([\s\S]*?)```/);

//     if (codeBlockMatch) {
//       const language = codeBlockMatch[1] || "javascript"; // Get language or default to javascript
//       const codeText = codeBlockMatch[2]; // Extract the code between the backticks

//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="bg-[#17151b] text-[#7e7a86] border-[#312e37] border px-4 py-8 rounded-lg relative mt-3"
//         >
//           <span className="bg-[#2B2830] text-[#7E7A68] px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3">
//             BOT
//           </span>
//           <SyntaxHighlighter language={language} style={materialDark}>
//             {codeText}
//           </SyntaxHighlighter>
//           <CopyToClipboard text={codeText}>
//             <button className="text-sm text-blue-500 mt-2">Copy Code</button>
//           </CopyToClipboard>
//         </motion.div>
//       );
//     }

//     // Convert Markdown to HTML
//     const markdownText = marked.parse(msg.text);
//     const sanitizedText = DOMPurify.sanitize(markdownText);

//     // If no code block is detected, render as a normal message
//     return (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className={`${
//           msg.type === "user"
//             ? "bg-[#2b2830] text-[#c0bcca]"
//             : "bg-[#17151b] text-[#7e7a86] border-[#312e37] border"
//         } px-4 py-8 rounded-lg relative mt-3`}
//       >
//         <span
//           className={`${
//             msg.type === "user"
//               ? "bg-[#7C5FE3] text-[#1f1f2e]"
//               : "bg-[#2B2830] text-[#7E7A68]"
//           } px-3 py-0.5 rounded-full font-bold text-[12px] absolute -top-3`}
//         >
//           {msg.type === "user" ? "YOU" : "BOT"}
//         </span>
//         <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />
//       </motion.div>
//     );
//   };

//   return (
//     <>
//       <div className="flex flex-col z-10 bg-[#0f0e11] min-h-screen justify-end relative">
//         <div className="absolute w-full h-full top-0 left-0">
//           {/* Background Effects */}
//         </div>
//         <div className="max-w-[1080px] w-full mx-auto p-6 relative z-10 overflow-y-auto flex flex-col">
//           {messages.map((msg, index) => renderMessage(msg, index))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Preview the uploaded image */}
//         {filePreview && (
//           <div className="flex justify-center mt-4">
//             <img
//               src={filePreview}
//               alt="Preview"
//               className="h-24 w-24 object-cover rounded-lg"
//             />
//           </div>
//         )}

//         <div className="flex items-center mt-4 z-10 bg-[#0f0e11] border-t border-[#7C5FE3] p-4">
//           {/* File upload input */}
//           {modelName === "gemini" && (
//             <div className="relative mr-4">
//               <input
//                 type="file"
//                 id="fileInput"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="fileInput" className="cursor-pointer flex items-center gap-2 text-[#7C5FE3]">
//                 <FiUpload size={20} />
//                 Upload Image
//               </label>
//             </div>
//           )}

//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Ask me anything..."
//             className="flex-grow bg-[#17151b] text-[#c0bcca] rounded-full px-4 py-2 outline-none"
//           />
//           <button
//             onClick={handleSend}
//             className="ml-4 bg-[#7C5FE3] text-white px-4 py-2 rounded-full hover:bg-[#684fca] transition duration-200"
//             disabled={loading}
//           >
//             {loading ? "..." : <FiSend />}
//           </button>
//         </div>
//       </div>

//       {/* Show popup if user has insufficient credits */}
//       {showPopup && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
//           <div className="bg-[#17151b] p-6 rounded-lg shadow-lg text-white relative">
//             <button
//               className="absolute top-2 right-2 text-[#7C5FE3]"
//               onClick={() => setShowPopup(false)}
//             >
//               <FiX size={24} />
//             </button>
//             <h2 className="text-lg font-bold mb-4">Insufficient Credits</h2>
//             <p>You don't have enough credits to continue. Please recharge.</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;

import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiX, FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCoins, deductCoin } from "./../../redux/addSlice";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import { marked } from "marked";
import DOMPurify from 'dompurify'; // To sanitize HTML content
import {toast} from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { ToastContainer } from 'react-toastify';

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
  const [file, setFile] = useState(null); // State to store the selected file
  const [preview, setPreview] = useState(null); // Preview of the image
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();
  const selectedModel = useSelector((state) => state?.model?.selectedModel);
  const modelName = selectedModel?.modelName || "gpt";
  const coins = useSelector((state) => state?.data?.coinBalance);
  const [showPopup, setShowPopup] = useState(false);

  const fetchResponse = async (query) => {
    setLoading(true);
    const token = localStorage.getItem("token");
  
    try {
      const formData = new FormData();
      formData.append("query", query);
      if (modelName === "gemini" && file) {
        formData.append("file1", file);
      }
  
      const response = await axios.post(
        `https://free.1stgpt.ai/v1/ai/${modelName}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // Check if the response indicates insufficient credits
      if (response?.status === 403 && response?.data?.message === "Insufficient credits") {
        toast.dismiss();
        toast.error("Insufficient credits. Please recharge.");
        return;
      }
  
      // Check for invalid signature error
      if (response?.status === 401 && response?.data?.message === "Invalid signature") {
        toast.dismiss();
        toast.error("Invalid signature. Please log in again.");
        return;
      }
  
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
      console.error("Error fetching response:-----------", error);
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Sorry, I couldn't fetch a response.");
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
      const response = await axios.get(`https://free.1stgpt.ai/v1/user/token`, {
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
    if (input.trim() || (modelName === "gemini" && file)) {
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
        if (modelName === 'lama') {
          dispatch(deductCoin(8));
        } else if (modelName === 'gpt') {
          dispatch(deductCoin(4));
        } else if (modelName === 'gemini') {
          dispatch(deductCoin(1)); // Deduct 10 coins for gemini
        } else {
          dispatch(deductCoin(1)); // Deduct 1 coin after fetching the response
        }
      }

      // Clear the file and preview after sending the message
      if (modelName === "gemini" && file) {
        setFile(null);
        setPreview(null);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Create a preview URL of the selected image
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreview(null); // Clear the preview
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const renderMessage = (msg, index) => {
    const codeBlockMatch = msg.text.match(/```(\w+)?\n([\s\S]*?)```/);

    if (codeBlockMatch) {
      const language = codeBlockMatch[1] || "javascript";
      const codeText = codeBlockMatch[2];

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

    const markdownText = marked.parse(msg.text);
    const sanitizedText = DOMPurify.sanitize(markdownText);

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
    <ToastContainer />
      <div className="flex flex-col z-10 bg-[#0f0e11] min-h-screen justify-end relative">
        <div className="w-full px-10 my-0 mx-auto text-white">
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

      {/* Image Preview */}
      {modelName === "gemini" && preview && (
        <div className="px-4 py-2">
          <div className="relative inline-block">
            <img
              src={preview}
              alt="Selected file"
              className="w-24 h-24 object-cover border rounded" // Smaller size for the preview
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 text-white bg-gray-700 p-1 rounded-full hover:bg-gray-800 transition"
            >
              <FiX size={16} />
            </button>
          </div>
        </div>
      )}


      <div className="px-10 rounded-sm sticky z-50 bottom-0 bg-[#0f0e11] flex gap-1 mx-auto p-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Send a message..."
          className="bg-[#1f1f2e] text-white px-4 py-2 w-full rounded outline-none"
        />
        {modelName === "gemini" && (
          <label className="bg-[#1f1f2e] text-white px-4 py-2 rounded-l-lg flex items-center gap-2 cursor-pointer">
            <FiUpload size={20} />
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            Upload
          </label>
        )}
        <button
          onClick={handleSend}
          className="bg-[#7c5fe3] text-white px-4 py-2 rounded-r-lg flex items-center justify-center"
        >
          <FiSend size={20} />
        </button>
      </div>

      {/* Popup for insufficient credits */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#1f1f2e] text-white p-5 rounded-lg shadow-lg">
            <p className="mb-4">Insufficient credits. Please recharge.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#7c5fe3] px-4 py-2 rounded text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
