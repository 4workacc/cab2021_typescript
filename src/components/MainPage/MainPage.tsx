import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { NavBar } from "./NavBar/Navbar";
import { AdminPanel } from "./SubPages/AdminPanel";
import { Cabinet } from "./SubPages/Cabinet";
import { Tasks } from "./SubPages/Tasks";
import { TestsResults } from "./SubPages/TestsResults";
import { TestPage } from "./TestPage/TestPage";

import "./MainPage.css";

export const MainPage: React.FC = () => {
  const curSubPage = useSelector((state: SiteState) => state.curSubPage);
  const [curShowSubPage, changeCurShowSubPage] = React.useState(<Tasks />);

  React.useEffect(() => {
    switch (curSubPage) {
      case "Tasks":
        changeCurShowSubPage(<Tasks />);
        break;
      case "TestsResults":
        changeCurShowSubPage(<TestsResults />);
        break;
      case "Cabinet":
        changeCurShowSubPage(<Cabinet />);
        break;
      case "AdminPanel":
        changeCurShowSubPage(<AdminPanel />);
        break;
      case "TestPage":
        changeCurShowSubPage(<TestPage />);
        break;
      default:
        changeCurShowSubPage(<Tasks />);
    }
  }, [curSubPage]);
  return (
    <div className = "MainPage">
      <NavBar />
      <div className="container">{curShowSubPage}</div>
    </div>
  );
};
