import "../styles/carInfo.css";
import "react-dropdown/style.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Link } from "@remix-run/react";
import React from "react";

export interface CarInfoProps {}

export default function CarInfo(props: CarInfoProps) {
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");

  const handleChange = (e: SelectChangeEvent) => {
    const updatedMake = e.target.value;
    setMake(updatedMake);
    if (updatedMake == "Audi") {
      setModel("Audi");
    } else if (updatedMake == "Dodge") {
      setModel("Dodge");
    } else if (updatedMake == "Honda") {
      setModel("Honda");
    }
  };
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">Car Info?</h1>
      <div className="instructions">
        <p></p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Make</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={make}
            label="Make"
            onChange={handleChange}
          >
            <MenuItem value={"Honda"}>Honda</MenuItem>
            <MenuItem value={"Audi"}>Audi</MenuItem>
            <MenuItem value={"Dodge"}>Dodge</MenuItem>
          </Select>
        </FormControl>

        {model == "Audi" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={model}
              label="Model"
              //onChange={handleChange}
            >
              <MenuItem value={"A4"}>A4</MenuItem>
              <MenuItem value={"A5"}>A5</MenuItem>
              <MenuItem value={"A6"}>A6</MenuItem>
            </Select>
          </FormControl>
        )}

        {model == "Dodge" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={model}
              label="Model"
              // onChange={handleChange}
            >
              <MenuItem value={"Avenger"}>Avenger</MenuItem>
              <MenuItem value={"Caliber"}>Caliber</MenuItem>
              <MenuItem value={"Challenger"}>Challenger</MenuItem>
            </Select>
          </FormControl>
        )}

        {model == "Honda" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={model}
              label="Model"
              // onChange={handleChange}
            >
              <MenuItem value={"Accord"}>Accord</MenuItem>
              <MenuItem value={"Civic"}>Civic</MenuItem>
              <MenuItem value={"Odyssey"}>Odyssey</MenuItem>
            </Select>
          </FormControl>
        )}
        <TextField id="outlined-basic" label="Year" variant="outlined" />
        <TextField id="outlined-basic" label="Mileage" variant="outlined" />
        <TextField id="outlined-basic" label="Price" variant="outlined" />
      </div>
      <Link
        className=""
        to={{
          pathname: "/budgetPage",
        }}
      >
        <button className="nextButton">Next Question ➡️</button>
      </Link>
    </div>
  );
}
