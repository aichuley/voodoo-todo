const getUniqueDonutId = () => {
  return `donut-${Math.floor(Math.random() * 100000 + 1)}`;
};

//same function as the given donut id one basically
const getUniqueBoxId = () => {
  return `user-${Math.floor(Math.random() * 100000 + 1)}`;
};

const buildDonut = (type) => {
  return {
    flavor: type,
    sprinkles: false,
    filled: false,
    donutId: getUniqueDonutId(),
  };
};

//function that creates a new box given a name for
//the donut box
const buildDonutBox = (boxName) => {
  return {
    name: boxName,
    userId: getUniqueBoxId(),
    donuts: [],
  };
};

//Ashley's new function that builds a donut box and adds it with a given
//Name :D
export const addDonutBox = (donutShelfData, newName) => {
  const newShelfData = [...donutShelfData];
  newShelfData.push(buildDonutBox(newName));

  return newShelfData;
};

export const addDonutToBox = (donutShelfData, userId, type) => {
  console.log("in add function");
  // This function should return a copy of donutShelfData where a new donut
  // is added to the selected donut box (find with the userId)
  // Use the helper function `buildDonut` to create a donut object

  const newShelfData = [...donutShelfData];
  for (let box = 0; box < newShelfData.length; box++) {
    console.log("USER IDDDD!!!: ", userId);
    console.log("box IDDD!!!: ", newShelfData[box].userId);
    console.log("box!!!: ", newShelfData[box]);
    if (newShelfData[box].userId === userId) {
      newShelfData[box].donuts.push(buildDonut(type));
      break;
    }
  }
  return newShelfData;
};

export const alterSprinklesToDonut = (donutShelfData, userId, donutId) => {
  console.log("sprinkle function called");
  // Jeff really likes sprinkles. Due to his character flaw, `alterSprinklesToDonut` has been completed
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].sprinkles =
            !newShelfData[i].donuts[j].sprinkles;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const alterFillingToDonut = (donutShelfData, userId, donutId) => {
  // This function should return a copy of donutShelfData where the filling
  // prop is toggled on the specific donutId
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].filled = !newShelfData[i].donuts[j].filled;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const alterDonutFlavor = (
  donutShelfData,
  userId,
  donutId,
  selectedType
) => {
  // This function should return a copy of donutShelfData where the filling
  // prop is toggled on the specific donutId
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].flavor = selectedType;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const removeDonutFromBox = (donutShelfData, userId, donutId) => {
  // This function should return a copy of donutShelfData where the selected
  // donut is removed from the userId's array of donuts
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts.splice(j, 1);
        }
      }
      break;
    }
  }
  return newShelfData;
};
