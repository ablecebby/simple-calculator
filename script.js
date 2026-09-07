const display = document.getElementById('display');

// Appends clicked numbers/operators to the screen
function appendValue(value) {
    display.value += value;
}

// Clears the entire display
function clearDisplay() {
    display.value = '';
}

// Deletes the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Evaluates the math expression safely
function calculateResult() {
    try {
        // eval calculates string expressions like "5+5"
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}