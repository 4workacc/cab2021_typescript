import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import "./LoginPage.css";

export const LoginPage: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const LoginButHandler = () => {
        dispatch({
            type: "LogIn"
        })
    }
    return (
        <div className="LoginPage">
            <div className="input-field col s12">
                <input id="login_name" type="text" className="validate" />
                <label htmlFor="login_name">Лагін</label>
            </div>
            <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Пароль</label>
            </div>
            <a
                className="waves-effect waves-light btn bntCenter"
                onClick={LoginButHandler}>Увайсці</a>
        </div>
    )
} 