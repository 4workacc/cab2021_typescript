import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { NavBar } from "./NavBar/Navbar";
import { AdminPanel } from "./SubPages/AdminPanel";
import { Cabinet } from "./SubPages/Cabinet";
import { MainMenu } from "./SubPages/MainMenu";
import { Tests } from "./SubPages/Tests";

export const MainPage: React.FC = () => {
    const curSubPage = useSelector((state: SiteState) => state.curSubPage);
    const [curShowSubPage, changeCurShowSubPage] = React.useState(<MainMenu />);

    React.useEffect(() => {
        switch (curSubPage) {
            case "MainMenu":
                changeCurShowSubPage(<MainMenu />);
                break;
            case "Tests":
                changeCurShowSubPage(<Tests />);
                break;
            case "Cabinet":
                changeCurShowSubPage(<Cabinet />);
                break;
            case "AdminPanel":
                changeCurShowSubPage(<AdminPanel />);
                break;
            default:
                changeCurShowSubPage(<MainMenu />);
        }
    }, [curSubPage]);
    return (
        <div>
            <NavBar />
            <div className="container">{curShowSubPage}</div>
        </div>
    );
};
