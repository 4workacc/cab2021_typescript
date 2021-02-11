interface IUserData {
  UserId: number;
  UserFIO: string;
  UserSchool?: string;
  UserClass?: string;
}

interface IRootState {
  curPage: string;
  curSubPage: string;
  curUser: IUserData;
  curTestName?: string;
  curUserAnswer?:string;
}

interface IRootAction {
  type: string;
  newUserData?: IUserData;
  newSubPage?: string;
  testName?: string;
  curUserAnswer?:string;
}
