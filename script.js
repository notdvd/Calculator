// Calculator Variables
const screen=document.querySelector('.screen');

const calculator = {
    display: '0',
    firstNumber: null,
    operator: null,
    secondNumberEntry: false,
    secondNumber: null,
};

// FUNCTIONS

//Calculator Screen
function updateDisplay() {
    screen.innerHTML = calculator.display;
};

//Evaluate Expression
function calculate() {

    //Calculation Variables
    num1=calculator.firstNumber;
    num2=calculator.secondNumber;
    operator=calculator.operator;

    //Calculation
    if (operator === '+') {
        return num1+num2;
    } else if (operator === '-') {
        return num1-num2;
    } else if(operator === '*') {
        return num1*num2;
    } else if (operator === '/') {
        return num1/num2;
    }

    return num2
}

//Number Clicked
function numberInput(number) {

    //Decides whether to update display for first number or updates first number and display second number
    if (calculator.secondNumberEntry === true) {
        calculator.display = number;
        calculator.secondNumberEntry = false
    } else {
        calculator.display = calculator.display === '0' ? number : calculator.display + number;
    }
};

//Point Clicked
function pointInput(point) {

    if (!calculator.display.includes(point)) {
        calculator.display += point;
    }
};

//Operation Clicked
function operatorInput(operator) {

    //If '=' or a second operator is pressed, calculation occurs
    if (operator === '=' || operator !== 'null') {
        calculator.secondNumber=parseFloat(calculator.display)
        calculation = calculate();
        calculator.display = calculate();
        calculator.firstNumber = calculation;
        calculator.operator = operator;
        calculator.secondNumberEntry = true;
    }

    //If first operator is presssed, calculator operator and first number are updated
    if (calculator.firstNumber === null) {
        calculator.firstNumber = parseFloat(calculator.display);
        calculator.operator = operator;
        calculator.secondNumberEntry = true;
    }

    //console.log(calculator);
};

//Clear Clicked
function allClear() {

    //resets calculator and screen
    calculator.display = '0';
    calculator.firstNumber = null;
    calculator.operator = null;
    calculator.secondNumberEntry = false;
    calculator.secondNumber = null;
}

//Button Clicked
function onButtonClick(clickedButtonEvent) {

    //Clicked button data
    const clickedButton = clickedButtonEvent.target;
    const value = clickedButton.value;

    //Function called based on button
    if (clickedButton.classList.contains('operation')) {
        //console.log('operation', value);
        operatorInput(value);
    } else if (clickedButton.classList.contains('point')) {
        //console.log('point', value);
        pointInput(value);
    } else if (clickedButton.classList.contains('clear')) {
        //console.log('clear', value);
        allClear();
    } else {
        //console.log('number', value);
        numberInput(value);
    }

    //Display is updated after every button is clicked/function is called
    updateDisplay();
};

//Event Listeners
document.querySelectorAll('.calc-button').forEach(button => button.addEventListener('click', onButtonClick))