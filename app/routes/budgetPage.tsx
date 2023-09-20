import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import "../styles/budget.css";
import { Link, useLocation } from "@remix-run/react";
import captureFormValues from '../helpers/formCapture.js'

export interface BudgetPageProps {}
export default function NonLinearSlider(props: BudgetPageProps) {
  const location = useLocation();
  const initialFormValues = location.state || {};
  const [value, setValue] = React.useState<number>(0);
  const [formVals, setFormVals] = React.useState(initialFormValues);
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
    event.preventDefault();
    setFormVals(captureFormValues(event, formVals));
  };

  return (
    <div className="landingContainer">
      <h1 className="logoHeader">Enter your Budget</h1>

      <Box sx={{ width: 250 }}>
        <div className="budgetBody">
          <Typography id="price" gutterBottom>
            Price: $ {value}
          </Typography>
        </div>
        <Slider
          onChange={handleChange}
          min={0}
          max={50000}
          step={100}
          name="budget"
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>
      <Link
        className=""
        state={formVals}
        to={{
          pathname: "/experience",
        }}
      >
        <button className="nextButton">Next Question ➡️</button>
      </Link>
    </div>
  );
}
