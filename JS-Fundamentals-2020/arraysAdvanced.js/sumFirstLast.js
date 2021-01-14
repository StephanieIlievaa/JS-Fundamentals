function solve(numbersInput) {
let firstElementInput =  numbersInput[0];
let lastElementInput = numbersInput.pop();

let firstNumber = Number(firstElementInput);
let lastNumber = Number(lastElementInput);

let result = firstNumber + lastNumber;


return result;
}


let result = solve(['20', '30', '40']);
console.log(result);