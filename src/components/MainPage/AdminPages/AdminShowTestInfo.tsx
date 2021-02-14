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
            { curShowTestInfoId}
            { console.log(curTestData)}
        </div>
    )
}