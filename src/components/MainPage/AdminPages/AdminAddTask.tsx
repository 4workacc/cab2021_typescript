import { Button, FormControl, InputLabel, MenuItem, MuiThemeProvider, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export const AdminAddTask: React.FC = () => {
    const [ usersFIO, setUsersFIO ] = useState<string[]>(["f1", "f2", "f3", "f4"]);
    const [ testsName, setTestsname ] = useState<string[]>(["1", "2", "3"]);

    const [ selectedFIO, setSeletedFIO ] = useState("");
    const [ selectedTest, setSelectedTest ] = useState("");
    const [ selectedDate, setSelectedDate ] = useState("");

    const butClickHandler = () => {
       alert ( `SET ${selectedTest} to user ${selectedFIO} before ${selectedDate}`);
    //    https://cab07.000webhostapp.com/new_refact/new_admin_AddTasks.php?USER_FIO=IvanovOO&TEST_NAME=CY_2020_1&START_DATE_TIME=2021-02-09&END_DATE_TIME=2021-02-09
    fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_AddTasks.php?
            USER_FIO=${selectedFIO}&
            TEST_NAME=${selectedTest}&
            START_DATE_TIME=2021-01-02&
            END_DATE_TIME=${selectedDate}`)
          .then((res) => res.json())
          .then(
            (result) => {
                alert(result.message)
            })
    }
 
    const handleTest = (event: React.ChangeEvent<{ value: unknown }>) => { console.log("")};

    useEffect(()=>{
        fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_getUsersAndTests.php`)
          .then((res) => res.json())
          .then(
            (result) => {
                setUsersFIO(result.users);
                setTestsname(result.tests);
             })
    },[]);
    return (
        <div className = "AdminAddTask">
        <FormControl >
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"     
            value = { selectedFIO }       
            onChange ={ e => setSeletedFIO(e.target.value as string) }
        >
         { usersFIO.map ( el => {
             return (
                 <MenuItem value = {el}>{el}</MenuItem>
             )
         })}        
        </Select>
      </FormControl>

      <FormControl >
            <InputLabel id="demo-simple-select-label">Test</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"            
            onChange = { e => setSelectedTest(e.target.value as string) }
        >
         { testsName.map ( el => {
             return (
                 <MenuItem value = {el}>{el}</MenuItem>
             )
         })}        
        </Select>
      </FormControl>
       <input
            type = "date"
            value = { selectedDate }
            onChange = { e => setSelectedDate( e.target.value as string)}
            ></input>
            <Button
                onClick = { butClickHandler }>set</Button>
                    </div>
    )
}