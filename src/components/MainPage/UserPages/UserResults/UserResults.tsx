import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserResultsTab } from "./UserResultsTab";

export const UserResults:React.FC = () => {
    const curUserFIO = useSelector((state:IRootState) => state.curUser.UserFIO);
    const [ curUsersResults, setCurUsersResults ] = useState<any[]>([]);

    return (
        <div className = "UserResults">            
            <UserResultsTab />
        </div>
    )
}