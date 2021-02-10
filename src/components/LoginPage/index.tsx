import { Button, TextField } from "@material-ui/core";
import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";

export const LoginPage: React.FC = () => {
  const dispatch:Dispatch<any> = useDispatch();

  const [ login, setLogin ] = useState("");
  const [ pass,  setPass  ] = useState("");
  
  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => { setLogin(e.target.value) };
  const passHandler = (e: React.ChangeEvent<HTMLInputElement>) =>  { setPass(e.target.value)  };

  const LoginButHandler = () => {
    if ( login !== "" && pass !=="") {
        fetch(`https://cab07.000webhostapp.com/sql_login.php?login=${login}&pass=${pass}`)
          .then((res) => res.json())
          .then(
            (result) => { 
                const newUser: IUserData = { 
                    UserId: result.userId || -1,
                    UserFIO: result.userFIO || "",
                    UserSchool : result.userSchool || "",
                    UserClass : result.userClass || ""
                };
                switch ( newUser.UserId ) {
                    case -1 : 
                        alert("Памылка логіна альбо пароля");
                        break;
                    case 0 : 
                        alert("Admin");
                        break;
                    default :
                        dispatch({
                            type: "LogIn",
                            newUserData: newUser
                        });
                }
            },     
            (error) => {
              alert("Login pass error " + login + "___" + pass);
            }
          );
      }
      else {
        alert( "Нельга застаўляць палі пустымі!");
      };     
  };

  return (
    <div className="LoginPage ">
      <TextField
        id="standard-basic"
        className="LP_login"
        label="Логін"
        onChange={loginHandler}
        value={login}
      />
      <TextField
        id="standard-basic"
        className="LP_pass"
        type="password"
        label="Пароль"
        onChange={passHandler}
        value={pass}
      />
      <Button variant="contained" color="primary" onClick={LoginButHandler}>
        Уваход
      </Button>
    </div>
  );
};
