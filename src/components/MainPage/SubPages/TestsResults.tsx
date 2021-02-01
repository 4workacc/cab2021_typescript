import React, { useEffect, useState } from "react";

export const TestsResults: React.FC = () => {
  const [userTestsResultsList, setUserTestsResultsList] = useState<any[]>([]);
  useEffect(() => {
    const testSet: IUserTestResults[] = [
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"       
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02"
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02"
      }
    ];
    const showTestList:any[] = [];
    testSet.map((el) => {
      showTestList.push(
        <tr className = "userTestsResultsTabTr">
          <td>{el.title}</td>
          <td>{el.endDate}</td>
        </tr>
      );
    });
    setUserTestsResultsList(showTestList);
  }, []);
  return (
    <div className="TestsResults">
      <p className="TestsResultsTitle">Test results list</p>
      <table className="centered striped userTestsResultsTab">
        <thead>
          <tr>
            <th>TestName</th>
            <th>End date</th>
          </tr>
        </thead>

        <tbody>
          { userTestsResultsList }
        </tbody>
      </table>
    </div>
  );
};
