import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    tablecell : {
        fontSize: "25px",
    },
  });

export const UserResultsTab: React.FC = () => {
    const classes = useStyles();
    const curUserFIO = useSelector((state:IRootState) => state.curUser.UserFIO);
    const [ curShowTasks, setCurShowTasks ] = useState<any[]>([]);

    useEffect(()=>{        
        fetch(`https://cab07.000webhostapp.com/new_refact/new_user_getTestsResults.php?request_user_fio=${curUserFIO}`)
        .then( (res)=>res.json())
        .then (
            (result) => {           
                let arr:any[] = [];   

                result.results.map ( (el:any) => {
                    arr.push(                     
                        {   
                            task_id: el.task_id,
                            test_id : el.test_id,
                            test_name: el.test_name,
                            dateTime: el.dateTime,
                            result: el.result
                        }
                    )
                })  
                setCurShowTasks(arr.reverse());                  
            }
        );               
    },[curUserFIO]);
    return (
        <div className="UserResultsTab">           
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" className="UserResultsTab" >
                        <TableHead>
                            <TableRow>
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
                                    <>
                                    <TableRow>
                                        <TableCell align = "center">midvalue</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        hover
                                        key = {el.test_id} >
                                        <TableCell align="center" key={el.test_id+"01"} className={classes.tablecell}>{el.test_name}_{el.task_id}</TableCell>
                                        <TableCell align="center" key={el.test_id+"02"} className={classes.tablecell}>{el.dateTime}</TableCell>
                                        <TableCell align="center" key={el.test_id+"02"} className={classes.tablecell}>{el.result}</TableCell>
                                    </TableRow>
                                    </>  
                                )
                            } )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}