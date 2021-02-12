import { AppBar, Button, MenuItem, Toolbar } from '@material-ui/core';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const NavBar:React.FC = () => {
    const curStateUserData = useSelector((state:IRootState) => state.curUser);
    const [curUserData, setCurUserData] = useState<IUserData>({
        UserId : -1,
        UserFIO : ""
    });
    
    const [ curNavMenu, setCurNavMenu ] = useState([]);
    
    useEffect(()=>{
       setCurUserData(curStateUserData);     
    },[curStateUserData]);

    const dispatch:Dispatch<any> = useDispatch();
    const NavMenuClickHanlder = ( link:string ) => {
        dispatch({
            type: "ShowSubPage",
            newSubPage: link
        })
   };
   const NavMenuExitHandler = () => {
       dispatch({
           type : "LogOut"
       })
   };
    useEffect (() => {
       
        let menu:any;
        if (curUserData.UserFIO === "Admin" ) {
            menu = (
                <>                
                    <MenuItem
                        onClick = { () => {
                            NavMenuClickHanlder("AdminAddTask")
                        }}>Дадаць заданне</MenuItem>
                    <MenuItem
                        onClick = { () => {
                            NavMenuClickHanlder("AdminResults")
                        }}>Вынікі тэстаў</MenuItem>
                    <MenuItem
                        onClick = { () => {
                            NavMenuClickHanlder("AdminStatistics")
                        }}>Статыстыка</MenuItem>
                    <MenuItem
                        onClick = { () => {
                            NavMenuExitHandler();
                        }}>Выхад</MenuItem>
                    </>
            );
        }        
        else {
            menu = (
                <>                
                    <MenuItem
                        onClick = { () => {
                            NavMenuClickHanlder("UserTasks")
                        }}>Заданні</MenuItem>
                    <MenuItem
                        onClick = { () => {
                            NavMenuClickHanlder("UserResults")
                        }}>Вынікі тэстаў</MenuItem>                
                    <MenuItem
                        onClick = { () => {
                            NavMenuExitHandler();
                        }}>Выхад</MenuItem>
                    </>
            );
        }
        setCurNavMenu(menu);                
    }, [curUserData]);
   
   return (
        <div className = "NavBar">
            <AppBar position="static" className="NavBar">
                <Toolbar className="NavBar_1">
                    <Button color="inherit"> {`Прывітанне,  ${curUserData.UserFIO}`}</Button>       
                    <div className="NavBar_Nav">{curNavMenu}</div>
                </Toolbar>
            </AppBar>
        </div>
    )
}