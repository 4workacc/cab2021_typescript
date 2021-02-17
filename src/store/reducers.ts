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
            };
        case "ShowTest" :
            return {
                ...state,
                curTestName: action.testName || "",
                curTestId : action.testId || -1,
                curSubPage : "TestPage"
            };
        case "SetUserAnswer" : 
            return {
                ...state,
                curUserAnswer: action.curUserAnswer || ""
            };
        case "ShowTestInfo" : 
            return {
                ...state,
                curSubPage : "AdminShowTestInfo",
                curShowTestInfoId: action.showTestId || -1
            };   
        default :
            return state;
    }    
}

export default rootReducer;