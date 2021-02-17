import {
  makeStyles,
  TextField,  
} from "@material-ui/core";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch:Dispatch<any> = useDispatch();
  const curUserAnswer = useSelector((state:IRootState) => state.curUserAnswer);
  
  const [ curAnswer, setCurAnswer ] = useState("");

  useEffect(()=>{
    if ( curUserAnswer === "") {
      setCurAnswer("")
    }
  },[curUserAnswer]);

  useEffect(()=>{
    dispatch({
        type: "SetUserAnswer",
        curUserAnswer : curAnswer
    });
  },[curAnswer]);
  
  return (
    <div className={classes.container}>
      <p className = {classes.quest}>{quest}</p>
      <p className = {classes.questText}>{questText}</p>
      <TextField
        id="outlined-basic" 
        label="Адказ" 
        variant="outlined" 
        value={curAnswer}
        onChange = { e => { setCurAnswer(e.currentTarget.value)}}/>
    </div>
  );
};
