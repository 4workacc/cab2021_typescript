import React, { useEffect, useState } from "react";

export const Tests: React.FC = () => {
  const [userTestsList, setUserTestsList] = useState<any[]>([]);
  useEffect(() => {
    const testSet: IUserTest[] = [
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        active: true,
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        active: true,
      }
    ];
    const showTestList:any[] = [];
    testSet.map((el) => {
      showTestList.push(
        <tr className = "userTestsTabTr">
          <td>{el.title}</td>
          <td>{el.endDate}</td>
        </tr>
      );
    });
    setUserTestsList(showTestList);
  }, []);
  return (
    <div className="Tests">
      <p className="TestsTitle">Avalible test list</p>
      <table className="centered striped userTestsTab">
        <thead>
          <tr>
            <th>TestName</th>
            <th>End date</th>
          </tr>
        </thead>

        <tbody>
          { userTestsList }
        </tbody>
      </table>
    </div>
  );
};
