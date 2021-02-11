import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { TestBase } from '../../../store/Tests';
import { TestTemplate_A_0 } from './TestPageTemplates/TestPageTemplate_A_0';
import { TestTemplate_A_1 } from './TestPageTemplates/TestPageTemplate_A_1';
import { TestTemplate_A_2 } from './TestPageTemplates/TestPageTemplate_A_2';
import { TestTemplate_B_0 } from './TestPageTemplates/TestPageTemplate_B_0';
import { TestTemplate_B_1 } from './TestPageTemplates/TestPageTemplate_B_1';

interface IQuest {
    quest: string,
    type: string,
    answers?: any,
    questText?: any,
    questTextArr?:string[],
    id?:string,
    right?:string,
};
const shuffle = (array:any[]):void => {
    array.sort(() => Math.random() - 0.5);
  }

export const TestPage:React.FC = () => {
    const dispatch:Dispatch<any> = useDispatch();
    const curTestName = useSelector((state:IRootState) => state.curTestName);    
    const [ curTestsQuests, setCurTestsQuests ] = useState<any[]>([]);

    const [ curQuestIndex, incrQuestIndex ] = useState(0);
    const [ rightCount, incrRightCount ] = useState(0);

    const curUserAnswer = useSelector((state:IRootState) => state.curUserAnswer);

    const [ rArr, setRArr ] = useState<string[]>([]);
    const [ rTypes, setRTypes ] = useState<string[]>([]);
    const [ rAnswers, setRAnswers ] = useState<string[]>([]); 

    useEffect (() => { 
        let curTestsSet:any[]= [];
        let rr:any[] = [];
        let tt:any[] = [];
        TestBase.map ( (el:any) => {
            if ( el.testSetName === curTestName ) {
                let qq:any = el.questions;
                //shuffle(qq);
                qq.map ( (al:IQuest) => {
                        switch (al.type) {
                            case "A_0" :
                                curTestsSet.push(<TestTemplate_A_0 quest={al.quest} answers={al.answers} />); break;
                            case "A_1" :
                                curTestsSet.push(<TestTemplate_A_1 quest={al.quest} answers={al.answers} />); break;
                            case "A_2" :
                                curTestsSet.push(<TestTemplate_A_2 quest={al.quest} questText = {al.questText} answers={al.answers} />); break;
                            case "B_0" :
                                curTestsSet.push(<TestTemplate_B_0 quest={al.quest} questText = {al.questText} />); break;
                            case "B_1" :
                                curTestsSet.push(<TestTemplate_B_1 quest={al.quest} questTextArr = {al.questTextArr || []}/>); break;
                        };
                        rr.push(al.right);
                        tt.push(al.id);                        
                })
            };
        });   
        setRArr(rr);
        setRTypes(tt);                 
        setCurTestsQuests( curTestsSet );
    },[ curTestName])


    const clickHandler = () => {
        if (curUserAnswer === rArr[curQuestIndex]) {
            alert ("Right");
            incrRightCount( rightCount +1 );
        };
        if ( curQuestIndex < curTestsQuests.length -1) {
            incrQuestIndex( curQuestIndex + 1);
            dispatch({
                type :"SetUserAnswer",
                curUserAnswer : ""
            })        
        }
        else {
            alert(`Right count: ${rightCount} of ${curTestsQuests.length} ( ${ rightCount/curTestsQuests.length*100})`)
            dispatch({
                type : "ShowSubPage",
                newSubPage: "UserTasks"
            })
        }
        
    };

    return (
        <div className = "TestPage">                
            { curTestsQuests[curQuestIndex]}
            <Button
                onClick = { clickHandler }
                >Answer</Button>
        </div>
    )
}