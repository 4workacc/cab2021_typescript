import React from 'react';
import { useSelector } from 'react-redux';

interface ITest {
    testId: number,
    testName: string,

}

export const TestPage:React.FC = () => {
    const curTestID = useSelector((state:IRootState) => state.curTestID);
    
    return (
        <div className = "TestPage">    
            {curTestID}
        </div>
    )
}