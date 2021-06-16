import { useState } from "react";
import "./style.css";

import wales from "./wales.jpg"
import turkey from "./turkey.jpg"
import italy from "./italy.jpg"
import switzerland from "./switzerland.jpg"
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
  const time = new Date();

  return (
    <div>
      <h1 className={"title"}>😎آبادان سیتی 😎</h1>
      {time.getHours() >= 17 && time.getMinutes() > 30 ? null : (
        <>
          <div
            style={{
              marginTop: "3em",
            }}
          >
            <div className={"parent"}>
              <label className={"title"}>Finland | فنلاند <img className={"image"} src={"./finland-ch.webp"} alt="firstTeamLogo"/></label>
              <input
                type="number"
                onChange={getValueOfFirstTeam}
                className={"input"}
              />
            </div>
            <div className={"parent"}>
              <label className={"title"}>Russia | روسیه <img className={"image"} src={"./russia-flag.jpg"} alt="secondTeamLogo"/></label>
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
      {time.getHours() >= 20 && time.getMinutes() > 30 ? null :
      <>
      <div>
        <div className={"parent"}>
          <label className={"title"}>Turkey | ترکیه <img className={"image"} src={turkey} alt="thirdTeamLogo"/></label>
          <input
            type="number"
            onChange={getValueOfThirdTeam}
            className={"input"}
            />
        </div>

        <div className={"parent"}>
          <label className={"title"}>Wales | ولز <img className={"image"} src={wales} alt="thirdTeamLogo"/></label>
          <input
            type="number"
            onChange={getValueOfFourthTeam}
            className={"input"}
            />
        </div>
      </div>
      <hr />
      </>
          }
          {time.getHours() >= 23 && time.getMinutes() > 30 ? null :
      <>
      <div>
        <div className={"parent"}>
          <label className={"title"}>Italy | ایتالیا <img className={"image"} src={italy} alt="thirdTeamLogo"/></label>
          <input
            type="number"
            onChange={getValueOfFifthTeam}
            className={"input"}
            />
        </div>

        <div className={"parent"}>
          <label className={"title"}>Switzerland | سوییس <img className={"image"} src={switzerland} alt="thirdTeamLogo"/></label>
          <input
            type="number"
            onChange={getValueOfSixTeam}
            className={"input"}
            />
        </div>
      </div>
      <br />
      </>}
 
        <button onClick={onSubmit} className={"btn"}>
          ثبت
        </button>
   
    </div>
  );
};

export default Inputs;
