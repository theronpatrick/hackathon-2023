//TODO this will summarize all the info from onboarding and route to chat

import { useEffect, useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import axios from "axios";

import { secretKey } from "../helpers/api";

import "../styles/script.css";

export interface ScriptProps {}

export default function Script(props: ScriptProps) {
  const location = useLocation();
  const formValues = location.state;
  const [response, updateResponse] = useState("");

  const apiUrl = "https://api.openai.com/v1/chat/completions";

  console.log(formValues);

  async function fetchFocusPoints() {
    try {
      const response = await axios.post(
        apiUrl,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are going to provide a list of focus points for someone who is looking at a car at a dealership. The user has gone through and answered a bunch of questions that I will provide you the data for right now:
                        Person's total budget: ${formValues.budget}
                        Person's car buying experience level (from a scale of 1 to 5): ${
                          formValues.experience + 1
                        }
                        The car they are looking at: ${formValues.year} ${
                          formValues.make
                        } ${formValues.model}
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

                        Now return a list of bullet points for the Person to focus on when it comes to negotiating and talking to the dealer in the form of a bulleted list with new lines after each bullet. Phrase the bullets as if you were talking to me.
                    `,
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

      updateResponse(message);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("done");
    }
  }

  useEffect(() => {
    fetchFocusPoints();
  }, []);

  const bulletPointArray = response.split("-");

  return (
    <div className="scriptContainer">
      <div className="scriptContent">
        <h1 className="heading">Thanks for your Response!</h1>
        <h4 className="listHeading">
          Here are some focus points for when you go to the dealership:
        </h4>
        <ul>
          {response !== "" &&
            bulletPointArray.map((bullet) => {
              if (bullet !== "") {
                return <li>{`-${bullet}`}</li>;
              }
            })}
        </ul>
      </div>
      <Link
        state={formValues}
        className="chatWithDad"
        to={{
          pathname: "/chat",
        }}
      >
        <button className="nextButton">Chat with D.A.D.</button>
      </Link>
    </div>
  );
}
