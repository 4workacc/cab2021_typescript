import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { LoginPage } from '../LoginPage/LoginPage';
import { MainPage } from '../MainPage/MainPage';
import './App.css';

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const curPage: string = useSelector( (state:SiteState) => state.curPage)

  const [ curShowPage, changeCurShowPage ] = React.useState(<LoginPage />);

  React.useEffect( ()=>{
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

export default App;
