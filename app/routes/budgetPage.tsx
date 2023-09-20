import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import "../styles/budget.css";
import { Link } from "@remix-run/react";

export interface BudgetPageProps {}

function calculateValue(value: number) {
  return 2 ** value;
}

export default function NonLinearSlider(props: BudgetPageProps) {
  const [value, setValue] = React.useState<number>(10);
  console.log(value);
  console.log(calculateValue.toLocaleString());
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <div className="landingContainer">
      <h1 className="logoHeader">Enter your Budget</h1>

      <Box sx={{ width: 250 }}>
        <div className="budgetBody">
          <Typography id="price" gutterBottom>
            Price: $ {calculateValue(value)}
          </Typography>
        </div>
        <Slider
          min={5}
          step={1}
          max={30}
          scale={calculateValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>
      <Link
        className=""
        to={{
          pathname: "/experience",
        }}
      >
        <button className="nextButton">Next Question ➡️</button>
      </Link>
    </div>
  );
}
