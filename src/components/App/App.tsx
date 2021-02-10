import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { LoginPage } from '../LoginPage';
import { MainPage } from '../MainPage';
import './App.css';

export const App: React.FC = () => {
  const curPage: string = useSelector( (state:IRootState) => state.curPage)

  const [ curShowPage, changeCurShowPage ] = useState(<LoginPage />);

  useEffect( ()=>{
    switch ( curPage ) {
      case "LoginPage" : changeCurShowPage(<LoginPage />); break;
      case "MainPage"  : changeCurShowPage(<MainPage />); break;
      default :  changeCurShowPage(<LoginPage />);
    }
  }, [curPage])

  return (
    <>     
     {curShowPage}     
    </>
  )
}