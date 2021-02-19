import {
  Button,
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
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  AdminAddTask: {
    width: "100%",
    heigth: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "50px"
  },
  select: {
    width: "200px",
    fontSize: "20px"
  },
  container: {  
    width: "100%",
    heigth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
},
tHead :{ 
    width: "100%",
    textAlign:"center",
    fontSize: "30px"
},
  tc : {
      width: "33%",
      textAlign: "center"
  }
});

export const AdminAddTask: React.FC = () => {
  const classes = useStyles();
  const [usersFIO, setUsersFIO] = useState<string[]>(["f1", "f2", "f3", "f4"]);
  const [testsName, setTestsname] = useState<string[]>(["1", "2", "3"]);

  const [selectedFIO, setSeletedFIO] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [ questCount, setQuestCount ] = useState(40);

  const [ curActiveTasks, setCurActiveTasks ] = useState([]);

  const butClickHandler = () => {
    alert(`SET ${selectedTest} to user ${selectedFIO} before ${selectedDate}`);
    fetch(`https://cab07.000webhostapp.com/new_refact/new_admin_AddTasks.php?
            USER_FIO=${selectedFIO}&
            TEST_NAME=${selectedTest}&
            START_DATE_TIME=2021-01-02&
            END_DATE_TIME=${selectedDate}&
            QUEST_COUNT=${questCount}`)
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
      });
      getActiveTasks();
  };

  useEffect(() => {
    fetch(
      `https://cab07.000webhostapp.com/new_refact/new_admin_getUsersAndTests.php`
    )
      .then((res) => res.json())
      .then((result) => {
        setUsersFIO(result.users);
        setTestsname(result.tests);
      });
      getActiveTasks();
  }, []);

  const getActiveTasks = () => {
    fetch (`https://cab07.000webhostapp.com/new_refact/new_admin_getTasks.php`)
    .then((res) => res.json())
    .then((result) =>{
        setCurActiveTasks( result.tasks);
        // "task_user_fio" => $row["USER_FIO"],
        // "task_test_name" => $row["TEST_NAME"],
        // "task_end_time" => $row["END_DATE_TIME"]
    })    
  }
  return (
    <div className={classes.container}>
      <div className={classes.AdminAddTask}>
        <FormControl className={classes.select}>
          <InputLabel id="demo-simple-select-label">Прозвішча</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFIO}
            onChange={(e) => setSeletedFIO(e.target.value as string)}
          >
            {usersFIO.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl className={classes.select}>
          <InputLabel id="demo-simple-select-label">Заданне</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => setSelectedTest(e.target.value as string)}
          >
            {testsName.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.select}>
          <InputLabel id="demo-simple-select-label">Колькасць пытанняў</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => setSelectedTest(e.target.value as string)}
          >
            {testsName.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <input
          type="date"
          value={selectedDate}
          className={classes.select}
          onChange={(e) => setSelectedDate(e.target.value as string)}
        ></input>
        <Button
          className={classes.select}
          onClick={butClickHandler}
          variant="contained"
          color="primary"
          disabled={
            selectedFIO === "" || selectedTest === "" || selectedDate === ""
          }
        >
          Задаць тэст
        </Button>
      </div>
      <p className = {classes.tHead}>Зададзена, але пакуль не выканана</p>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableCell className = {classes.tc}>Прозвішча</TableCell>
              <TableCell className = {classes.tc}>Тэст</TableCell>
              <TableCell className = {classes.tc}>Срок выканання</TableCell>
            </TableHead>
            <TableBody>
                {curActiveTasks.map ((el:any) => {
                    return (
                        <TableRow>
                            <TableCell className = {classes.tc}>{el.task_user_fio}</TableCell>
                            <TableCell className = {classes.tc}>{el.task_test_name}</TableCell>
                            <TableCell className = {classes.tc}>{el.task_end_time}</TableCell>
                        </TableRow>                       
                    )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
