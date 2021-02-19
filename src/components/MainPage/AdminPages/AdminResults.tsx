import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

interface AttemptData {
  dateTime: string;
  result:number;
  resultId?: number;
}

interface TaskData {
  taskID: number;
  userFIO: string;
  TestName: string;
  midValue : number;
  attemtps?: AttemptData[];
}

const useStyles = makeStyles({
  tablecell: {
    fontSize: "25px",
  },
  select: {
    width: "250px",
    padding: "50px",
    paddingTop: 0
  },
  big : {
      flexDirection: "column"
  },
  head : {},
  ResultsTab :{
    width: "100%",
    height: "500px",
    overflowY : "scroll"    
  },
  Accord: {
    width:"100%"
  },
  AccordSum: {
    width:"100%",
    flexDirection: "row"
  }

});

export const AdminResults: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const classes = useStyles();
  const [curFullTestList, setCurFullTestList] = useState<any[]>([]);
  const [curShowTasks, setCurShowTasks] = useState<any[]>([]);
  const [ curTasksData, setCurTasksData ] = useState<TaskData[]>([]);

  const [usersFIO, setUsersFIO] = useState<string[]>(["f1", "f2", "f3", "f4"]);
  const [testsName, setTestsname] = useState<string[]>(["1", "2", "3"]);

  const [selectedFIO, setSeletedFIO] = useState("");
  const [selectedTest, setSelectedTest] = useState("");

  useEffect(() => {
    let TasksData: TaskData[] = [];

    fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_GetResults.php`)
      .then((res) => res.json())
      .then((result) => {
        let arr: any[] = [];

        result.results.map((el: any) => {
          arr.push({
            user_fio: el.user_fio,
            task_id: el.task_id,
            test_id: el.test_id,
            test_name: el.test_name,
            dateTime: el.dateTime,
            result: el.result,
          });
          let rr:TaskData = {
            taskID : el.task_id,
            userFIO: el.user_fio,
            TestName: el.test_name,
            midValue: 0,
            attemtps: []
          };
          let isIn: boolean = false;
          TasksData.map( (al:any) =>{            
            if ( al.taskID === rr.taskID ) {
              isIn = true;
            };
          });
          if ( !isIn ) {
            TasksData.push( rr )
          }         
        });
        setCurFullTestList(arr);
        setCurShowTasks(arr);
        result.results.map ( (el:any) => {
          TasksData.map( (al:TaskData ) => {
            if ( al.taskID === el.task_id ) {
              let at:AttemptData = {
                dateTime: el.dateTime,
                result: el.result,
                resultId : el.test_id,
              };
              if ( al.attemtps!.indexOf( at ) === -1 ) {
                  al.attemtps!.push( at );
              }
            }
          })
        }) 
      });
      setCurTasksData( TasksData );
  }, []);
  useEffect(() => {
    fetch(
      `https://cab07.000webhostapp.com/new_refact/new_admin_getUsersAndTests.php`
    )
      .then((res) => res.json())
      .then((result) => {
        setUsersFIO(result.users);
        setTestsname(result.tests);
      });
  }, []);
  const trClickHandler = (id: number) => {
    dispatch({
      type: "ShowTestInfo",
      showTestId: id,
    });
  };
  return (
      < div className = {classes.big}>
      <div className = {classes.head}>
        <FormControl className={classes.select}>
          <InputLabel id="demo-simple-select-label">
            Пошук па фаміліі вучня
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFIO}
            onChange={(e) => {
              let x: string = e.target.value as string;
              setSeletedFIO(x);
              let showArr: TaskData[] = curTasksData;
              let newArr: TaskData[] = [];
              showArr.map((el: TaskData )=> {
                if (el.userFIO === x) {
                  newArr.push(el);
                }
              });
              setCurTasksData(newArr);
            }}
          >
            {usersFIO.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl className={classes.select}>
          <InputLabel id="demo-simple-select-label">
            Пошук па назве тэста
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => {
              let x: string = e.target.value as string;
              setSelectedTest(x);
              let showArr: TaskData[] = curTasksData;
              let newArr: TaskData[] = [];
              showArr.map((el: TaskData) => {
                if (el.TestName=== x) {
                  newArr.push(el);
                }
              });
              setCurTasksData(newArr);
            }}
          >
            {testsName.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div className="UserResultsTab">      
            { curTasksData.map ((el:TaskData) => {
              let j =0;
              let s = 0;
              for ( let i=0; i<el.attemtps!.length; i++) {
                if ( el.attemtps![i].result) {
                  s+= el.attemtps![i].result;
                  j+=1;
                }
              } 
              let med: number = Math.floor( s/j );
              let det:any = [];
              el.attemtps!.map( (al:AttemptData, ind:number) => {
                det.push(
                  <AccordionDetails
                    className = "det" 
                    onClick = { () =>trClickHandler(al.resultId as number)}> 
                    {` Try #${ind+1 } : ${al.dateTime}  result: ${al.result}`}
                  </AccordionDetails>
                )
              })

              return (
                <Accordion className={classes.Accord}>
                <AccordionSummary className={` ${classes.AccordSum}`}>
                  <div className = "AccordSum">
                    <p>Вучань:{el.userFIO}</p>
                    <p>Заданне:{el.TestName} </p>
                    <p>Сярэдняе:{med}</p>
                  </div>
                </AccordionSummary>
                 { det }                 
              </Accordion> 
              )
            }) }
                    
      </div>
    </div>
  );
};


{/* <TableHead>
              <TableRow>
                <TableCell
                  key={"00"}
                  align="center"
                  style={{ minWidth: "250px" }}
                  className={classes.tablecell}
                >
                  Фамілія вучня
                </TableCell>
                <TableCell
                  key={"01"}
                  align="center"
                  style={{ minWidth: "250px" }}
                  className={classes.tablecell}
                >
                  Назва тэста
                </TableCell>
                <TableCell
                  key={"02"}
                  align="center"
                  style={{ minWidth: "200px" }}
                  className={classes.tablecell}
                >
                  Дата выканання
                </TableCell>
                <TableCell
                  key={"03"}
                  align="center"
                  style={{ minWidth: "100px" }}
                  className={classes.tablecell}
                >
                  Вынік
                </TableCell>
              </TableRow>
            </TableHead> */}
// <TableBody>
//               {/* select results by task id to arr
//                             show 
//                             <tableRow>
//                                 <test name><medium value>
//                             <table row>
//                                 <attempt date><attempt result>
//                                 <attempt date><attempt result>
//                                 <attempt date><attempt result>
                                
//                             */}
//               {curShowTasks.map((el) => {
//                 return (
//                   <TableRow
//                     hover
//                     key={el.test_id}
//                     onClick={() => trClickHandler(el.test_id)}
//                   >
//                     <TableCell
//                       align="center"
//                       key={el.test_id + "00"}
//                       className={classes.tablecell}
//                     >
//                       {el.user_fio}
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       key={el.test_id + "01"}
//                       className={classes.tablecell}
//                     >
//                       {el.test_name}_{el.task_id}
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       key={el.test_id + "02"}
//                       className={classes.tablecell}
//                     >
//                       {el.dateTime}
//                     </TableCell>
//                     <TableCell
//                       align="center"
//                       key={el.test_id + "02"}
//                       className={classes.tablecell}
//                     >
//                       {el.result}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>