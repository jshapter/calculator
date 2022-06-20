let operator = '-';
let num1 = '';
let num2 = '';
let int1 = 0;
let int2 = 0;
let num1set = false;
const dispContent = document.querySelector('.display');

function operate(num1,num2) {
    int1 = parseFloat(num1);
    int2 = parseFloat(num2);
    if (operator === '+') {
        dispContent.textContent = int1 + int2;
    } else if (operator === '-') {
        dispContent.textContent = int1 - int2;
    } else if (operator === '*') {
        dispContent.textContent = int1 * int2;
    } else if (operator === '/') {
        dispContent.textContent = int1 / int2;
    } else {
        dispContent.textContent = 'ERROR';
    }
    num1 = '';
    num2 = '';
    int1 = 0;
    int2 = 0;
    operator = '';
    num1set = false;
}

function setOperator(clickID) {
    operator = clickID;
    num1set = true;
}

function addNum(clickID) {
    if (num1set === false) {
        num1 = num1 + clickID;
        dispContent.textContent = num1;
    } else {
        num2 = num2 + clickID;
        dispContent.textContent = num2;
    }
}

ac.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    dispContent.textContent = '';
    num1set = false;
});