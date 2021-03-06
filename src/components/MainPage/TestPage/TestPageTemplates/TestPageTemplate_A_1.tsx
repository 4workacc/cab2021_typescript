import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ITT_A_1_props {
  quest: string;
  answers: string[];
}

const useStyles = makeStyles({
  group: {
    display: "flex",
    justifyContent: "space-around",
    height: "500px",
  },
  quest : {
      fontSize: 50,
      width: "100%",    
      textAlign: "center"  
  },
  lab: {
    fontSize: 25,
    marginLeft: 30,
  },
  checkbox: {
    paddingTop: 10,  
    transform: "scale(2)",
  },
});

export const TestTemplate_A_1 = ({quest, answers}:ITT_A_1_props) => {
  const dispatch:Dispatch<any> = useDispatch();
  const curUserAnswer = useSelector((state:IRootState) => state.curUserAnswer);
  
  const classes = useStyles();
  const [ ch0, setCh0 ] = useState(false);
  const [ ch1, setCh1 ] = useState(false);
  const [ ch2, setCh2 ] = useState(false);
  const [ ch3, setCh3 ] = useState(false);
  const [ ch4, setCh4 ] = useState(false);
  
  useEffect (() => {
    if (curUserAnswer === "") {
      setCh0(false);
      setCh1(false);
      setCh2(false);
      setCh3(false);
      setCh4(false);
    }    
  },[ curUserAnswer])

  useEffect(()=>{
    dispatch({
        type: "SetUserAnswer",
        curUserAnswer : `${ch0?"1":""}${ch1?"2":""}${ch2?"3":""}${ch3?"4":""}${ch4?"5":""}`
    });
  },[ch0, ch1, ch2, ch3, ch4])
  
  return (
    <div className="TT_A_1">
      <p className = {classes.quest}>{quest}</p>
      <div className = "TT_A_1_container">
      <FormGroup className={classes.group}>
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
    </div>
  );
};
