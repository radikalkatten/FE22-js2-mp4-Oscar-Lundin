let currentNumber=[],operator="",previousNumber=0;const resultElement=document.getElementById("result");function handleNumButtonClick(e){return function(){appendToResult(e)}}for(let e=0;e<=9;e++){const t=document.getElementById(`${e}`);console.log(t),t.addEventListener("click",handleNumButtonClick(e))}const addButton=document.getElementById("add");addButton.addEventListener("click",add);const subtractButton=document.getElementById("subtract");subtractButton.addEventListener("click",subtract);const multiplyButton=document.getElementById("multiply");multiplyButton.addEventListener("click",multiply);const divideButton=document.getElementById("divide");divideButton.addEventListener("click",divide);const equalsButton=document.getElementById("equals");equalsButton.addEventListener("click",equals);const clearButton=document.getElementById("clear");function appendToResult(e){currentNumber.push(e),resultElement.value=currentNumber.join("")}function clearResult(){currentNumber=[],operator="",previousNumber=0,resultElement.value=""}function add(){operator="+",previousNumber=parseFloat(resultElement.value),currentNumber=[]}function subtract(){operator="-",previousNumber=parseFloat(resultElement.value),currentNumber=[]}function multiply(){operator="*",previousNumber=parseFloat(resultElement.value),currentNumber=[]}function divide(){operator="/",previousNumber=parseFloat(resultElement.value),currentNumber=[]}function equals(){const e=parseInt(currentNumber.join(""));currentNumber=[];const t=previousNumber;if("+"===operator){const n=e+t;resultElement.value=n.toString()}else if("-"===operator){const n=t-e;resultElement.value=n.toString()}else if("*"===operator){const n=e*t;resultElement.value=n.toString()}else if("/"===operator){if(0===e)return void alert("Cannot divide by zero");const n=t/e;resultElement.value=n.toString()}}clearButton.addEventListener("click",clearResult);
//# sourceMappingURL=index.fd4e0c36.js.map