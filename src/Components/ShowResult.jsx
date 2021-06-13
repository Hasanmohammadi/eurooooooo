import { useState } from "react";
import { useEffect } from "react";
import style from "./showResult.module.css";
const ShowResult = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://lavazemet.ir/hassan/api.php?tag=getusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  if (users.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className={style.h1}>First Match</h1>
      <div className={style.container}>
        {users.users.map((user) => {
          if (user.description === null) {
            return <p key={user.id} style={{color:"red"}}>{`${user.name} : هنوز پیشبینی نکرده`}</p>;
          }
          const natije = JSON.parse(user.description);
          const keys = Object.keys(natije);
          const value = Object.values(natije);

          return (
            <div key={user.id} className={style.personContainer}>
              <div className={style.divName} key={user.id}>{user.name}</div>
              <div
                className={style.firstTeamDiv}
              >{`${keys[0]} : ${value[0]}`}</div>
              <div
                className={style.secondTeamDiv}
              >{`${keys[1]} : ${value[1]}`}</div>
            </div>
          );
        })}
      </div>
      <h1 className={style.h1}>Second Match</h1>
      <div className={style.container}>
        {users.users.map((user) => {
          if (user.description === null) {
            return <p key={user.id} style={{color:"red"}}>{`${user.name} : هنوز پیشبینی نکرده`}</p>;
          }
          const natije = JSON.parse(user.description);
          const keys = Object.keys(natije);
          const value = Object.values(natije);

          return (
            <div key={user.id} className={style.personContainer}>
              <div className={style.divName} key={user.id}>{user.name}</div>
              <div
                className={style.firstTeamDiv}
              >{`${keys[2]} : ${value[2]}`}</div>
              <div
                className={style.secondTeamDiv}
              >{`${keys[3]} : ${value[3]}`}</div>
            </div>
          );
        })}
      </div>
      <h1 className={style.h1}>Third Match</h1>
      <div className={style.container}>
        {users.users.map((user) => {
          if (user.description === null) {
            return <p key={user.id} style={{color:"red"}}>{`${user.name} : هنوز پیشبینی نکرده`}</p>;
          }
          const natije = JSON.parse(user.description);
          const keys = Object.keys(natije);
          const value = Object.values(natije);

          return (
            <div key={user.id} className={style.personContainer}>
              <div className={style.divName} key={user.id}>{user.name}</div>
              <div
                className={style.firstTeamDiv}
              >{`${keys[4]} : ${value[4]}`}</div>
              <div
                className={style.secondTeamDiv}
              >{`${keys[5]} : ${value[5]}`}</div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default ShowResult;
