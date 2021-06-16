import { useState } from "react";
import "./style.css";

import wales from "./flag/wales.jpg";
import turkey from "./flag/turkey.jpg";
import italy from "./flag/italy.jpg";
import switzerland from "./flag/switzerland.jpg";

import ukrain from "./flag/ukrain.png";
import Macedonia from "./flag/Macedonia.jpg";
import Denmark from "./flag/Denmark.jpg";
import Belgium from "./flag/Belgium.jpg";
import Netherlands from "./flag/Netherlands.jpg";
import Austria from "./flag/Austria.jpg";

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
      Ukrain: FirstTeam,
      Macedonia: secondTeam,
      Denmark: ThirdTeam,
      Belgium: FourthTeam,
      Netherlands: FifthTeam,
      Austria: SixTeam,
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
  const time = new Date();

  return (
    <div>
      <h1 className={"title"}>😎آبادان سیتی 😎</h1>
      {(time.getHours() === 17 && time.getMinutes() > 30) ||
      time.getHours() > 17 ? null : (
        <>
          <div
            style={{
              marginTop: "3em",
            }}
          >
            <div className={"parent"}>
              <label className={"title"}>
                Ukrain | اکراین{" "}
                <img className={"image"} src={ukrain} alt="firstTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfFirstTeam}
                className={"input"}
              />
            </div>
            <div className={"parent"}>
              <label className={"title"}>
                Macedonia | مقدونیه{" "}
                <img className={"image"} src={Macedonia} alt="secondTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfSecondTeam}
                className={"input"}
              />
            </div>
          </div>
          <hr />
        </>
      )}
      {(time.getHours() === 20 && time.getMinutes() > 30) ||
      time.getHours() > 20 ? null : (
        <>
          <div>
            <div className={"parent"}>
              <label className={"title"}>
                Denmark | دانمارک{" "}
                <img className={"image"} src={Denmark} alt="thirdTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfThirdTeam}
                className={"input"}
              />
            </div>

            <div className={"parent"}>
              <label className={"title"}>
                Belgium | بلژیک{" "}
                <img className={"image"} src={Belgium} alt="thirdTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfFourthTeam}
                className={"input"}
              />
            </div>
          </div>
          <hr />
        </>
      )}
      {(time.getHours() === 23 && time.getMinutes() > 30) ||
      time.getHours() > 23 ? null : (
        <>
          <div>
            <div className={"parent"}>
              <label className={"title"}>
                Netherlands | هلند{" "}
                <img
                  className={"image"}
                  src={Netherlands}
                  alt="thirdTeamLogo"
                />
              </label>
              <input
                type="number"
                onChange={getValueOfFifthTeam}
                className={"input"}
              />
            </div>

            <div className={"parent"}>
              <label className={"title"}>
                Austria | اتریش{" "}
                <img className={"image"} src={Austria} alt="thirdTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfSixTeam}
                className={"input"}
              />
            </div>
          </div>
          <br />
        </>
      )}

      <button onClick={onSubmit} className={"btn"}>
        ثبت
      </button>
    </div>
  );
};

export default Inputs;
