import React, { useState } from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: 'user', text: 'What is a chat bot?' },
    { type: 'bot', text: 'At the most basic level, a chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person. Chatbots can be as simple as rudimentary programs that answer a simple query with a single-line response, or as sophisticated as digital assistants that learn and evolve to deliver increasing levels of personalization as they gather and process information.' },
    { type: 'user', text: 'How do chatbots work?' },
    { type: 'bot', text: 'Chatbots boost operational efficiency and bring cost savings to businesses while offering convenience and added services to internal employees and external customers. They allow companies to easily resolve many types of customer queries and issues while reducing the need for human interaction.' },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    // Simulate bot response for demonstration
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: 'This is a bot response.' }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">Chat Bot Definition</h1>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-center space-x-2 max-w-lg ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
              {message.type === 'user' ? <FaUser className="text-xl" /> : <FaRobot className="text-xl" />}
              <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-purple-700' : 'bg-gray-800'}`}>
                <p>{message.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="p-4 border-t border-gray-700">
        <div className="flex">
          <input
            className="flex-1 p-2 rounded-l-lg bg-gray-800 border border-gray-700"
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-2 bg-purple-700 hover:bg-purple-800 rounded-r-lg"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatBot;
