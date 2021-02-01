import React, { useEffect, useState } from "react";

export const Tasks: React.FC = () => {
  const [userTasksList, setUserTasksList] = useState<any[]>([]);
  const [userShowTasksList, setUsetShowTasksList] = useState<any[]>([]);

  const taskClickHandler = (f: string) => {
    alert(f);
  };
  useEffect(() => {
    setUserTasksList([
      {
        title: "test1",
        endDate: "2020-01-01",
      },
      {
        title: "test2",
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
      <table className="centered striped userTasksTab">
        <thead>
          <tr>
            <th>TestName</th>
            <th>End date</th>
          </tr>
        </thead>

        <tbody>{userShowTasksList}</tbody>
      </table>
    </div>
  );
};
