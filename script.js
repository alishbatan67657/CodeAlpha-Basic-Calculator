// JavaScript Logic
const display = document.getElementById('display');

// Handle User Input (Buttons)
function appendValue(value) {
    display.value += value;
}

// Clear the Screen
function clearDisplay() {
    display.value = '';
}

// Delete last character (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate Result (Real-time display logic)
function calculate() {
    try {
        if (display.value === '') return;
        // Function constructor ka use eval() ke bajaye safe calculation ke liye kiya gaya hai
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Error ko 1.5 second baad clear kar dega
    }
}

// Bonus: Keyboard Support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Numbers aur operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    }
    // Enter key calculation ke liye
    else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Default form submission ko rokta hai
        calculate();
    }
    // Backspace se delete
    else if (key === 'Backspace') {
        deleteLast();
    }
    // Escape se clear
    else if (key === 'Escape') {
        clearDisplay();
    }
});