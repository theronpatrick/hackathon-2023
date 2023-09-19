import React, { useState } from "react";
import axios from "axios";

import "../styles/chat.css";

function ChatApp() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  const secretKey = "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";
  const apiUrl = "https://api.openai.com/v1/chat/completions"; // Replace with the actual API endpoint

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("in handle");
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when submitting

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: inputText,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${secretKey}`,
          },
        },
      );

      const message = response.data.choices[0].message.content;
      setResponseText(message);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false when the response is returned
    }
  };

  return (
    <main className="dadChat min-h-screen flex flex-col items-center justify-center mx-5">
      <h1 className="text-2xl font-bold mb-4 test">Example Prompt</h1>
      <div className="w-full flex">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            placeholder="Type your message"
            value={inputText}
            onChange={handleInputChange}
            className="w-full p-2 rounded border border-gray-400 focus:border-gray-600 focus:outline-none block"
          />
          <button
            onClick={handleSubmit}
            className={`p-2 mt-2 bg-blue-500 text-white rounded w-full ${
              isLoading ? "opacity-50 cursor-not-allowed" : "" // Disable the button and reduce opacity when loading
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spin mr-2">&#9696;</span> // Loading spinner
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {!(isLoading || responseText) && <div className="h-[50vh]"></div>}

      {(isLoading || responseText) && (
        <div className="w-full mt-4 h-[50vh] overflow-y-auto">
          <h2 className="text-lg font-semibold">Response:</h2>
          <p className="border p-2 border-gray-400 rounded">
            {isLoading ? (
              <span className="spin block w-4">&#9696;</span> // Loading spinner
            ) : (
              <span>{responseText}</span>
            )}
          </p>
        </div>
      )}
    </main>
  );
}

export default ChatApp;
