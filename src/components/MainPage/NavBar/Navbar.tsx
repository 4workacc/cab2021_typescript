import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

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
    <nav>
      <div className="nav-wrapper teal darken-1 px3">
        <a href="/" className="brand-logo">  {`Welcome, ${curUserFio}`}</a>
        <ul className="right hide-on-med-and-down">
          <li><a
            onClick={() => navHandler("Tasks")}>Tasks</a></li>
          <li><a
            onClick={() => navHandler("Cabinet")}>Cabinet</a></li>
          <li><a
            onClick={() => navHandler("TestsResults")}>TestsResults</a></li>
          <li><a
            onClick={exitHandler} >Exit</a></li>
        </ul>
      </div>
    </nav>
  )
}


