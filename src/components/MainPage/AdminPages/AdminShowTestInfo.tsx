import React from 'react';
import { useSelector } from 'react-redux';

export const AdminShowTestInfo:React.FC = () => {
    const curShowTestInfoId = useSelector((state:IRootState) => state.curShowTestInfoId);
    return (
        <div className = "AdminShowTestInfo">
            { curShowTestInfoId}
        </div>
    )
}