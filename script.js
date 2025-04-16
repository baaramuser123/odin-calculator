console.log("Hello World!");

let operand1 = "";
let operand2 = "";
let inputOperator = "";
let currentEntry = "";
let buttons = document.querySelector(".buttons");

let display = document.querySelector(".display");
let history = document.querySelector(".history");

buttons.addEventListener("click", (event) => {clickHandling(event);
    
});

function clickHandling(event){
    if(event.target.textContent == "CLEAR") return clearEntry();
    if(display.textContent == "ERROR") return;
    if(currentEntry == ""){
        if(event.target.classList.value.includes("number")) return numberEntry(event);
        else return display.textContent = "ERROR";
    }
    if(event.target.classList.value.includes("number")) return numberEntry(event);
    if(event.target.classList.value.includes("operator")) return operatorEntry(event);
    if(event.target.textContent == "=") return equalsEntry();
}

function numberEntry(event){
    currentEntry += event.target.textContent;
    display.textContent += event.target.textContent;
}

function operatorEntry(event){
    if(operand1 === ""){
        operand1 = currentEntry;
        inputOperator = event.target.textContent;
        display.textContent += " " + inputOperator + " ";
        currentEntry = "";
    }
    else{
        let result = equalsEntry();
        operand1 = result;
        inputOperator = event.target.textContent;
        display.textContent = operand1 + " " + inputOperator + " ";
    }
}

function clearEntry(){
    operand1 = "";
    operand2 = "";
    inputOperator = "";
    currentEntry = "";
    if(display.textContent == "") history.textContent = "";
    display.textContent = "";
}

function equalsEntry(){
    let result;
    if(operand1 == "" || currentEntry == "") return;
    else operand2 = currentEntry;
    result = operate(operand1, operand2, inputOperator);
    history.textContent = display.textContent + " = " + result;
    clearEntry();
    return result;
}


function operate(a, b, operator){
    switch(operator){
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        default:
            console.log("operator not defined");
    }
}

function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a * +b;
}

function divide(a, b){
    if(b == 0) return "undefined, butthead";
    return Math.round(100*(+a / +b))/100;
}