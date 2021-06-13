import { useEffect, useState } from "react";
import PersonInfo from "./PersonInfo";
import style from "./style.module.css";


const Table = (userOn) => {
  const [persons, setPersons] = useState([]);
  const [newPoint, setNewpoint] = useState();
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

  if (persons.length === 0) {
    return <div></div>;
  }

  return (
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
  );
};

export default Table;
