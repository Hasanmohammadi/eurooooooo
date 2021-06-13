import { useEffect, useState } from 'react';
import './App.css';
import Inputs from './Components/inputs/Inputs';
import Table from './Components/table/Table';
import convertId from './convert';

function App() {
  const [userOn, setUserOn] = useState(0)
  const [userId, setUserId] = useState(0)

  const setUserIdFn = (id) => {
    setUserId(id)
  }


  useEffect(() => {
    const userNumber = prompt("کد خود را وارد کنید")
    setUserOn(userNumber)
    setUserIdFn(convertId(userNumber))
  }, [])
console.log(userId);
  return (
    <div className="App">
      <Inputs userId={userId} />
      <Table userOn={userOn} />
    </div>
  );
}

export default App;
