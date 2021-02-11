import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

interface ITT_B_0_props {
  quest: string;
  questText: string;
}

const useStyles = makeStyles({ 
  container :{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    height: "500px"
  },
  questText :{
    fontSize: 30
  },
  quest: {
    fontSize: 30
  }
});

export const TestTemplate_B_0 = ({quest, questText}:ITT_B_0_props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <p className = {classes.quest}>{quest}</p>
      <p className = {classes.questText}>{questText}</p>
      <TextField id="outlined-basic" label="Answer" variant="outlined" />
    </div>
  );
};
