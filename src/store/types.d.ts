interface IUser {
  id: number;
  fio: string;
}
interface IUserTestResults {
  id: number;
  title: string;
  endDate: string;
  result?: number;
}

interface IQuestion {
  id: string;
  theme: string;
  type: string;
  quest: string;
  questText?: string;
  questTextArr?: string[]
  answers?: string[];
  right: string;
}

interface ITestSet {
  testSetName: string;
  id: number;
  questions: IQuestion[];
}

interface ITask {
  allowesList: IUser[];
  testTest: ITestSet;
  startDate: string;
  endDate: string;
}

type SiteState = {
  curPage: string;
  curSubPage: string;
  curUserId: int;
  curUserFio: string;
  curTest: string;
};

type SiteAction = {
  type: string;
  curSubPage?: string;
};

type DispatchType = (args: SiteAction) => SiteAction;
