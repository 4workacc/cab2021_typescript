import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TestBase } from '../../../store/Tests';
import { TestTemplate_A_0 } from './TestPageTemplates/TestPageTemplate_A_0';
import { TestTemplate_A_1 } from './TestPageTemplates/TestPageTemplate_A_1';
import { TestTemplate_A_2 } from './TestPageTemplates/TestPageTemplate_A_2';

interface IQuest {
    quest: string,
    type: string,
    answers?: any,
    questText?: any,
}

export const TestPage:React.FC = () => {
    const curTestName = useSelector((state:IRootState) => state.curTestName);    
    const [ curTestsQuests, setCurTestsQuests ] = useState<any[]>([]);
    const [ curQuestIndex, incrQuestIndex ] = useState(0);

    useEffect (() => {
        let curTestsSet:any[]= [];
        TestBase.map ( (el:any) => {
            if ( el.testSetName === curTestName ) {
                el.questions.map ( (al:IQuest) => {
                        switch (al.type) {
                            case "A_0" :
                                curTestsSet.push(<TestTemplate_A_0 quest={al.quest} answers={al.answers} />); break;
                            case "A_1" :
                                curTestsSet.push(<TestTemplate_A_1 quest={al.quest} answers={al.answers} />); break;
                            case "A_2" :
                                curTestsSet.push(<TestTemplate_A_2 quest={al.quest} questText = {al.questText} answers={al.answers} />); break;
                        }
                })
            };
        });        
        setCurTestsQuests( curTestsSet );
    },[ curTestName])

    return (
        <div className = "TestPage">                
            { curTestsQuests[curQuestIndex]}
            <Button
                onClick = { ()=> { incrQuestIndex( curQuestIndex + 1) }}
                >Answer</Button>
        </div>
    )
}