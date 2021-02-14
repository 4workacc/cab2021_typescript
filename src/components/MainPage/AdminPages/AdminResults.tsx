import { FormControl, InputLabel, makeStyles, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

const useStyles = makeStyles({
    tablecell : {
        fontSize: "25px",
    },
  });

export const AdminResults: React.FC = () => {
    const dispatch:Dispatch<any> = useDispatch();
    const classes = useStyles();
    const [ curFullTestList, setCurFullTestList ] = useState<any[]>([]);
    const [ curShowTasks, setCurShowTasks ] = useState<any[]>([]);

    const [ usersFIO, setUsersFIO ] = useState<string[]>(["f1", "f2", "f3", "f4"]);
    const [ testsName, setTestsname ] = useState<string[]>(["1", "2", "3"]);

    const [ selectedFIO, setSeletedFIO ] = useState("");
    const [ selectedTest, setSelectedTest ] = useState("");

    useEffect(()=>{        
        fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_GetResults.php`)
        .then( (res)=>res.json())
        .then (
            (result) => {           
                let arr:any[] = [];   

                result.results.map ( (el:any) => {
                    arr.push(                     
                        {   
                            user_fio: el.user_fio,
                            task_id: el.task_id,
                            test_id : el.test_id,
                            test_name: el.test_name,
                            dateTime: el.dateTime,
                            result: el.result
                        }
                    )
                })  
                setCurFullTestList(arr.reverse());
                setCurShowTasks(arr.reverse())                  
            }
        );               
    },[]);
    useEffect(()=>{
        fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_getUsersAndTests.php`)
          .then((res) => res.json())
          .then(
            (result) => {
                setUsersFIO(result.users);
                setTestsname(result.tests);
             })
    },[]);
    const trClickHandler = (id:number) => {
        dispatch({
            type: "ShowTestInfo",
            showTestId : id
        })
    };
    return (
        <div className="UserResultsTab">        
        <FormControl >
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"     
            value = { selectedFIO }       
            onChange ={ e => {
                let x: string = e.target.value as string;
                setSeletedFIO( x );
                let showArr:any[] = curFullTestList;
                let newArr:any[] = [];
                showArr.map ( (el:any) =>{
                    if (el.user_fio === x ) {
                        newArr.push(el);
                    }
                });
                setCurShowTasks(newArr);
             }
            }
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
            onChange = { e => {
                let x: string = e.target.value as string;
                setSelectedTest( x );
                let showArr:any[] = curFullTestList;
                let newArr:any[] = [];
                showArr.map ( (el:any) =>{
                    if (el.test_name === x ) {
                        newArr.push(el);
                    }
                });
                setCurShowTasks(newArr);
            }
        }                
        >
         { testsName.map ( el => {
             return (
                 <MenuItem value = {el}>{el}</MenuItem>
             )
         })}        
        </Select>
      </FormControl>   
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" className="UserResultsTab" >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    key={"00"}
                                    align="center"
                                    style={{ minWidth: "250px" }}
                                    className={classes.tablecell}
                                >
                                   User fio
                                </TableCell>
                                <TableCell
                                    key={"01"}
                                    align="center"
                                    style={{ minWidth: "250px" }}
                                    className={classes.tablecell}
                                >
                                   Назва тэста
                                </TableCell>
                                <TableCell
                                    key={"02"}
                                    align="center"
                                    style={{ minWidth: "200px" }}
                                    className={classes.tablecell}
                                >
                                    Дата выканання
                                </TableCell>
                                <TableCell
                                    key={"03"}
                                    align="center"
                                    style={{ minWidth: "100px" }}
                                    className={classes.tablecell}
                                >
                                    Вынік
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>     
                            {/* select results by task id to arr
                            show 
                            <tableRow>
                                <test name><medium value>
                            <table row>
                                <attempt date><attempt result>
                                <attempt date><attempt result>
                                <attempt date><attempt result>
                                
                            */}
                            { curShowTasks.map ( el => {
                                return (
                                    <TableRow 
                                        hover
                                        key = {el.test_id} 
                                        onClick = { ()=>trClickHandler(el.test_id) }>
                                        <TableCell align="center" key={el.test_id+"00"} className={classes.tablecell}>{el.user_fio}</TableCell>
                                        <TableCell align="center" key={el.test_id+"01"} className={classes.tablecell}>{el.test_name}_{el.task_id}</TableCell>
                                        <TableCell align="center" key={el.test_id+"02"} className={classes.tablecell}>{el.dateTime}</TableCell>
                                        <TableCell align="center" key={el.test_id+"02"} className={classes.tablecell}>{el.result}</TableCell>
                                    </TableRow>                                     
                                )
                            } )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}