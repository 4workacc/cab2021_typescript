import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

interface Quest {
    id: string;       
    quest: string;     
    questText?: string;
    answers?: string[];
    right: string;
}

interface Test {
    arr: Quest[]
}

const useStyles = makeStyles({
    Accord : {
        display: "flex",
        flexDirection: "column"
    },
    head: {
        fontSize: "25px",
    }
})

export const AdminShowTestInfoTest = ({arr}:Test) => {
    const classes = useStyles();
    const [ curAcc, setCurAcc ] = useState<any[]>([]);

    useEffect(()=> {
        let q: any[] = [];
            arr.map( (al:Quest ) => {
                q.push(  
                    <Accordion >                  
                        <AccordionSummary className = {classes.head}>
                        <Typography> {al.id||""}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className = {classes.Accord}>
                            <p className = {classes.head}> {al.quest}</p>              
                            <p> {al.questText || ""}</p>                
                            {al.answers?al.answers!.map( (el:any, ind:number) => <p>{`${ind}.${el}`}</p>):"" }          
                            <p> {al.right }</p>
                        </AccordionDetails> 
                    </Accordion>                  
                )
            });
            setCurAcc( q );
    },[arr])
    return (  
        <>          
        {curAcc}            
        </>
    )
}
