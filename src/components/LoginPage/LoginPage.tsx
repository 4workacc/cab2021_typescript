// import * as React from 'react';

// import "./LoginPage.css";

// interface IPage {
//     test ?: string;
// }

// export const LoginPage = ({test = "123123123"}:IPage) => {
//     return (
//         <div className = "LoginPage">    
//                 {test}
//         </div>
//     )
// }
import * as React from 'react';
type Props = {
    label ?: string
};
export const LoginPage:React.FC<Props> = ({label = "123123"}) => {
  
    return (
        <div>
asd
        </div>
    )
};