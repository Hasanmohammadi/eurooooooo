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

  const setUserIdFn = (id) => {
    setUserId(id)
  }

  const btnStyle = {

    width: "10em",
    height: "1.4em",
    background: "goldenrod",
    border: "gold 1px solid",
    color: "#091464",
    fontSize: "19px",
    borderRadius: "1em",
    margin: "14px"

  }
  useEffect(() => {
    const userNumber = prompt("کد خود را وارد کنید")

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
        <h1>رمز خود را وارد کنید </h1>
        <h1>Please enter your password</h1>
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


        <Table userOn={userOn} />
      </Route>

    </div>
  );
}

export default App;
