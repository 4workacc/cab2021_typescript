import { initState } from "./state";

const rootReducer = (
    state: IRootState = initState,
    action : IRootAction
): IRootState => {
    switch ( action.type ) {       
        case "LogIn" :
            return {
                ...state,
                curUser : action.newUserData || state.curUser,
                curPage : "MainPage",
                curSubPage: action.newUserData?.UserFIO === "Admin" ? "AdminAddTask" : "UserTasks"
            };
        case "ShowSubPage": 
            return {
                ...state,
                curSubPage : action.newSubPage || state.curSubPage
            };
        case "LogOut" :
            return {
                ...state,
                curPage : "LoginPage"
            }
        default :
            return state;
    }    
}

export default rootReducer;