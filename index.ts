#! /usr/bin/env node


import chalk from "chalk";

import inquirer from "inquirer";

// async function calculator() {
  

const answer = await inquirer.prompt([
  {message: chalk.bgRedBright.bold.whiteBright("Enter first number: "), type: "number", name: "firstNumber"},
  {message: chalk.bgCyanBright.bold.whiteBright("Enter second number: "), type: "number", name: "secondNumber"},
  {
    message: chalk.bold.red("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);


// conditional statement
if (answer.operator === "Addition") {
  console.log(chalk.bgGreenBright.bold.whiteBright(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.bgGreenBright.bold.whiteBright(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.bgGreenBright.bold.whiteBright(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
  console.log(chalk.bgGreenBright.whiteBright.bold(answer.firstNumber / answer.secondNumber));
} else {
  console.log(chalk.red("Please select a valid operator"));
  
}
// }

// calculator();

//console.log(answer);
