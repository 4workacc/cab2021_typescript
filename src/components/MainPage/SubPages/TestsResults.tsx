import React, { useEffect, useState } from "react";

export const TestsResults: React.FC = () => {
  const [userTestsResultsList, setUserTestsResultsList] = useState<any[]>([]);
  useEffect(() => {
    const testSet: IUserTestResults[] = [
      {
        id: 1,
        title: "ЦТ_2020_1",
        endDate: "2021-01-02",
        result : 10  
      },
      {
        id: 2,
        title: "ЦТ_2020_2",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "ЦТ_2020_3",
        endDate: "-",
        result : 0
      },
      {
        id: 2,
        title: "ЦТ_2020_1",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "ЦТ_2020_2",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 2,
        title: "ЦТ_2020_6",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "Пунтуация ",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 2,
        title: "test2",
        endDate: "2021-01-02",
        result : 10
      },
      {
        id: 1,
        title: "test0",
        endDate: "2021-01-02",
        result : 10
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
          <td>{el.result}</td>
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
            <th>Назва тэста</th>
            <th>Дата выконвання</th>
            <th>Вынік</th>
          </tr>
        </thead>

        <tbody>
          { userTestsResultsList }
        </tbody>
      </table>
    </div>
  );
};
