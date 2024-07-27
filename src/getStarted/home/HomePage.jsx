import React, { useState } from "react";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Chat Bot Definition</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">YOU</h2>
        <p className="text-base mb-4">What is a chat bot?</p>
        <h2 className="text-xl font-semibold mb-2">BOT</h2>
        <p className="text-base">
          At the most basic level, a chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person. Chatbots can be as simple as rudimentary programs that answer a simple query with a single-line response, or as sophisticated as digital assistants that learn and evolve to deliver increasing levels of personalization as they gather and process information.
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-4">How Do Chatbots Work?</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">YOU</h2>
        <p className="text-base mb-4">How do chatbots work?</p>
        <h2 className="text-xl font-semibold mb-2">BOT</h2>
        <p className="text-base">
          Chatbots boost operational efficiency and bring cost savings to businesses while offering convenience and added services to internal employees and external customers. They allow companies to easily resolve many types of customer queries and issues while reducing the need for human interaction.
        </p>
      </div>

      {/* Content area */}
      {/* Main content goes here */}
      <div className="flex-1 sticky bottom-16  w-full p-3 bg-white border-t border-gray-300 shadow-lg">
      <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>

      {/* Fixed Search Bar */}
      {/* <div className="fixed bottom-0  w-full p-3 bg-white border-t border-gray-300 shadow-lg">
       
      </div> */}
    </div>
  );
};

export default HomePage;
