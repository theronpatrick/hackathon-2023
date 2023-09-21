import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useLocation } from "@remix-run/react";

import { decodeStateFromSearchParams } from "../helpers/params";
import { roles } from "../helpers/roles";
import { secretKey } from "../keys/api";

import "../styles/chat.css";

function ChatApp() {
  const [inputText, setInputText] = useState("");
  const [conversation, updateConversation] = useState([]);
  const [addonPrice, updateAddonPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();
  const formValues = location.state;
  const [searchParams, setSearchParams] = useSearchParams();
  const decodedParams = decodeStateFromSearchParams(searchParams);

  let context = roles[decodedParams.role] || roles.newbie;
  context += `
    You are going to provide advice and answer questions for a user who is trying to buy a car. The user has gone through and answered a bunch of questions that I will provide you the data for right now:
      Person's total budget: ${formValues.budget}
      Person's car buying experience level (from a scale of 1 to 5): ${
        formValues.experience + 1
      }
      The car they are looking at: ${formValues.year} ${formValues.make} ${
        formValues.model
      }
      That car's mileage: ${formValues.mileage}
      That car's price: ${formValues.price}
      List of features the person is potentially interested in: ${formValues.selectedFeatures.map(
        (feature) => `${feature}, `,
      )}
      Person's priorities when it comes to car buying (each priority is on a scale of 1 to 5): 
          Price: ${formValues.priorities.price} 
          Safety: ${formValues.priorities.safety}
          Tech: ${formValues.priorities.tech}
          Upgrades: ${formValues.priorities.upgrades}
      Now use this data to give the user the best possible advice. Phrase each response like you are responding to me.
      Now give a greeting as a response.
  `;
  const conversationContext = { role: "system", content: context };

  const budget = formValues.budget;
  const carPrice = formValues.price;

  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    setIsLoading(true); // Set loading state to true when submitting
    const updatedConversation = [
      ...conversation,
      { role: "user", content: inputText },
    ];

    updateConversation(updatedConversation);

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: "gpt-3.5-turbo",
          messages: [conversationContext, ...updatedConversation],
        },
        {
          headers: {
            Authorization: `Bearer ${secretKey}`,
          },
        },
      );

      const message = response.data.choices[0].message.content;

      const dollarAmountRegex = /\$[\d,.]+/g; // Matches any sequence of digits, commas, and periods after a dollar sign

      const dollarAmountMatches = message.match(dollarAmountRegex);

      if (dollarAmountMatches && dollarAmountMatches.length > 0) {
        // Extract and process all matched dollar amounts
        const extractedDollarAmounts = dollarAmountMatches.map((match) => {
          // Remove commas and convert to a numeric value
          return parseFloat(match.replace(/[^0-9.]/g, ""));
        });

        // Update the addonPrice state with the extracted dollar amount(s)
        const currentAddonPrice = addonPrice;
        updateAddonPrice(currentAddonPrice + extractedDollarAmounts[0]);
        // Show the notification
        setShowNotification(true);

        // Automatically hide the notification after 3 seconds (adjust the delay as needed)
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
      updateConversation([
        ...updatedConversation,
        { role: "system", content: message },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false when the response is returned
      setInputText("");
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <main className="dadChatContainer">
      <div className="conversation">
        {conversation &&
          conversation.map((message) => {
            return (
              <>
                {message.content !== "" && (
                  <div className={"response"}>
                    <div
                      className={`${
                        message.role === "user" ? "userChat" : "botChat"
                      } msgContent`}
                    >
                      {message.content}
                    </div>
                  </div>
                )}
              </>
            );
          })}
      </div>
      <div className="inputFooter">
        <form onSubmit={handleSubmit} className="inputAndButton">
          <input
            type="text"
            placeholder="Type your message"
            value={inputText}
            onChange={handleInputChange}
            className="input"
          />
          <button
            onClick={handleSubmit}
            className={`submitButton ${
              isLoading ? "opacity-50 cursor-not-allowed" : "" // Disable the button and reduce opacity when loading
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spin mr-2">&#9696;</span> // Loading spinner
            ) : (
              <svg
                className="sendIcon"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  fill={`${isLoading ? "grey" : "#008001"}`}
                  clip-rule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 13.8153 2.48451 15.5196 3.33127 16.9883C3.50372 17.2874 3.5333 17.6516 3.38777 17.9647L2.53406 19.8016C2.00986 20.7933 2.72736 22 3.86159 22H12C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929L12.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H12.5858L11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.29289Z"
                />
              </svg>
            )}
          </button>
        </form>
        <div className="budgetTracker">
          <div
            className="price bar"
            style={{ width: `${(carPrice / budget) * 100}%` }}
          >
            {"Car Price"}
          </div>
          {addonPrice > 0 && (
            <div
              className="addon bar"
              style={{ width: `${(addonPrice / budget) * 100}%` }}
            >
              {showNotification && (
                <span className="notification">Your projected add-on</span>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ChatApp;
