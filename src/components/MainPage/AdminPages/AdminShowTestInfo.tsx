import { makeStyles, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TestBase } from '../../../store/Tests';
import { AdminShowTestInfoTest } from './AdminShowTestInfoTest';

interface Tab{
    id: string;
    rightAns: string;
    userAns: string;
}

const useStyles = makeStyles({
    Main: {
        width: "1100px",
        height: "700px",        
    },
    tabA : {
        width: "100%"
    },
    TCA : {     
        width: 10,
        fontSize:"18px",
        textAlign : "center"
    },
    tabB : {
        width: "100%"
    },
    TCB : {
        maxWidth: "100px",       
        fontSize:"14px",
        textAlign : "center"
    },
    right : {
        color: "green"
    },
    bad : {
        color: "red"
    },
    title : {
        fontSize: "25px",
        textAlign: "center",
        width: "100%"
    }
})

function compare( a:Tab, b:Tab ) {   
    let q:any = (a.id).substr(1);    
    let w:any = (b.id).substr(1);
    if ( ( q /1 ) < ( w / 1 ) ){
      return -1;
    }
    if ( (q / 1 ) > ( w / 1) ){
      return 1;
    }
    return 0;
  }

export const AdminShowTestInfo:React.FC = () => {
    const classes = useStyles();
    const curShowTestInfoId = useSelector((state:IRootState) => state.curShowTestInfoId);
    const [ curTestData, setCurTestData ] = useState<any>({});

    const [ showTest, setShowTest ] = useState([]);
    
    const [ curATab, setATab ] = useState<Tab[]>([]);
    const [ curBTab, setBTab ] = useState<Tab[]>([]);

    useEffect(()=>{
        let curTest: any[] = [];
        let aTab:Tab[] = [];
        let bTab:Tab[] = [];     

        fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_GetTestInfo.php?request_test_id=${curShowTestInfoId}`)
        .then((res) => res.json())
        .then(
          (result) => {                
                setCurTestData( result.results[0] ); 
                TestBase.map ( (el:any) =>{
                    if (el.testSetName === result.results[0].test_name) {
                        curTest = el.questions;
                        setShowTest( el.questions );
                    }
                });
                   
                result.results[0].answers.split('@').map ( (el:string) => {
                    if (el.split('_')[0][0] === "A") {
                        let qq: any;
                        curTest.map( (al:any) => {
                            if (al.id === el.split('_')[0]) {
                                qq = al.right;
                            }
                        });
                        aTab.push({
                            id: el.split('_')[0],
                            userAns: el.split('_')[3],
                            rightAns: qq
                        })
                    }
                    else {
                        let qq: any;
                        curTest.map( (al:any) => {
                            if (al.id === el.split('_')[0]) {
                                qq = al.right;
                            }
                        });
                        bTab.push({
                            id: el.split('_')[0],
                            userAns: el.split('_')[3],
                            rightAns: qq
                        })
                    }                    
                })      
                aTab.sort( compare );
                setATab( aTab ); 
                bTab.sort( compare );
                setBTab ( bTab );              
           });
                
    },[curShowTestInfoId]);
    return (
        <div className = {classes.Main}>
            <p className = {classes.title}>Тэст: {curTestData.test_name}</p>
            <p className = {classes.title}>Выканаў:  {curTestData.user_fio}</p>
            <p className = {classes.title}>Вынік: {curTestData.result} %</p>
            <p className = {classes.title}>Дата выканання: {curTestData.dateTime}</p>

            <Paper>
                <TableContainer className = {classes.tabA}>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            { curATab.map( (el:Tab) => {
                                return (
                                    <TableCell className={classes.TCA}>{el.id}</TableCell>
                                )                                    
                            })}
                        </TableRow>                        
                    </TableHead>   
                    <TableBody>
                        <TableRow>
                            <TableCell>Адказ</TableCell>  
                            { curATab.map( (el:Tab) => {
                                return (
                                    <TableCell className={classes.TCA}>{el.rightAns}</TableCell>
                                )
                            })}                            
                        </TableRow>                        
                        <TableRow>
                            <TableCell>Вучань</TableCell>    
                            { curATab.map( (el:Tab, ind:number) => {
                                return (
                                    <TableCell 
                                        className={`${classes.TCA} ${el.rightAns === el.userAns?classes.right:classes.bad}`}>
                                            {el.userAns.length>0?el.userAns:"-"}
                                            </TableCell>
                                )
                            })}                          
                        </TableRow>
                    </TableBody>               
                </TableContainer>

                <TableContainer className = {classes.tabB}>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            { curBTab.map( (el:Tab) => {
                                return (
                                    <TableCell className={classes.TCB}>{el.id}</TableCell>
                                )                                    
                            })}
                        </TableRow>                        
                    </TableHead>   
                    <TableBody>
                        <TableRow>
                            <TableCell>Адказ</TableCell>  
                            { curBTab.map( (el:Tab) => {
                                return (
                                    <TableCell className={classes.TCB}>{el.rightAns}</TableCell>
                                )
                            })}                            
                        </TableRow>                        
                        <TableRow>
                            <TableCell>Вучань</TableCell>    
                            { curBTab.map( (el:Tab, ind:number) => {
                                return (
                                    <TableCell 
                                        className={`${classes.TCB} ${el.rightAns === el.userAns?classes.right:classes.bad}`}>
                                        {el.userAns.length>0?el.userAns:"-"}    
                                    </TableCell>
                                )
                            })}                          
                        </TableRow>
                    </TableBody>               
                </TableContainer>
                <AdminShowTestInfoTest arr = { showTest }/>             
            </Paper>

        
        </div>
    )
}