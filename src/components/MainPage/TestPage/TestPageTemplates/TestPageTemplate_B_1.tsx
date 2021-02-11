import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

interface ITT_B_1_props {
  quest: string;
  questTextArr: string[];
}

const useStyles = makeStyles({ 
  container :{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  lil : {
    fontSize: 30,
    listStyleType: "none"
  },
  inner_container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  quest: {
    fontSize: 30,
    textAlign: "center"
  }
});

export const TestTemplate_B_1 = ({quest, questTextArr}:ITT_B_1_props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <p className = {classes.quest}>{quest}</p>
      <div className={classes.inner_container}>
        <div>
          <ul style={{}}>   
            <li className = {classes.lil}>{questTextArr[0]}</li>
            <li className = {classes.lil}>{questTextArr[1]}</li>
            <li className = {classes.lil}>{questTextArr[2]}</li>
            <li className = {classes.lil}>{questTextArr[3]}</li>
            <li className = {classes.lil}>{questTextArr[4]}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className = {classes.lil}>{questTextArr[5]}</li>
            <li className = {classes.lil}>{questTextArr[6]}</li>
            <li className = {classes.lil}>{questTextArr[7]}</li>
            <li className = {classes.lil}>{questTextArr[8]}</li>
            <li className = {classes.lil}>{questTextArr[9]}</li>
          </ul>
        </div>
      </div>
      <TextField id="outlined-basic" label="Answer" variant="outlined" />
    </div>
  );
};
