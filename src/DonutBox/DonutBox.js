// import { ReplaceMeWithCorrectFunction } from "../const";
import { actionOptions, flavorOptions, actions } from "../const";
import Donut from "../Donut/Donut";
import "./DonutBox.css";

const DonutBox = ({ boxData, handleBoxClick, isAdd }) => {
  return (
    /* check on if handleBoxClick is correct param */
    <div className="donut-column" onClick={handleBoxClick}>
      <h3>{boxData.name}</h3>
      <div className={`donut-container ${isAdd ? "add" : ""}`}>
        {boxData.donuts.map((donutData) => {
          return (
            <Donut
              key={donutData.donutId}
              donutData={donutData}
              handleBoxClick={handleBoxClick}
              isAdd={isAdd}
              userId={boxData.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DonutBox;
