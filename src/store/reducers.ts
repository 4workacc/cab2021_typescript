import { initState } from "./state";

const rootReducer = (
    state: SiteState = initState,
    action : SiteAction
): SiteState => {
    switch ( action.type ) {
        case "LogIn" :
            return  {
                ...state,
                curPage : "MainPage",
                curUserFio : "IvanovII"
            }; 
        case "LogOut" : 
            return {
                ...state,
                curPage : "LoginPage",
                curUserId : -1,
                curUserFio : ""
            }; 
        case "GoToSubPage" :               
                return {
                    ...state,
                    curPage : "MainPage",
                    curSubPage: action.curSubPage||"MainMenu"
                }
        default :
            return state;
    }    
}

export default rootReducer;