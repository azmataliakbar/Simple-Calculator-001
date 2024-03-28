#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: chalk_1.default.italic.bold.greenBright("Enter first number: "), type: "number", name: "firstNumber" },
    { message: chalk_1.default.italic.bold.cyanBright("Enter second number: "), type: "number", name: "secondNumber" },
    {
        message: chalk_1.default.bold.italic.redBright("Select one of the operators to perform operation"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(chalk_1.default.italic.bold.yellowBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk_1.default.italic.bold.yellowBright(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk_1.default.italic.bold.yellowBright(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk_1.default.italic.bold.yellowBright(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk_1.default.italic.bold.red("Please select a valid operator"));
}
console.log(chalk_1.default.italic.bold.redBright("\nThe End"));
