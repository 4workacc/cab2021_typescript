interface IUser {
    id : number,
    fio : string
}

type SiteState = {
    curPage : string,
    curSubPage : string,
    curUserId : int
}

type SiteAction = {
    type : string
}

type DispatchType = (args:SiteAction) => SiteAction;