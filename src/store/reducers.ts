import { initState } from "./state";

const rootReducer = (
    state: SiteState = initState,
    action : SiteAction
): SiteState => {
    switch ( action.type ) {
        case "LogIn" :
            return  {
                ...state,
                curPage : "MainPage"
            }; 
        case "LogOut" : 
            return {
                ...state,
                curPage : "LoginPage",
                curUserId : -1
            }; 
        default :
            return state;
    }    
}

export default rootReducer;