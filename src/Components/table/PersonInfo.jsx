import style from "./style.module.css";
const PersonInfo = ({ name, index, point, id, setNewpoint, userOn }) => {

  const changePoint = () => {
    const newPoint1 = prompt(`Please enter new point of ${name}`);
    if (newPoint1) {
      fetch(
        `https://lavazemet.ir/hassan/api.php?tag=changepoint&userid=${id}&point=${newPoint1}`
      );
      setNewpoint(newPoint1);
    }
  };
  
  return (
    <div className={style.personContainer}>
      <div className={style.rank}>
        {index + 1 === 1 ? (
          <p className={style.personP} style={{ color: "goldenrod" }}>
            {index + 1}
          </p>
        ) : (
          <p className={style.personP}>{index + 1}</p>
        )}
      </div>
      <div className={style.name}>
        <p className={style.personName}>{name}</p>
      </div>
      {userOn === "27" || userOn === "9" ? (
        <div className={style.point} onClick={changePoint}>
          <p className={style.personP}>{point}</p>
        </div>
      ) : (
        <div className={style.point}>
          <p className={style.personP}>{point}</p>
        </div>
      )}
    </div>
  );
};

export default PersonInfo;
