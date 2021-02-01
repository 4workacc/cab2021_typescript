interface IUser {
    id : number,
    fio : string
}

type SiteState = {
    curPage : string,
    curSubPage : string,
    curUserId : int,
    curUserFio : string
}

type SiteAction = {
    type : string,
    curSubPage?:string
}

interface IUserTest {
    id : number,
    title : string,
    startDate?: string,
    endDate: string,
    active: boolean,
    availible?:boolean,
    result?: number
}


type DispatchType = (args:SiteAction) => SiteAction;