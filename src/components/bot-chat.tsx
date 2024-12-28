"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  text: string;
  isUser: boolean;
}

const BotChat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // State for header text visibility
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  // Ref for the scroll container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ text: "Hi! What can I do for you?", isUser: false }]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      const newMessage: Message = { text: userInput, isUser: true };
      setMessages((prev) => [...prev, newMessage]);
      setUserInput("");
      handleBotResponse(userInput);
    }
  };

  const handleBotResponse = (userMessage: string) => {
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    if (userMessage.toLowerCase().includes("hi")) {
      return "How can I help you";
    } else if (userMessage.toLowerCase().includes("networking")) {
      return "I would be happy to assist you with our networking services. What kind of networking help do you need? Wi-Fi, security, or something else?";
    } else if (userMessage.toLowerCase().includes("wifi")) {
        return "We offer secure, high-speed Wi-Fi solutions. Need help with coverage or setup?";
    } else if (userMessage.toLowerCase().includes("security")) {
      return "We provide firewalls, encryption, and 24/7 network monitoring to keep your network safe. Want more info?";
    } else if (userMessage.toLowerCase().includes("cloud")) {
      return "Yes, we offer cloud storage, backup, and hybrid cloud solutions. Which service are you interested in?";
    } else if (userMessage.toLowerCase().includes("small business")) {
      return "Managed Wi-Fi and cloud solutions are great for small businesses—affordable and easy to scale. Need a consultation?";
    } else if (userMessage.toLowerCase().includes("setup")) {
      return "We handle network design, installation, and optimization. Ready to get started?";
    } else if (userMessage.toLowerCase().includes("thanks")) {
      return "You’re welcome! Reach out anytime. Have a great day!";
    } else {
      return "I am afraid I do not fully understand your request. Could you please rephrase or provide more details about what you are looking for?";
    }
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className={`fixed bottom-4 right-4 bg-white dark:bg-gray-950 shadow-lg border border-gray-300 dark:border-gray-700 transition-all duration-300 rounded-full ${
        isExpanded ? "rounded-lg w-80 h-96" : "w-16 h-16"
      }`}
    >
      {/* Header Text Section */}
      {isTextVisible && !isExpanded && (
        <div className="absolute -top-12 -left-32 bg-white dark:bg-gray-800 w-auto max-w-[250px] px-2 py-2 rounded-lg flex justify-between items-center shadow-md whitespace-nowrap overflow-hidden">
          <span className="text-sm text-black dark:text-gray-200 font-medium">
            Hi! What can I do for you?
          </span>
          <button
            onClick={() => setIsTextVisible(false)}
            className="text-[#2056aeff] ml-2 hover:text-gray-800"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>
      )}

      {/* Bot Icon or Header */}
      {!isExpanded ? (
        <div
          className="flex items-center justify-center bg-[#2056aeff] rounded-full w-full h-full cursor-pointer"
          onClick={toggleExpansion}
        >
          <img
            src="/assets/feedbacks/feedback2.jpeg"
            alt="chat bot"
            className="mx-auto w-16 h-16 rounded-full object-cover border-2 border-[#2056aeff] shadow-lg"
          />
        </div>
      ) : (
        <div className="flex items-center justify-between bg-[#2056aeff] text-white px-4 py-2 rounded-t-lg cursor-pointer">
          <span className="flex items-center gap-2">
            <FaRobot className="text-xl" /> Chat Bot
          </span>
          <button onClick={toggleExpansion}>
            <FaTimes className="text-white text-lg" />
          </button>
        </div>
      )}

      {/* Chat Area */}
      {isExpanded && (
        <div className="p-2 h-full flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-2 p-2">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`px-3 py-1 max-w-[75%] rounded-lg text-sm shadow-md break-words ${
                    message.isUser
                      ? "bg-[#2056aeff] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </span>
              </motion.div>
            ))}
            <div ref={messagesEndRef} /> {/* Invisible ref at the bottom */}
          </div>
          {/* Input Area */}
          <div className="mt-2 mb-12 flex">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 px-2 py-1 border dark:bg-gray-800 dark:text-gray-200 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2056aeff] text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-[#2056aeff] text-white px-3 py-4 rounded-r-lg hover:bg-[#50ade5ff] focus:outline-none focus:ring-2 focus:ring-[#2056aeff] flex items-center justify-center"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BotChat;
