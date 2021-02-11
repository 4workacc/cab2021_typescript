import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from "./NavBar";

import { UserTasks } from "./UserPages/UserTasks/UserTasks";
import { UserResults } from "./UserPages/UserResults/UserResults";

import { AdminAddTask } from "./AdminPages/AdminAddTask";
import { AdminResults } from "./AdminPages/AdminResults";
import { AdminStatistics } from "./AdminPages/AdminStatistics";

import { TestPage } from './TestPage';

export const MainPage:React.FC = () => {  
    const curStateCurSubPage= useSelector((state:IRootState) => state.curSubPage); 
    const [ curShowSubPage, setCurShowSubPage ] = useState<any>();
 
    useEffect(()=> {
        let el:any =< AdminAddTask />;
        switch ( curStateCurSubPage ) {
            case "AdminAddTask" : 
                el = <AdminAddTask />;
                break;
            case "AdminResults" : 
                el = <AdminResults />;
                break;
            case "AdminStatistics" : 
                el = <AdminStatistics />;
                break;
            case "UserTasks" : 
                el = <UserTasks />;
                break;
            case "UserResults" : 
                el = <UserResults />;
                break;
            case "TestPage" : 
                el = <TestPage />;
                break;
            default :
                el = <UserTasks />;
        }
       setCurShowSubPage( el );
    },[ curStateCurSubPage]);

    return (
        <div className = "MainPage">     
            <NavBar />
            <div className = "container">
                { curShowSubPage }
            </div>
        </div>
    )
}