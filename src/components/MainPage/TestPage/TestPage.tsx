import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TestBase } from "./Tests";

import { TestPageTemplateA } from "./TestPageTemplates/TestPageTemplateA";

export const TestPage: React.FC = () => {
  const curTestSet = useSelector((state: SiteState) => state.curTestSet);
  const [curShowTests, setCurShowTests] = useState([]);

  useEffect(() => {
    let arr: any = [];
    TestBase.map((el) => {
      if (el.testSetName === curTestSet) {
        el.questions.map((al) => {
          arr.push();
        });
      }
    });
    setCurShowTests(arr);
  }, []);

  return (
    <div className="TestPage">
        <TestPageTemplateA />
        <a className="waves-effect waves-light btn TestPageBut">Адзаказць</a>
    </div>
  );
};
