import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

interface ITT_A_0_props {
  quest: string;
  answers: string[];
}

const useStyles = makeStyles({
  quest : {
      fontSize: 60,
      width: "100%",    
      textAlign: "center"  
  },
  lab: {
    fontSize: 40,
    marginLeft: 30,
  },
  checkbox: {
    paddingTop: 10,  
    transform: "scale(2)",
  },
});

export const TestTemplate_A_0: React.FC<ITT_A_0_props> = ({quest, answers}) => {
  const classes = useStyles();
  const [ ch0, setCh0 ] = useState(false);
  const [ ch1, setCh1 ] = useState(false);
  const [ ch2, setCh2 ] = useState(false);
  const [ ch3, setCh3 ] = useState(false);
  const [ ch4, setCh4 ] = useState(false);
  
  return (
    <div className="TT_A_0">
      <p className = {classes.quest}>{quest}</p>
      <FormGroup>
        <FormControlLabel
          className={classes.lab}
          control={
            <Checkbox
              checked={ch0}
              className={classes.checkbox}
              onChange={ () => setCh0(!ch0) }
              name="gilad"
            />
          }
          label={<Typography className={classes.lab}>{answers[0]}</Typography>}
        />
        <FormControlLabel
          className={classes.lab}
          control={
            <Checkbox 
                checked={ch1} 
                className={classes.checkbox}
                onChange={ () => setCh1(!ch1) }
                name="jason" />}
          label={<Typography className={classes.lab}>{answers[1]}</Typography>}
        />
        <FormControlLabel
          className={classes.lab}
          control={
            <Checkbox 
                checked={ch2} 
                className={classes.checkbox}
                onChange={ () => setCh2(!ch2) }
                name="antoine" />}
          label={<Typography className={classes.lab}>{answers[2]}</Typography>}
        />
         <FormControlLabel
          className={classes.lab}
          control={
            <Checkbox 
                checked={ch3} 
                className={classes.checkbox}
                onChange={ () => setCh3(!ch3) }
                name="antoine" />}
          label={<Typography className={classes.lab}>{answers[3]}</Typography>}
        />
         <FormControlLabel
          className={classes.lab}
          control={
            <Checkbox 
                checked={ch4} 
                className={classes.checkbox}
                onChange={ () => setCh4(!ch4) }
                name="antoine" />}
          label={<Typography className={classes.lab}>{answers[4]}</Typography>}
        />
      </FormGroup>
    </div>
  );
};
