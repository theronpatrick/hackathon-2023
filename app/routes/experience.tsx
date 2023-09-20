import "../styles/experience.css";
import "react-dropdown/style.css";

import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "@remix-run/react";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import { roles } from "../helpers/roles";
import {
  encodeStateToSearchParams,
  decodeStateFromSearchParams,
} from "../helpers/params.js";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon} </span>;
}

const customIcons = [
  { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: "newbie" },
  {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "novice",
  },
  {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "intermediate",
  },
  {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "advanced",
  },
  {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "expert",
  },
];

export default function Experience() {
  const defaultIndex = 1;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [selectedExperience, setSelectedExperience] = useState(
    customIcons[defaultIndex].label,
  );

  const handleClick = (index) => {
    setSelectedIndex(index);
    setSelectedExperience(customIcons[index].label);
  };

  const SmileIcons = () => {
    return customIcons.map((icon, index) => {
      const isSelected = index === selectedIndex;

      const buttonClassName = `experienceButton ${
        isSelected ? "selected" : ""
      }`;

      return (
        <Button
          key={icon.label}
          className={buttonClassName}
          onClick={() => {
            handleClick(index);
          }}
        >
          {icon.icon}
          {index === 0 && (
            <label className="experienceSmileLabel">Not Much</label>
          )}
          {index === customIcons.length - 1 && (
            <label className="experienceSmileLabel">Car Guru</label>
          )}
        </Button>
      );
    });
  };

  return (
    <div className="landingContainer">
      <h1 className="logoHeader">How much do you know about cars?</h1>

      <div className="instructions">
        <SmileIcons />
      </div>

      <Link
        className=""
        to={{
          pathname: "/packages",
          search: encodeStateToSearchParams({ experience: selectedExperience }),
        }}
      >
        <button className="nextButton">Next Question ➡️</button>
      </Link>
    </div>
  );
}
