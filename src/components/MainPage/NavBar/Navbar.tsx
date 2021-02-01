import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import "./Navbar.css";

export const NavBar: React.FC = () => {
  const curUserFio = useSelector((state: SiteState) => state.curUserFio);
  const dispatch: Dispatch<any> = useDispatch();
  const navHandler = (targetPage: string) => {
    dispatch({
      type: "GoToSubPage",
      curSubPage: targetPage
    })
  }
  const exitHandler = () => {
    dispatch({
      type: "LogOut"
    })
  }
  return (
    <div className = "NavBar"> 
      <p>{`Прывітанне, ${curUserFio}`}</p>
    <ul>
    <li><a
            onClick={() => navHandler("Tasks")}>Заданні</a></li>
          {/* <li><a
            onClick={() => navHandler("Cabinet")}>Кабінет</a></li> */}
          <li><a
            onClick={() => navHandler("TestsResults")}>Вынікі тэстаў</a></li>
          <li><a
            onClick={exitHandler} >Выхад</a></li>
    </ul>
  </div>
  )
}

