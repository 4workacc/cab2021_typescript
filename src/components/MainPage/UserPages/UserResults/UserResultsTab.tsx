import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const UserResultsTab: React.FC = () => {
    const curUserFIO = useSelector((state:IRootState) => state.curUser.UserFIO);
    const [ curShowTasks, setCurShowTasks ] = useState<any[]>([]);
    // ;
    useEffect(()=>{
        let arr:any[] = [];
        fetch(`$sql = "SELECT * FROM 'cab2021_tasks' WHERE USER_FIO LIKE '".$_GET["request_user_fio"]."' "`)
        .then( (res)=>res.json())
        .then (
            (result) => {
                result.tasks.map ( (el:any) => {
                    arr.push(
                        <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={el.task_id}>
                                <TableCell key={el.task_id+"1"} align="center">{el.task_test_name}</TableCell>
                                <TableCell key={el.task_id+"3"} align="center">{el.task_end_time}</TableCell>
                                <TableCell key={el.task_id+"3"} align="center">{el.task_attempts_count}</TableCell>
                            </TableRow>
                    )
                })                    
            }
        );
        setCurShowTasks(arr);
    },[curUserFIO]);
    return (
        <div className="UserResultsTab">
            asdsd
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" className="UserResultsTab">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    key={"01"}
                                    align="center"
                                    style={{ minWidth: "250px" }}
                                >
                                    TableName
                                </TableCell>
                                <TableCell
                                    key={"02"}
                                    align="center"
                                    style={{ minWidth: "200px" }}
                                >
                                    TabDate
                                </TableCell>
                                <TableCell
                                    key={"03"}
                                    align="center"
                                    style={{ minWidth: "100px" }}
                                >
                                    TestResult
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {curShowTasks}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}