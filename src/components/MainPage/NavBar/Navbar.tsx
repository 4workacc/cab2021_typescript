import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export const NavBar: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const cabinetHandler = () => {}
  const testsHander = () => {}
  const exitHandler = () => {
      dispatch ({
        type : "LogOut"
      })
  }
  return (
    <nav>
      <div className="nav-wrapper teal darken-1 px3">
        <a href="/" className="brand-logo"> Welcome, userName</a>
        <ul className="right hide-on-med-and-down">
          <li><a >Cabinet</a></li>
          <li><a >Tests</a></li>
          <li><a
            onClick={exitHandler} >Exit</a></li>
        </ul>
      </div>
    </nav>
  )
}
  
  
