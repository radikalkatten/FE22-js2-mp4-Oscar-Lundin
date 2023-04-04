let currentNumber: number[] = [];
let operator: string = "";
let previousNumber: number = 0;
const resultElement: HTMLInputElement = <HTMLInputElement>document.getElementById("result");

function handleNumButtonClick(num: number) {
  return function() {
    appendToResult(num);
  }
}
for (let i = 0; i <= 9; i++) {
  const numButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById(`${i}`);
  console.log(numButton)
  numButton.addEventListener("click", handleNumButtonClick(i));
}

const addButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("add");
addButton.addEventListener("click", add);

const subtractButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("subtract");
subtractButton.addEventListener("click", subtract);

const multiplyButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("multiply");
multiplyButton.addEventListener("click", multiply);

const divideButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("divide");
divideButton.addEventListener("click", divide);

const equalsButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("equals");
equalsButton.addEventListener("click", equals);

const clearButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clear");
clearButton.addEventListener("click", clearResult);

function appendToResult(num: number): void {
  currentNumber.push(num);
  resultElement.value = currentNumber.join('');
}

function clearResult(): void {
  currentNumber = [];
  operator = "";
  previousNumber = 0;
  resultElement.value = "";
}

function add(): void {
  operator = "+";
  previousNumber = parseFloat(resultElement.value);
  currentNumber = [];
}

function subtract(): void {
  operator = "-";
  previousNumber = parseFloat(resultElement.value);
  currentNumber = [];
}

function multiply(): void {
  operator = "*";
  previousNumber = parseFloat(resultElement.value);
  currentNumber = [];
}

function divide(): void {
  operator = "/";
  previousNumber = parseFloat(resultElement.value);
  currentNumber = [];
}

function equals(): void {
  const num1: number = parseInt(currentNumber.join(''));
  currentNumber = [];
  const num2: number = previousNumber;

  if (operator === "+") {
    const result: number = num1 + num2;
    resultElement.value = result.toString();
  } else if (operator === "-") {
    const result: number = num2 - num1;
    resultElement.value = result.toString();
  } else if (operator === "*") {
    const result: number = num1 * num2;
    resultElement.value = result.toString();
  } else if (operator === "/") {
    if (num1 === 0) {
      alert("Cannot divide by zero");
      return;
    }
    const result: number = num2 / num1;
    resultElement.value = result.toString();
  }
}
const imgContainer = document.getElementById('imgContainer')
const imageElement: any = document.createElement('img')
imgContainer?.appendChild(imageElement)
const url = new URL("../images/garfcalculator.jpg", import.meta.url)
imageElement.src = url
console.log(url)
console.log(imageElement.src)