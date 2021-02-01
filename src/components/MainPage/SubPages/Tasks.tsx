import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import "./Tasks.css"

export const Tasks: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  
  const [userTasksList, setUserTasksList] = useState<any[]>([]);
  const [userShowTasksList, setUsetShowTasksList] = useState<any[]>([]);

  const taskClickHandler = (f: string) => {
      dispatch({
        type : "ShowTest",
        curTestSet : f
      })
  };
  useEffect(() => {
    setUserTasksList([
      {
        title: "ЦТ_2020_1",
        endDate: "2020-01-01",
      },
      {
        title: "ЦТ_2020_2",
        endDate: "2020-01-01",
      },
    ]);
  }, []);
  useEffect(() => {
    const a:any[] = [];
    userTasksList.map((el) => {
      a.push(
        <tr
          className="userTasksTabTr"
          onClick={() => taskClickHandler(el.title)}
        >
          <td>{el.title}</td>
          <td>{el.endDate}</td>
        </tr>
      );
    });
    setUsetShowTasksList(a);
  }, [userTasksList]);
  return (
    <div className="Tasks">
      <table className="userTasksTab">
        <thead>
          <tr>
            <th>Назва тэста</th>
            <th>Срок выканання</th>
          </tr>
        </thead>

        <tbody>{userShowTasksList}</tbody>
      </table>
    </div>
  );
};
