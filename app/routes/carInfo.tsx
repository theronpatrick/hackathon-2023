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
import captureFormValues from '../helpers/formCapture.js'

export interface CarInfoProps {}

export default function CarInfo(props: CarInfoProps) {
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [formVals, setFormVals] = React.useState({});

  const handleChange = (e: SelectChangeEvent) => {    
    setFormVals(captureFormValues(e, formVals));
    const selectedMake = formVals.make || '';
    const selectedModel = formVals.model || '';
    setMake(selectedMake);
    setModel(selectedModel);
    console.log(formVals);
  };
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">Enter Car Info </h1>
      <div className="instructions">
        <p></p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Make</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="make"
            value={make}
            label="Make"
            onChange={handleChange}
          >
            <MenuItem value={"Honda"}>Honda</MenuItem>
            <MenuItem value={"Audi"}>Audi</MenuItem>
            <MenuItem value={"Dodge"}>Dodge</MenuItem>
          </Select>
        </FormControl>

        {make == "Audi" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="model"
              value={model}
              label="Model"
              onChange={handleChange}
            >
              <MenuItem value={"A4"}>A4</MenuItem>
              <MenuItem value={"A5"}>A5</MenuItem>
              <MenuItem value={"A6"}>A6</MenuItem>
            </Select>
          </FormControl>
        )}

        {make == "Dodge" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="model"
              value={model}
              label="Model"
              onChange={handleChange}
            >
              <MenuItem value={"Avenger"}>Avenger</MenuItem>
              <MenuItem value={"Caliber"}>Caliber</MenuItem>
              <MenuItem value={"Challenger"}>Challenger</MenuItem>
            </Select>
          </FormControl>
        )}

        {make == "Honda" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="model"
              value={model}
              label="Model"
              onChange={handleChange}
            >
              <MenuItem value={"Accord"}>Accord</MenuItem>
              <MenuItem value={"Civic"}>Civic</MenuItem>
              <MenuItem value={"Odyssey"}>Odyssey</MenuItem>
            </Select>
          </FormControl>
        )}
        <TextField
          id="outlined-basic"
          label="Year"
          variant="outlined"
          margin="normal"
          name='year' 
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Mileage"
          variant="outlined"
          margin="normal"
          name='mileage'
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Car Price"
          variant="outlined"
          margin="normal"
          name='price'
          onChange={handleChange}
        />
      </div>
      <Link
        className=""
        state={formVals}
        to={{
          pathname: "/budgetPage",
        }}
      >
        <button className="nextButton">Next Question ➡️</button>
      </Link>
    </div>
  );
}
