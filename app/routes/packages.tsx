import "../styles/carInfo.css";
import "react-dropdown/style.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation } from "@remix-run/react";
import captureFormValues from "../helpers/formCapture.js";

export interface PackagesProps {}

export default function Packages(props: PackagesProps) {
  const location = useLocation();
  let formValues = location.state || {};
  let selectedFeatures = [];

  const handleChange = (e) => {
    const selectedFeature = e.target.name;
    if (selectedFeatures.includes(selectedFeature)) {
      selectedFeatures = selectedFeatures.filter(
        (feature) => feature !== selectedFeature,
      );
    } else {
      selectedFeatures.push(selectedFeature);
    }
    formValues.selectedFeatures = selectedFeatures;
    console.log(formValues);
  };
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">
        What are some packages you'd be interested in?
      </h1>
      <div className="instructions">
        <FormGroup onChange={handleChange}>
          <FormControlLabel
            name="Rust proofing"
            control={<Checkbox />}
            label="Rust proofing"
          />
          <FormControlLabel
            label="Environmental protection packages"
            control={<Checkbox />}
            name="Environmental protection packages"
          />
          <FormControlLabel
            control={<Checkbox />}
            name="Fabric protection"
            label="Fabric protection"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Paint protection"
            name="Paint protection"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Nitrogen in tires"
            name="Nitrogen in tires"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Delivery fees "
            name="Delivery fees "
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Extended warranty"
            name="Extended warranty"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="VIN etching"
            name="VIN etching"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Alarms and tracking systems"
            name="Alarms and tracking systems"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Windshield, wheel, and dent protection"
            name="Windshield, wheel, and dent protection"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Key fob replacements"
            name="Key fob replacements"
          />
        </FormGroup>
      </div>
      <Link
        state={formValues}
        className=""
        to={{
          pathname: "/priorities",
        }}
      >
        <button className="nextButton">Get Started ➡️</button>
      </Link>
    </div>
  );
}
