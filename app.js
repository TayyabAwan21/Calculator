#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
do {
    let calc = await inquirer.prompt([
        {
            name: "n1", type: "number",
            message: "Enter the First Number  ",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Enter Number only";
                }
                else {
                    return true;
                }
            }
        }, {
            name: "n2", type: "number",
            message: "Enter the First Number  ",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Enter Number only";
                }
                else {
                    return true;
                }
            }
        }, {
            name: "op", type: "list",
            message: "Which action you want to perform ?",
            choices: ["+", "-", "*", "/"]
        }
    ]);
    if (calc.op == "+") {
        console.log(chalk.green.bold(`${calc.n1} + ${calc.n2} = ${calc.n1 + calc.n2} `));
    }
    else if (calc.op == "-") {
        console.log(chalk.redBright.bold(`${calc.n1} - ${calc.n2} = ${calc.n1 - calc.n2} `));
    }
    else if (calc.op == "*") {
        console.log(chalk.yellowBright.bold(`${calc.n1} * ${calc.n2} = ${calc.n1 * calc.n2} `));
    }
    else if (calc.op == "/") {
        if (calc.n2 == 0) {
            console.log(chalk.bgRed.bold("Division is not allowed by Zero"));
        }
        console.log(chalk.redBright.italic(`${calc.n1} / ${calc.n2} = ${calc.n1 / calc.n2} `));
    }
    ;
} while (true);
