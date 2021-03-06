import { Button, LinearProgress, makeStyles } from '@material-ui/core';
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
    theme?:string
};
const shuffle = (array:any[]):void => {
    array.sort(() => Math.random() - 0.5);
  }
const useClass = makeStyles({
    button :{
        left: "47%",
        top: "200px",
        transform: "scale(2)"
    },
    buttonErr : {
        left: "100%",
        top: "50%",
        transform: "scale (0.6)"
    },
    timerTimer: {
        width: "100%",
        textAlign: "center",
        fontSize: "20px",
        paddingTop: "-50px"

    },
    timerLinear: {},
    timerContainer: {
        position: "absolute",
        width: "100%",
        height: "50px",
        top: "100%",
        left: "50%",
        border: "1px solid black"
    }

})

export const TestPage:React.FC = () => {
    const dispatch:Dispatch<any> = useDispatch();
    const classes = useClass();

    const [ curTime, changeTime ] = useState( 180 );

    const curTestName = useSelector((state:IRootState) => state.curTestName);    
    const curTestId = useSelector((state:IRootState) => state.curTestId);
    const curUserFIO = useSelector((state:IRootState) => state.curUser.UserFIO);

    const [ curTestsQuests, setCurTestsQuests ] = useState<any[]>([]);

    const [ curQuestIndex, incrQuestIndex ] = useState(0);
    const [ rightCount, incrRightCount ] = useState(0);

    const curUserAnswer = useSelector((state:IRootState) => state.curUserAnswer);

    const [ rQuest, setrQuest ] = useState<string[]>([]);
    const [ rArr, setRArr ] = useState<string[]>([]);
    const [ rIds, setRIds ] = useState<string[]>([]);
    const [ rThemes, setRThemes ] = useState<string[]>([]);
    const [ rAnswers, setRAnswers ] = useState<string[]>([]); 

    useEffect (() => { 
        let curTestsSet:any[]= [];
        let rq:any[] = []
        let rr:any[] = [];
        let tIds:any[] = [];
        let tTemes:any[] = [];
        TestBase.map ( (el:any) => {
            if ( el.testSetName === curTestName ) {
                let qq:any = el.questions;
                shuffle(qq);                
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
                        rq.push(al.quest);
                        rr.push(al.right);
                        tIds.push(al.id);                        
                        tTemes.push(al.theme);
                })
            };
        });   
        setRArr(rr);
        setRIds(tIds);
        setRThemes(rThemes);                 
        setCurTestsQuests( curTestsSet );
        setrQuest(rq);
    },[ curTestName]);    

    useEffect(() => {
        if ( curTime>0 ) {
            const timer = setInterval(() => {
                changeTime( curTime - 1)
            }, 1000);
            return () => clearTimeout(timer);
        }
        else {
            alert( "Time is over! ");
        }
      });
   
   const errclickHandler = () => {
        fetch( `https://cab07.000webhostapp.com/new_refact/new_admin_getErrMessage.php?ERR_MESSAGE=${curTestName} ${rIds[curQuestIndex]}`)
        .then((res) =>res.json());
        alert("Пра памылку паведамлена!!")
    }
    const clickHandler = () => {
        if (curUserAnswer === rArr[curQuestIndex]) {
            alert ("Дакладна!");
            incrRightCount( rightCount +1 );
        };
        if ( curQuestIndex < curTestsQuests.length -1) {
            let yy = rAnswers;
            yy.push( `${rIds[curQuestIndex]}_${rThemes[curQuestIndex] || ""}_${curUserAnswer === rArr[curQuestIndex]}_${curUserAnswer!}`);
            setRAnswers( yy );
            incrQuestIndex( curQuestIndex + 1);
            dispatch({
                type :"SetUserAnswer",
                curUserAnswer : ""
            });                   
        }
        else {
            let rez:number = Math.floor(rightCount/curTestsQuests.length*100);
            let anss = rAnswers.join("@");
            alert(`Right count: ${rightCount} of ${curTestsQuests.length} ( ${ rez })`)
            dispatch({
                type : "ShowSubPage",
                newSubPage: "UserTasks"
            });
            let dt = Date.now();
            let ct = (""+new Date(dt)).split("G")[0] as string;      
                 
            fetch( `https://cab07.000webhostapp.com/new_refact/new_user_updateTasksAttemptsCount.php?
            TASK_ID=${curTestId}`)
            .then((res)=>res.json());

            fetch( `https://cab07.000webhostapp.com/new_refact/new_user_setTestResult.php?
                task_id=${curTestId}&
                test_name=${curTestName}&
                user_fio=${curUserFIO}&
                date_time=${ct}&
                user_result=${rez}&
                user_answers=${anss}`)            
            .then((res) => res.json())     
        };       
    };
 
    return (
        <div className = "TestPage">                
            { curTestsQuests[curQuestIndex]}
            <Button 
                variant="contained" 
                color="primary"
                className = {classes.button}
                onClick = { clickHandler }
                >Адказаць</Button>
            <Button
              variant="contained" 
              color="secondary"
              className = {classes.buttonErr}
              onClick = { errclickHandler }
              >Націсніце, калі ўбачылі памылку!</Button>
            <div className = "Timer">
            <p className={classes.timerTimer}>{ Math.floor(curTime/60) }:{curTime - 60*Math.floor(curTime/60)} </p>
            <LinearProgress 
                variant="determinate"
                value = {  curTime/180 *100 }></LinearProgress >                
            </div>
            
        </div>
    )
}