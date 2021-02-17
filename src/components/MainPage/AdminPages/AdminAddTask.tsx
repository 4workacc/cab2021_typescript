import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  MuiThemeProvider,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
    AdminAddTask : {
        width: "100%",
        heigth: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    select :{ 
        width: "200px"
    }
})

export const AdminAddTask: React.FC = () => {
  const classes = useStyles();
  const [usersFIO, setUsersFIO] = useState<string[]>(["f1", "f2", "f3", "f4"]);
  const [testsName, setTestsname] = useState<string[]>(["1", "2", "3"]);

  const [selectedFIO, setSeletedFIO] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const butClickHandler = () => {
    alert(`SET ${selectedTest} to user ${selectedFIO} before ${selectedDate}`);
    fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_AddTasks.php?
            USER_FIO=${selectedFIO}&
            TEST_NAME=${selectedTest}&
            START_DATE_TIME=2021-01-02&
            END_DATE_TIME=${selectedDate}`)
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
      });
  };

  const handleTest = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log("");
  };

  useEffect(() => {
    fetch(
      `https://cab07.000webhostapp.com/new_refact/new_admin_getUsersAndTests.php`
    )
      .then((res) => res.json())
      .then((result) => {
        setUsersFIO(result.users);
        setTestsname(result.tests);
      });
  }, []);
  return (
    <div className={classes.AdminAddTask}>
      <FormControl className = {classes.select}>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedFIO}
          onChange={(e) => setSeletedFIO(e.target.value as string)}
        >
          {usersFIO.map((el) => {
            return <MenuItem value={el}>{el}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <FormControl className = {classes.select}>
        <InputLabel id="demo-simple-select-label">Test</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setSelectedTest(e.target.value as string)}
        >
          {testsName.map((el) => {
            return <MenuItem value={el}>{el}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <input
        type="date"
        value={selectedDate}
        className = {classes.select}
        onChange={(e) => setSelectedDate(e.target.value as string)}
      ></input>
      <Button 
        className = {classes.select}
        onClick={butClickHandler}
        variant="contained" 
        color="primary" 
        disabled = { (selectedFIO==="")||(selectedTest==="")||(selectedDate==="") }
        >Задаць тэст</Button>
    </div>
  );
};
