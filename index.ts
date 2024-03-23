#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {message: chalk.italic.bold.greenBright("Enter first number: "), type: "number", name: "firstNumber"},
  {message: chalk.italic.bold.cyanBright("Enter second number: "), type: "number", name: "secondNumber"},
  {
    message: chalk.bold.italic.redBright("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);


// conditional statement
if (answer.operator === "Addition") {
  console.log(chalk.italic.bold.yellowBright(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.italic.bold.yellowBright(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.italic.bold.yellowBright(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
  console.log(chalk.italic.bold.yellowBright(answer.firstNumber / answer.secondNumber));
} else {
  console.log(chalk.italic.bold.red("Please select a valid operator"));
  
}

