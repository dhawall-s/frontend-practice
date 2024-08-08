let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function operation(op) {
    display.value += ' ' + op + ' ';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        // If the key is a number or a decimal point
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // If the key is an operator
        operation(key);
    } else if (key === 'Enter' || key === '=') {
        // If the key is Enter or =
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        // If the key is Backspace
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        // If the key is Escape (C)
        clearDisplay();
    }
});
