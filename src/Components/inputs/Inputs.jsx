import { useState } from "react";
import "./style.css";

const Inputs = (userId) => {
  const [FirstTeam, setFirstTeam] = useState("");
  const [secondTeam, setsecondTeam] = useState("");
  const [ThirdTeam, setThirdTeam] = useState("");
  const [FourthTeam, setFourthTeam] = useState("");
  const [FifthTeam, setFifthTeam] = useState("");
  const [SixTeam, setSixTeam] = useState("");
  const [finalScore, setfinalScore] = useState({});
  console.log(finalScore);

  const getValueOfFirstTeam = (e) => {
    setFirstTeam(e.target.value);
  };
  const getValueOfSecondTeam = (e) => {
    setsecondTeam(e.target.value);
  };
  const getValueOfThirdTeam = (e) => {
    setThirdTeam(e.target.value);
  };
  const getValueOfFourthTeam = (e) => {
    setFourthTeam(e.target.value);
  };
  const getValueOfFifthTeam = (e) => {
    setFifthTeam(e.target.value);
  };
  const getValueOfSixTeam = (e) => {
    setSixTeam(e.target.value);
  };

  const onSubmit = () => {
    const score = {
      Finland: FirstTeam,
      Russia: secondTeam,
      Turkey: ThirdTeam,
      Wales: FourthTeam,
      Italy: FifthTeam,
      Switzerland: SixTeam,
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

    setfinalScore(score);
  };

  return (
    <div>
      <h1 className={"title"}>😎آبادان سیتی 😎</h1>
      <div
        style={{
          marginTop: "3em",
        }}
      >
        <div className={"parent"}>
          <label className={"title"}>Finland | فنلاند</label>
          <input
            type="number"
            onChange={getValueOfFirstTeam}
            className={"input"}
          />
        </div>
        <div className={"parent"}>
          <label className={"title"}>Russia | روسیه</label>
          <input
            type="number"
            onChange={getValueOfSecondTeam}
            className={"input"}
          />
        </div>
      </div>
      <hr />
      <div>
        <div className={"parent"}>
          <label className={"title"}>Turkey | ترکیه</label>
          <input
            type="number"
            onChange={getValueOfThirdTeam}
            className={"input"}
          />
        </div>

        <div className={"parent"}>
          <label className={"title"}>Wales | ولز</label>
          <input
            type="number"
            onChange={getValueOfFourthTeam}
            className={"input"}
          />
        </div>
      </div>
      <hr />
      <div>
        <div className={"parent"}>
          <label className={"title"}>Italy | ایتالیا</label>
          <input
            type="number"
            onChange={getValueOfFifthTeam}
            className={"input"}
          />
        </div>
        <div className={"parent"}>
          <label className={"title"}>Switzerland | سوییس</label>
          <input
            type="number"
            onChange={getValueOfSixTeam}
            className={"input"}
          />
        </div>
      </div>
      <br />
      {FirstTeam === "" ||
      secondTeam === "" ||
      ThirdTeam === "" ||
      FourthTeam === "" ||
      FifthTeam === "" ||
      SixTeam === "" ? (
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
