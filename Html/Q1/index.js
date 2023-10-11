
function appendToDisplay(value) {
    document.getElementById('result').value += value;
}


function calculateResult() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/[0-9+\-*/.=]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'C' || key === 'c') {
        clearDisplay();
    }
});
