import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "../styles/landing.css";
import { Link, useLocation } from "@remix-run/react";

export interface PrioritiesPageProps {}

export default function PrioritiesPage(props: PrioritiesPageProps) {
  const location = useLocation();
  let priorities = {
    safety: '2',
    price: '2',
    tech: '2',
    upgrades: '2'
  }
  const formValues = location.state || {};
  formValues.priorities = priorities;

  const handleChange = (e: SelectChangeEvent) => { 
    priorities[e.target.name] = e.target.value;
    formValues.priorities = priorities;
  };
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">RATE YOUR PRIORITIES</h1>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">SAFETY</Typography>
        <Rating name="safety" onChange={handleChange} defaultValue={2} size="large" />
        <Typography component="legend">PRICE</Typography>
        <Rating name="price" onChange={handleChange} defaultValue={2} size="large" />
        <Typography component="legend">TECH</Typography>
        <Rating name="tech" onChange={handleChange} defaultValue={2} size="large" />
        <Typography component="legend">UPGRADES</Typography>
        <Rating name="upgrades" onChange={handleChange} defaultValue={2} size="large" />
      </Box>
      <Link
        state={formValues}
        className=""
        to={{
          pathname: "/script",
        }}
      >
        <button className="nextButton">Give me a script ➡️</button>
      </Link>
    </div>
  );
}
