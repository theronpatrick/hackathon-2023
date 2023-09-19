import React, { useState } from "react";
import { Link, useSearchParams } from "@remix-run/react";

import {
  encodeStateToSearchParams,
  decodeStateFromSearchParams,
} from "../helpers/params.js";

import "../styles/chat.css";

function ParamStateExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  const decodedParams = decodeStateFromSearchParams(searchParams);

  const ParamTable = () => {
    return Object.keys(decodedParams).map((key) => {
      return (
        <li key={key}>
          Key: {key} Value: {decodedParams[key]}
        </li>
      );
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center mx-5">
      <h1>Params are:</h1>
      <ul>
        <ParamTable />
      </ul>
    </main>
  );
}

export default ParamStateExample;
