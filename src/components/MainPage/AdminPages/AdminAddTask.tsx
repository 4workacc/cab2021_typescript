import { Button, FormControl, InputLabel, MenuItem, MuiThemeProvider, Select } from "@material-ui/core";
import React, { useState } from "react";

export const AdminAddTask: React.FC = () => {
    const [ usersFIO, setUsersFIO ] = useState<string[]>(["f1", "f2", "f3", "f4"]);
    const [ testsName, setTestsname ] = useState<string[]>(["1", "2", "3"]);

    const [ selectedFIO, serSeletedFIO ] = useState("");
    const [ selectedTest, setSelectedTest ] = useState("");
    const [ selectedDate, setSelecetedDate ] = useState("");

    const butClickHandler = () => {
       alert ( `SET ${selectedTest} to user ${selectedFIO} before ${selectedDate}`);
    }
    const handleUser = (event: React.ChangeEvent<{ value: unknown }>) => {console.log(event.currentTarget.value)};
    const handleTest = (event: React.ChangeEvent<{ value: unknown }>) => { console.log("")}
    return (
        <div className = "AdminAddTask">
        <FormControl >
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"     
            value = { selectedFIO }       
            onChange={ handleUser }
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
            onChange = { handleTest }
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
            ></input>
            <Button>set</Button>
                    </div>
    )
}