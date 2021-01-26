import './App.css';

import { LoginPage } from '../LoginPage/LoginPage';
// import MainPage  from '../MainPage/MainPage';

import React, { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux'; 

const App = () => {
 // const curStatePage = useSelector( state => state.curPage );
  const [ curPage, switchPage ] = useState(<LoginPage />);

  // useEffect (() => {
  //   switch ( curStatePage ) {
  //     case "LoginPage" : switchPage(<LoginPage />); break;
  //     // case "MainPage"  : switchPage(<MainPage />); break;
  //     default : switchPage(<LoginPage/>); break;
  //   }
  // }, [curStatePage])

  return (
    <div className="App">
      {curPage}
    </div>
  );
}

export default App;
