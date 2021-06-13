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
      England: FirstTeam,
      Croatia: secondTeam,
      Netherlands: ThirdTeam,
      Ukraine: FourthTeam,
      Austria: FifthTeam,
      Macedonia: SixTeam,
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
      England: FirstTeam,
      Croatia: secondTeam,
      Netherlands: ThirdTeam,
      Ukraine: FourthTeam,
      Austria: FifthTeam,
      Macedonia: SixTeam,
    });
  };

  return (
    <div>
      <h1 className={"title"}>😎آبادان سیتی 😎</h1>
      <div>
        <label className={"title"}>
        Scotland | اسکاتلند
          <input
            type="number"
            onChange={getValueOfFirstTeam}
            className={"input"}
          />
        </label>
        <br />
        <label className={"title"}>Czech Republic | جمهوری چک</label>
        <input
          type="number"
          onChange={getValueOfSecondTeam}
          className={"input"}
        />
      </div>
      <hr />
      <div>
        <label className={"title"}>
        Poland | لهستان
          <input
            type="number"
            onChange={getValueOfThirdTeam}
            className={"input"}
          />
        </label>
        <br />
        <label className={"title"}>Slovakia | اسلواکی</label>
        <input
          type="number"
          onChange={getValueOfFourthTeam}
          className={"input"}
        />
      </div>
      <hr />
      <div>
        <label className={"title"}>
        Spain | اسپانیا
          <input
            type="number"
            onChange={getValueOfFifthTeam}
            className={"input"}
          />
        </label>
        <br />
        <label className={"title"}>Sweden | سوئد</label>
        <input type="number" onChange={getValueOfSixTeam} className={"input"} />
      </div>
      <br />
      {FirstTeam === "" || secondTeam === "" || ThirdTeam==="" || FourthTeam==="" || FifthTeam==="" || SixTeam==="" ? (
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
