//TODO this will summarize all the info from onboarding and route to chat 

import {useEffect} from 'react';
import axios from "axios";

export interface ScriptProps {
}

export function Script (props: ScriptProps) {

    const secretKey = "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";
    const apiUrl = "https://api.openai.com/v1/chat/completions"; // Replace with the actual API endpoint

    async function fetchFocusPoints() {
        try {
            const response = await axios.post(
                apiUrl,
                {
                model: "gpt-3.5-turbo",
                context: "",
                },
                {
                headers: {
                    Authorization: `Bearer ${secretKey}`,
                },
                },
            );

            const message = response.data.choices[0].message.content;

        } catch (error) {
            console.error("Error:", error);
        } finally {
            console.log("done")
        }
    }

    useEffect(() => {
        fetchFocusPoints();
    })
    
  return (
    <div>
      <h1 className="heading">Thanks for your Response!</h1>
      <h4 className="listHeading">Here are some focus points for when you go to the dealership:</h4>
      <ul className="focusPoints">
        <li className="focusPoint"></li>
      </ul>
    </div>
  );
}
