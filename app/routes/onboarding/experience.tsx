import  "../styles/experience.css";
import 'react-dropdown/style.css';
import {Button } from '@mui/material';


export interface CarInfoProps {
}

export default function CarInfo (props: CarInfoProps) {
  return (
    <div className="landingContainer">
      <h1 className="logoHeader">How experienced with cars are you?</h1>
      <div className="instructions">
        <p></p>
        <Button id= "experienceButton" variant="contained">Beginner</Button>
        &nbsp;&nbsp;&nbsp;
         <Button id= "experienceButton" variant="contained">Advanced</Button>
         &nbsp;&nbsp;&nbsp;
          <Button id= "experienceButton" variant="contained">Expert</Button>
      </div>
      <button>Next Question {'->'}</button>
    </div>
  );
}
