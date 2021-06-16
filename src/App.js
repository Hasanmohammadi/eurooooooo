import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Inputs from './Components/inputs/Inputs';
import ShowResult from './Components/ShowResult';
import Table from './Components/table/Table';
import convertId from './convert';

function App() {
  const [userOn, setUserOn] = useState(0)
  const [userId, setUserId] = useState(0)
  const [userName, setUserName] = useState("")
  console.log(userName);

  const setUserIdFn = (id) => {
    setUserId(id)
  }

  const btnStyle = {

    width: "10em",
    height: "1.4em",
    background: "cadetblue",
    border: "deepskyblue 1px solid",
    color: "#091464",
    fontSize: "19px",
    borderRadius: "1em",
    margin: "14px"

  }
  useEffect(() => {
    let userNumber
    setTimeout(() => {

      userNumber = prompt("کد خود را وارد کنید")
    }, 0);

    setUserOn(userNumber)
    setUserIdFn(convertId(userNumber))
  }, [])






  // if (!userOn || !userId) {

  //   return (
  //     <div className={"error"}>
  //       <h1>رمز اشتباه است</h1>
  //       <h1>Wrong password</h1>
  //     </div>
  //   )

  // }
  const refresh = () => {
    window.location.reload();
  }



  if (!userOn) {
    return (
      <div className={"error"}>
        <h2>رمز خود را وارد کنید </h2>
        <h2>Please enter your password</h2>
        <button onClick={refresh} className={"refreshBtn"}>ورود مجدد</button>
      </div>
    )
  } else if (userOn && !userId) {

    return (
      <div className={"error"}>
        <h1>رمز اشتباه است</h1>
        <h1>Wrong password</h1>

      </div>
    )

  }


  console.log(userId);
  return (
    <div className="App">

      <Route path="/ShowResult" exact>
        <ShowResult />
      </Route>
      <Route path="/" exact>

        <Inputs userId={userId} />
        {(userOn === "27" || userOn === "9") ? <button style={btnStyle}>

          <Link style={{ textDecoration: "none" }} to="/ShowResult">نمایش پیشبینی ها</Link></button> : null
        }


        <Table userOn={userOn} setUserName={setUserName} userId={userId} />
      </Route>

    </div>
  );
}

export default App;
