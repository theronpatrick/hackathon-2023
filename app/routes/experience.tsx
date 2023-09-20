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
  { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: "Beginner" },
  {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Novice",
  },
  {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Intermediate",
  },
  {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Advanced",
  },
  {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Expert",
  },
];

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index) => {
    console.log("clicked ", index);

    setSelectedIndex(index);
  };

  const SmileIcons = () => {
    return customIcons.map((icon, index) => {
      const isSelected = index === selectedIndex;

      console.log("index ", index);
      console.log("selected", selectedIndex);

      const buttonClassName = `experienceButton ${
        isSelected ? "selected" : ""
      }`;

      return (
        <Button
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
        }}
      >
        <button className="nextButton">Next Question ➡️</button>
      </Link>
    </div>
  );
}
