// function greeting(name1) {
//     console.log('Hello '+name1+'! How are you?');
// }
// greeting('Ali');
// greeting('Zia');
import inquirer from "inquirer";
import { sum } from "./add.js";
import { multiply } from "./multiply.js";
import { minus } from "./minus.js";
import { divide } from "./divide.js";
import { modulus } from "./modulus.js";
//async function name() {
let number = await inquirer.prompt([{
        message: "Enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "Select Operator",
        type: "list",
        choices: ["+", "-", "*", "/", "%"],
        name: "Operator"
    }
]);
if (number.Operator === "+") {
    let result = sum(number.num1, number.num2);
    console.log(number.num1, "+", number.num2, " is equal to ", result);
}
else if (number.Operator === "-") {
    let result = minus(number.num1, number.num2);
    console.log(number.num1, "-", number.num2, " is equal to ", result);
}
else if (number.Operator === "*") {
    let result = multiply(number.num1, number.num2);
    console.log(number.num1, "*", number.num2, " is equal to ", result);
}
else if (number.Operator === "/") {
    let result = divide(number.num1, number.num2);
    console.log(number.num1, "/", number.num2, " is equal to ", result);
}
else {
    let result = modulus(number.num1, number.num2);
    console.log(number.num1, "%", number.num2, " is equal to ", result);
}
