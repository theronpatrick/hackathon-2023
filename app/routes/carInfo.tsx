import "../styles/carInfo.css";
import "react-dropdown/style.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "@remix-run/react";

export interface CarInfoProps {}

export default function CarInfo(props: CarInfoProps) {
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
            // value={make}
            label="Make"
            // onChange={handleChange}
          >
            <MenuItem value={10}>RAM</MenuItem>
            <MenuItem value={20}>Audi</MenuItem>
            <MenuItem value={30}>Dodge</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={make}
            label="Model"
            // onChange={handleChange}
          >
            <MenuItem value={10}>CT4</MenuItem>
            <MenuItem value={20}>ATS</MenuItem>
            <MenuItem value={30}>CT6</MenuItem>
          </Select>
        </FormControl>

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
