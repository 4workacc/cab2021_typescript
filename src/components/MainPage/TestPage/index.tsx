import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TestBase } from '../../../store/Tests';
import { TestTemplate_A_0 } from './TestPageTemplates/TestPageTemplate_A_0';

interface ITest {
    testId: number,
    testName: string,
}

export const TestPage:React.FC = () => {
    const curTestName = useSelector((state:IRootState) => state.curTestName);    
    const [ curTestsQuests, setCurTestsQuests ] = useState<any[]>([]);

    useEffect (() => {
        let curTestsSet: any[] = [];
        TestBase.map ( (el:any) => {
            if ( el.testSetName === curTestName ) {
                el.questions.map ( (al:any[]) => {
                    curTestsSet.push( al );
                })
            };
        });
        console.log( curTestsSet );
        setCurTestsQuests( curTestsSet );
    },[ curTestName])

    return (
        <div className = "TestPage">    
            <TestTemplate_A_0 quest={curTestsQuests[0].quest} answers={curTestsQuests[0].answers} />
            <Button>Answer</Button>
        </div>
    )
}