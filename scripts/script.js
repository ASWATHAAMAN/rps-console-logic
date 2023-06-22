`use strict`;
// get user input
const userChoice = `rock`;
// generate computer choice
const getComputerChoice = function () {
  const randomNumber = Math.trunc(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
  }
};
// compare userChoice and computerChoice
const getResult = function (userChoice) {
  const computerChoice = getComputerChoice();
  let result = ``;
  if (userChoice === `rock`) {
    if (computerChoice === `rock`) {
      result = `draw`;
    } else if (computerChoice === `paper`) {
      result = `lost`;
    } else if (computerChoice === `scissors`) {
      result = `won`;
    }
  } else if (userChoice === `paper`) {
    if (computerChoice === `rock`) {
      result = `won`;
    } else if (computerChoice === `paper`) {
      result = `draw`;
    } else if (computerChoice === `scissors`) {
      result = `lost`;
    }
  } else if (userChoice === `scissors`) {
    if (computerChoice === `rock`) {
      result = `lost`;
    } else if (computerChoice === `paper`) {
      result = `won`;
    } else if (computerChoice === `scissors`) {
      result = `draw`;
    }
  }

  console.log(displayResult(userChoice, computerChoice, result));
};
// display result;
const displayResult = function (userChoice,computerChoice,result) {
  console.log(`user selected: ${userChoice}`);
  console.log(`computer selected: ${computerChoice}`);
  console.log(`result: ${result}`);
};

console.log(getResult(`rock`));
console.log(getResult(`paper`));
console.log(getResult(`scissors`));
