import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "../styles/landing.css";

export interface PrioritiesPageProps {}

export default function PrioritiesPage(props: PrioritiesPageProps) {
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">RATE YOUR PRIORITIES</h1>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">SAFETY</Typography>
        <Rating name="size-large" defaultValue={2} size="large" />
        <Typography component="legend">PRICE</Typography>
        <Rating name="size-large" defaultValue={2} size="large" />
        <Typography component="legend">TECH</Typography>
        <Rating name="size-large" defaultValue={2} size="large" />
        <Typography component="legend">UPGRADES</Typography>
        <Rating name="size-large" defaultValue={2} size="large" />
      </Box>
    </div>
  );
}
