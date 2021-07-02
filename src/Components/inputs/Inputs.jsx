import { useState } from "react";
import "./style.css";


import italy from "./flag/italy.jpg";
import switzerland from "./flag/switzerland.jpg";

// import Ukrain from "./flag/ukrain.png";
// import Denmark from "./flag/Denmark.jpg";
import Belgium from "./flag/Belgium.jpg";
// import Czech from "./flag/Czech.jpg";
// import England from "./flag/England.webp";
import Spain from "./flag/Spain.jpg";

const Inputs = ({ userId }) => {
  // const time = new Date();
  const [FirstTeam, setFirstTeam] = useState("");
  const [secondTeam, setsecondTeam] = useState("");
  const [ThirdTeam, setThirdTeam] = useState("");
  const [FourthTeam, setFourthTeam] = useState("");
  // const [FifthTeam, setFifthTeam] = useState("");
  // const [SixTeam, setSixTeam] = useState("");
  // const [sevenTeam, setSevenTeam] = useState("");
  // const [eightTeam, setEightTeam] = useState("");
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
  // const getValueOfSevenTeam = (e) => {
  //   setSevenTeam(e.target.value);
  // };
  // const getValueOfEightTeam = (e) => {
  //   setEightTeam(e.target.value);
  // };

  const onSubmit = () => {
    const score = {
      Switzerland: FirstTeam,
      Spain: secondTeam,
      Italy: ThirdTeam,
      Belgium: FourthTeam,
      // Germany: FifthTeam,
      // Hungary: SixTeam,
      // Portugal: sevenTeam,
      // France: eightTeam,
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
            Switzerland | سوئیس{" "}
              <img className={"image"} src={switzerland} alt="firstTeamLogo" />
            </label>
            <input
              
              onChange={getValueOfFirstTeam}
              className={"input"}
            />
          </div>
          <div className={"parent"}>
            <label className={"title"}>
            Spain | اسپانیا{" "}
              <img className={"image"} src={Spain} alt="secondTeamLogo" />
            </label>
            <input
              
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
            Italy | ایتالیا{" "}
              <img className={"image"} src={italy} alt="thirdTeamLogo" />
            </label>
            <input
              
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
            Germany | آلمان{" "}
              <img className={"image"} src={Germany} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfFifthTeam}
              className={"input"}
            />
          </div>

          <div className={"parent"}>
            <label className={"title"}>
            Hungary | مجارستان{" "}
              <img className={"image"} src={Hungary} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfSixTeam}
              className={"input"}
            />
          </div>
          <hr/>
        </div>
        <br />
      </>
      
      <>
        <div>
          <div className={"parent"}>
            <label className={"title"}>
            Portugal | پرتقال{" "}
              <img className={"image"} src={Portugal} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfSevenTeam}
              className={"input"}
            />
          </div>

          <div className={"parent"}>
            <label className={"title"}>
            France | فرانسه{" "}
              <img className={"image"} src={France} alt="thirdTeamLogo" />
            </label>
            <input
              type="number"
              onChange={getValueOfEightTeam}
              className={"input"}
            />
          </div>
        </div>
        <br /> */}
      {/* </> */}

      {FirstTeam === "" ||
      secondTeam === "" ||
      ThirdTeam === "" ||
      FourthTeam === "" 
        // FifthTeam === "" ||
        // SixTeam === "" ||
        // sevenTeam === "" ||
        // eightTeam === "" 
        ?
        (<button onClick={onSubmit} className={"btnDisable"} disabled>
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
