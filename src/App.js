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





  if (!userOn || !userId) {
    return <h1>رمز اشتباه است</h1>
  }

  return (
    <div className="App">
      <Route path="/ShowResult" exact>
        <ShowResult />
      </Route>
      <Route path="/" exact>

        <Inputs userId={userId} />
        {userOn === "27" ? <button style={btnStyle}>

          <Link style={{ textDecoration: "none" }} to="/ShowResult">نمایش پیشبینی ها</Link></button> : null
        }


        <Table userOn={userOn}  />
      </Route>

    </div>
  );
}

export default App;
