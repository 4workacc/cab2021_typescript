import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const AdminShowTestInfo:React.FC = () => {
    const curShowTestInfoId = useSelector((state:IRootState) => state.curShowTestInfoId);
    const [ curTestData, setCurTestData ] = useState<any>({});
    useEffect(()=>{
        fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_GetTestInfo.php?request_test_id=${curShowTestInfoId}`)
        .then((res) => res.json())
        .then(
          (result) => {
                result.results.map ( (el:any) => {
                    setCurTestData( el );
                })
           })
    
    },[curShowTestInfoId])
    return (
        <div className = "AdminShowTestInfo">
            <p>Cur test name {curTestData.test_name}</p>
            <p>Cur user fio {curTestData.user_fio}</p>
            <p>Cur test result {curTestData.result}</p>
            <p>Test date time {curTestData.dateTime}</p>
            <p>result {curTestData.result}</p>
            <p>answers {curTestData.answers}</p>
            <Paper>
                
            </Paper>
        
        </div>
    )
}