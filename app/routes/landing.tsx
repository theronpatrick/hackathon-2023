import "../styles/landing.css";
import "../styles/nextButton.css";
import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { roles } from "../helpers/roles";
import { encodeStateToSearchParams } from "../helpers/params";

export interface LandingPageProps {}

const getRandomSystemRole = () => {
  // For now, choose a random role. Eventually we'll want to link to our 'mood' bar
  const roleArray = Object.keys(roles);

  // Generate a random index between 0 and 2 (inclusive)
  const randomIndex = Math.floor(Math.random() * roleArray.length);

  // Use the random index to pick one item from the array
  const randomItem = roleArray[randomIndex];

  return randomItem;
};

export default function LandingPage(props: LandingPageProps) {
  const [role, setRole] = useState();

  useEffect(() => {
    // This code block will run on both the server and the client by default.

    // To conditionally execute code only on the client side:
    if (typeof window !== "undefined") {
      // This code block will only run on the client side.
      // You can put your client-specific logic here.
      const role = getRandomSystemRole();
      console.log("role is ", role);
      setRole(role);
    }
  }, []);

  return (
    <div className="landingContainer">
      <h1 className="logoHeader">D.A.D</h1>
      <div className="landingInstructions">
        <p>
          Are you tired of walking into a car dealership and feeling overwhelmed
          by the barrage of add-ons and options being thrown your way? Say
          goodbye to that anxiety, because D.A.D is here to be your trusted
          companion in the car-buying journey. D.A.D, which stands for
          "Dealership Automated Deliberator," is your personal chatbot assistant
          designed to help you navigate the intricate world of car dealerships
          with confidence and ease.
        </p>
        <p>
          <br />
          <strong>How D.A.D Works</strong>
          <br />
          Our intuitive chatbot will guide you through the process, starting
          with a few simple questions. Tell us the make, model, year, and
          mileage of the vehicle you're interested in, your budget constraints,
          and just how assertive you want to be during negotiations. Armed with
          this information, D.A.D will become your strategic ally, helping you
          make informed decisions while negotiating with dealerships.
        </p>
        <p>
          <br />
          <strong>Your Trusted Negotiation Partner</strong>
          <br />
          D.A.D is your trusted negotiation partner in this exciting yet often
          challenging adventure. We'll analyze the add-ons and extras offered by
          the dealership and provide you with expert advice on whether they're a
          good deal or not. Whether you're a seasoned car buyer or a first-time
          shopper, D.A.D's goal is to ensure that you leave the dealership with
          not just a car, but also a smile on your face and a deal that suits
          your preferences and budget.
        </p>
        <p>
          <br />
          <strong>Empower Yourself with D.A.D</strong>
          <br />
          Bid farewell to confusion and high-pressure situations. Let D.A.D be
          your advocate, making the right choices, saving you money, and
          ensuring a pleasant dealership experience. Let's get started!
        </p>
      </div>
      <Link
        to={{
          pathname: "/carInfo",
          search: encodeStateToSearchParams({ role }),
        }}
      >
        <button className="nextButton">Get Started ➡️</button>
      </Link>
    </div>
  );
}
