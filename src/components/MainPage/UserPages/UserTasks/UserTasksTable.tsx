import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

const useStyles = makeStyles({
    tablecell : {
        fontSize: "25px",
    },
  });

export const UserResultsTab: React.FC = () => {
    const classes = useStyles();
    const dispatch:Dispatch<any> = useDispatch();
    const curUserFIO = useSelector((state:IRootState) => state.curUser.UserFIO);
    const [ curShowTasks, setCurShowTasks ] = useState<any[]>([]);

    useEffect(()=>{        
        fetch(`https://cab07.000webhostapp.com/new_refact/new_user_getTasks.php?request_user_fio=${curUserFIO}`)
        .then( (res)=>res.json())
        .then (
            (result) => {           
                let arr:any[] = [];     
                result.tasks.map ( (el:any) => {
                    arr.push(                     
                        {
                            test_id : el.task_id,
                            test_name: el.task_test_name,
                            dateTime: el.task_end_time,
                            attepts_count: el.task_attempts_count
                        }
                    )
                })  
                setCurShowTasks(arr);                  
            }
        );               
    },[curUserFIO]);
    const userTaksTrClickHandler = (id: number ) => {
        dispatch ({
            type : "ShowTest",
            testID : id
        })
    }
    return (
        <div className="UserTasksTab">           
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" className="UserTasksTab" >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    key={"01"}
                                    align="center"
                                    style={{ minWidth: "250px" }}
                                    className={classes.tablecell}
                                >
                                    Test name
                                </TableCell>
                                <TableCell
                                    key={"02"}
                                    align="center"
                                    style={{ minWidth: "200px" }}
                                    className={classes.tablecell}
                                >
                                    Test Date
                                </TableCell>
                                <TableCell
                                    key={"03"}
                                    align="center"
                                    style={{ minWidth: "100px" }}
                                    className={classes.tablecell}
                                >
                                    Attempts count
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>     
                            { curShowTasks.map ( el => {
                                return (
                                    <TableRow 
                                        hover
                                        key = {el.test_id} 
                                        onClick = { () => { userTaksTrClickHandler(el.test_id)}}>
                                        <TableCell align="center" key={el.test_id+"01"} className={classes.tablecell}>{el.test_name}</TableCell>
                                        <TableCell align="center" key={el.test_id+"02"} className={classes.tablecell}>{el.dateTime}</TableCell>
                                        <TableCell align="center" key={el.test_id+"02"} className={classes.tablecell}>{el.attepts_count}</TableCell>
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