import { useState } from "react";
import "./style.css";

// import wales from "./flag/wales.jpg";
// import turkey from "./flag/turkey.jpg";
// import italy from "./flag/italy.jpg";
// import switzerland from "./flag/switzerland.jpg";

// import ukrain from "./flag/ukrain.png";
// import Macedonia from "./flag/Macedonia.jpg";
// import Denmark from "./flag/Denmark.jpg";
// import Belgium from "./flag/Belgium.jpg";
// import Netherlands from "./flag/Netherlands.jpg";
// import Austria from "./flag/Austria.jpg";
import Croatia from "./flag/Croatia.jpg";
import Czech from "./flag/Czech.jpg";
import Sweden from "./flag/Sweden.webp";
import Slovakia from "./flag/slovakia.webp";
import England from "./flag/England.webp";
import Scotland from "./flag/Scotland.webp";




const Inputs = ({userId}) => {
  const time = new Date();
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
      Sweden: FirstTeam,
      Slovakia: secondTeam,
      Croatia: ThirdTeam,
      Czech: FourthTeam,
      England: FifthTeam,
      Scotland: SixTeam,
    };

    fetch(
      `https://lavazemet.ir/hassan/api.php?tag=changedescription&userid=${
       userId
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
              Sweden | سوئد{" "}
                <img className={"image"} src={Sweden} alt="firstTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfFirstTeam}
                className={"input"}
              />
            </div>
            <div className={"parent"}>
              <label className={"title"}>
              Slovakia | اسلواکی{" "}
                <img className={"image"} src={Slovakia} alt="secondTeamLogo" />
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
              Croatia | کرواسی{" "}
                <img className={"image"} src={Croatia} alt="thirdTeamLogo" />
              </label>
              <input
                type="number"
                onChange={getValueOfThirdTeam}
                className={"input"}
              />
            </div>

            <div className={"parent"}>
              <label className={"title"}>
              Czech republic | چک{" "}
                <img className={"image"} src={Czech} alt="thirdTeamLogo" />
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
              England | انگلیس{" "}
                <img
                  className={"image"}
                  src={England}
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
              Scotland | اسکاتلند{" "}
                <img className={"image"} src={Scotland} alt="thirdTeamLogo" />
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
