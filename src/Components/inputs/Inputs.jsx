import { useState } from "react";
import "./style.css";

import wales from "./flag/wales.jpg";
import turkey from "./flag/turkey.jpg";
import italy from "./flag/italy.jpg";
import switzerland from "./flag/switzerland.jpg";

// import ukrain from "./flag/ukrain.png";
// import Macedonia from "./flag/Macedonia.jpg";
// import Denmark from "./flag/Denmark.jpg";
// import Belgium from "./flag/Belgium.jpg";
// import Netherlands from "./flag/Netherlands.jpg";
// import Austria from "./flag/Austria.jpg";
// import Croatia from "./flag/Croatia.jpg";
// import Czech from "./flag/Czech.jpg";
// import Sweden from "./flag/Sweden.webp";
// import Slovakia from "./flag/slovakia.webp";
// import England from "./flag/England.webp";
// import Scotland from "./flag/Scotland.webp";
// import Spain from "./flag/Spain.jpg";
// import Poland from "./flag/Poland.jfif";
// import Hungary from "./flag/Hungary.jpg";
// import France from "./flag/11.jpg";
// import Portugal  from "./flag/Portugal.jpg";
// import Germany  from "./flag/Germany1.png";

const Inputs = ({ userId }) => {
  // const time = new Date();
  const [FirstTeam, setFirstTeam] = useState("");
  const [secondTeam, setsecondTeam] = useState("");
  const [ThirdTeam, setThirdTeam] = useState("");
  const [FourthTeam, setFourthTeam] = useState("");
  // const [FifthTeam, setFifthTeam] = useState("");
  // const [SixTeam, setSixTeam] = useState("");
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
  // const getValueOfFifthTeam = (e) => {
  //   setFifthTeam(e.target.value);
  // };
  // const getValueOfSixTeam = (e) => {
  //   setSixTeam(e.target.value);
  // };

  const onSubmit = () => {
    const score = {
      Italy: FirstTeam,
      Wales: secondTeam,
      Switzerland: ThirdTeam,
      Turkey: FourthTeam,
      // Spain : FifthTeam,
      // Poland: SixTeam,
    };

    fetch(
      `https://lavazemet.ir/hassan/api.php?tag=changedescription&userid=${userId}&description=${JSON.stringify(
        score
      )}`
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
      <>
        <div
          style={{
            marginTop: "3em",
          }}
        >
          <div className={"parent"}>
            <label className={"title"}>
            Italy | ایتالیا{" "}
              <img className={"image"} src={italy} alt="firstTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfFirstTeam}
              className={"input"}
            />
          </div>
          <div className={"parent"}>
            <label className={"title"}>
            wales  | ولز {" "}
              <img className={"image"} src={wales} alt="secondTeamLogo" />
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

      <>
        <div>
          <div className={"parent"}>
            <label className={"title"}>
            switzerland | سوییس{" "}
              <img className={"image"} src={switzerland} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfThirdTeam}
              className={"input"}
            />
          </div>

          <div className={"parent"}>
            <label className={"title"}>
           Turkey | ترکیه{" "}
              <img className={"image"} src={turkey} alt="thirdTeamLogo" />
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
{/* 
      <>
        <div>
          <div className={"parent"}>
            <label className={"title"}>
             Spain | اسپانیا{" "}
              <img className={"image"} src={Spain} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfFifthTeam}
              className={"input"}
            />
          </div>

          <div className={"parent"}>
            <label className={"title"}>
             Poland | لهستان{" "}
              <img className={"image"} src={Poland} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfSixTeam}
              className={"input"}
            />
          </div>
        </div>
        <br />
      </> */}
      {FirstTeam === "" ||
      secondTeam === "" ||
      ThirdTeam === "" ||
      FourthTeam === "" 
      // FifthTeam === "" ||
      // SixTeam === ""
       ? (
        <button onClick={onSubmit} className={"btnDisable"} disabled>
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
