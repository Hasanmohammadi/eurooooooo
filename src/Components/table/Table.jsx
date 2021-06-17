import { useEffect, useState } from "react";
import PersonInfo from "./PersonInfo";
import style from "./style.module.css";

const Table = ({ userOn, userId }) => {
  const [persons, setPersons] = useState([]);
  const [newPoint, setNewpoint] = useState();
  // const [user, setUser] = useState({});
  useEffect(() => {
    const getData = () => {
      fetch("https://lavazemet.ir/hassan/api.php?tag=getusers")
        .then((res) => res.json())
        .then((data) => {
          const finalData = data.users.sort((a, b) => b.point - a.point);
          setPersons(finalData);
        });
    };

    getData();
    setNewpoint(0);
  }, [newPoint]);

  const getPredictions = () => {
    const user = persons.find((person) =>+person.id  === userId);
    const prediction = JSON.parse(user.description);
    const keys = Object.keys(prediction);
    const value = Object.values(prediction);
    alert(`
    ${user.name}:
    ${keys[0]}: ${value[0]} , ${keys[1]}: ${value[1]} 
    ${keys[2]}: ${value[2]} , ${keys[3]}: ${value[3]} 
    ${keys[4]}: ${value[4]} , ${keys[5]}: ${value[5]} `);
  };

  return (
    <>
      <br />
      {userId === 26 || userId === 27 ? (
        <button className={style.btn} onClick={getPredictions}>
          See your prediction
        </button>
      ) : (
        <button className={style.btn} onClick={getPredictions}>
          مشاهده پیشبینی
        </button>
      )}
      {persons.length === 0 ? null : (
        <div className={style.container}>
          <div className={style.tabeleContainer}>
            {persons.map((person, index) => (
              <PersonInfo
                key={person.id}
                name={person.name}
                index={index}
                point={person.point}
                id={person.id}
                setNewpoint={setNewpoint}
                userOn={userOn}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
