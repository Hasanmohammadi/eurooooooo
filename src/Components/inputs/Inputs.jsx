import { useState } from "react";
import "./style.css";
const Inputs = (userId) => {
  const [FirstTeam, setFirstTeam] = useState("");
  const [secondTeam, setsecondTeam] = useState("");
  const [finalScore, setfinalScore] = useState({});

  const getValueOfFirstTeam = (e) => {
    setFirstTeam(e.target.value);
  };
  const getValueOfSecondTeam = (e) => {
    setsecondTeam(e.target.value);
  };

  const onSubmit = () => {
    const score = {
      firstTeam: FirstTeam,
      lastTeam: secondTeam,
    };

    fetch(
      `https://lavazemet.ir/hassan/api.php?tag=changedescription&userid=${
        userId.userId
      }&description=${JSON.stringify(score)}`
    ).then((res) => {
      if (res.status === 200) {
        alert("نتیجه با موفقیت ثبت شد");
      }
    });

    setfinalScore({
      firstTeam: FirstTeam,
      lastTeam: secondTeam,
    });
  };

  return (
    <div>
      <h1 className={"title"}>😎آبادان سیتی 😎</h1>
      <label className={"title"}>
        team1
        <input
          type="number"
          onChange={getValueOfFirstTeam}
          className={"input"}
        />
      </label>
      <br />
      <label className={"title"}>
        team2
        <input
          type="number"
          onChange={getValueOfSecondTeam}
          className={"input"}
        />
      </label>
      <br />
      {FirstTeam === "" || secondTeam === "" ? (
        <button className={"btnDisable"} disabled>
          ثبت
        </button>
      ) : (
        <button onClick={onSubmit} className={"btn"}>
          ثبت
        </button>
      )}
    </div>
  );
};

export default Inputs;
