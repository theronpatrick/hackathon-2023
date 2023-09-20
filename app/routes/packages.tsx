import "../styles/carInfo.css";
import "react-dropdown/style.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "@remix-run/react";

export interface PackagesProps {}

export default function Packages(props: PackagesProps) {
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">
        What are some packages you'd be interested in?
      </h1>
      <div className="instructions">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rust proofing"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Environmental protection packages"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Fabric protection"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Pain protection"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Nitrogen in tires"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Delivery fees "
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Extended warranty"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="VIN etching"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Alarms and tracking systems"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Windshield, wheel, and dent protection"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Key fob replacements"
          />
        </FormGroup>
      </div>
      <Link
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
