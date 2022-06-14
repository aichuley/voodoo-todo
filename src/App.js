import { useState } from "react";
import "./App.css";
// import { initialData, actions, ReplaceMeWithCorrectFunction } from "./const";
import { initialData, actions, actionOptions, flavorOptions } from "./const";
import ControlPanel from "./ControlPanel";
import DonutShelf from "./DonutShelf";
import {
  addDonutToBox,
  alterSprinklesToDonut,
  alterFillingToDonut,
  removeDonutFromBox,
  alterDonutFlavor,
} from "./utils";

const App = () => {
  const [donutShelfData, setDonutShelfData] = useState(initialData);
  const [selectedAction, setSelectedAction] = useState(actions.add.action); //actions.add.action maybe
  const [selectedType, setSelectedType] = useState("glazed");

  const handleActionClick = (label) => {
    // TODO update the selectedAction state to reflect the new label
    // const labelCopy = label.splice();  copy the value for arrays when modifying
    //react knows to update bc new object/new addr
    setSelectedAction(label);
  };

  /* ASHLEY CHECK IN ON THESE */
  const handleTypeClick = (label) => {
    setSelectedType(label);
  };

  const handleBoxClick = (userId, donutId) => {
    switch (selectedAction) {
      case actions.sprinkles.action:
        // TODO toggle donut sprinkles prop on selected donut using function `alterSprinklesToDonut`
        // and update the `donutShelfData` state
        setDonutShelfData(
          alterSprinklesToDonut(donutShelfData, userId, selectedType)
        );
        break;
      case actions.filled.action:
        // TODO toggle donut filled prop on selected donut using function `alterFillingToDonut`
        // and update the `donutShelfData` state
        break;
      case actions.add.action:
        // TODO add donut to selected box using function `addDonutToBox`
        setDonutShelfData(addDonutToBox(donutShelfData, userId, selectedType));
        break;
      case actions.remove.action:
        console.log("click! add functionality to to delete me");
        // TODO delete selected donut using function `removeDonutFromBox`
        // and update the `donutShelfData` state
        break;
      case actions.flavor.action:
        console.log("click! add functionality to update my flavor");
        // TODO update flavor of selected donut using function `alterDonutFlavor`
        // and update the `donutShelfData` state
        break;
      default:
        console.error("An invalid action was passed to handleBoxClick");
    }
  };

  return (
    <div className="app-wrapper">
      <h1>Voodoo Todo:</h1>
      <div className="app-container">
        <ControlPanel
          selectedAction={selectedAction}
          handleActionClick={handleActionClick}
          selectedType={selectedType}
          handleTypeClick={handleTypeClick}
        />
        <DonutShelf
          donutShelfData={donutShelfData} // do i need it to be [donutShelfData] ?ReplaceWithCorrectValue
          handleBoxClick={handleBoxClick}
          isAdd={selectedAction === actions.add.action}
        />
      </div>
    </div>
  );
};

export default App;
