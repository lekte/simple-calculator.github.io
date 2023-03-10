// Retrieve the screen element
const screen = document.getElementById('screen');

// Define a variable to keep track of the current calculation
let calculation = '';

// Define function to append characters to the screen
function appendToScreen(value) {
    calculation += value;
    screen.value = calculation;
}

// Define function to clear the screen
function clearScreen() {
    calculation = '';
    screen.value = '';
}

// Define function to remove last character from the screen
function backspace() {
    calculation = calculation.slice(0, -1);
    screen.value = calculation;
}

// Define function to perform the calculation and display the result
function calculate(operator) {
    // Check if there is already a calculation in progress
    if (calculation !== '') {
        // Evaluate the calculation
        const result = eval(calculation);

        // Display the result
        screen.value = result;

        // Update the calculation variable with the result
        calculation = result.toString();
    }

    // If an operator button is clicked, append the operator to the calculation
    if (operator !== '=') {
        calculation += operator;
    }
}
