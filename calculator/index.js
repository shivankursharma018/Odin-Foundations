// Get all buttons
const buttons = document.querySelectorAll('button');

// Initialize the screen
let screen = document.querySelector('.screen');
let currentNumber = '';
let previousNumber = '';
let operation = '';

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Handle number buttons
    if (value.match(/\d/)) {
      currentNumber += value;
      screen.textContent = currentNumber;
    }

    // Handle operation buttons
    else if (['+', '-', '*', '/'].includes(value)) {
      operation = value;
      previousNumber = currentNumber;
      currentNumber = '';
      screen.textContent = previousNumber + operation;
    }

    // Handle the equal button
    else if (value === '=') {
      const result = eval(previousNumber + operation + currentNumber);
      screen.textContent = result.toString();
      currentNumber = result.toString();
      previousNumber = '';
      operation = '';
    }

    // Handle the clear button
    else if (value === 'C') {
      currentNumber = '';
      previousNumber = '';
      operation = '';
      screen.textContent = '';
    }
  });
});

// take input 1
// take input +
// take input 2
// all is in a string '1+2'
// iterate the string 1, +, 2
// solve string

const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

// const div = funtion(n1, n2) {
//     return float(n1 / n2);
// };

const multiply = function(arr) {
  let result = 1;
  arr.forEach(item => {
    result *= item;
  });
  return result;
};
