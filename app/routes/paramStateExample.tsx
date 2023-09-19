import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "@remix-run/react";

import {
  encodeStateToSearchParams,
  decodeStateFromSearchParams,
} from "../helpers/params.js";

import "../styles/chat.css";

function ParamStateExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  const exampleState = {
    mood: "happy",
    vibes: "great",
    skin: "moisturized",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center mx-5">
      <h1>Example how to pass state around in params</h1>

      <Link
        to={{
          pathname: "/paramStateExample2",
          search: encodeStateToSearchParams(exampleState),
        }}
      >
        <p className="text-blue-500 hover:underline cursor-pointer">
          Pass params to next page
        </p>
      </Link>
    </main>
  );
}

export default ParamStateExample;
