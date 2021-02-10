import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React from 'react';

export const UserTasksTable:React.FC = () => {
    return (
        <div className ="UserTasksTable">
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
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
                                    style={{ minWidth: "100px"}}
                                >
                                    AttempsCount
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={"11"}>
                                <TableCell key={"011"} align="center">CT_2020_1</TableCell>
                                <TableCell key={"012"} align="center">2020-01-01 10:10:10</TableCell>
                                <TableCell key={"013"} align="center">3</TableCell>
                            </TableRow>                                                                                  
                        </TableBody>
                    </Table>
                </TableContainer>             
            </Paper>
        </div>
    )
}