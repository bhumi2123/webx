function calculate() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operatorSelect = document.getElementById('operator');
    var resultParagraph = document.getElementById('result');
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operator = operatorSelect.value;
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            }
            else {
                result = NaN; // Indicate division by zero
            }
            break;
        default:
            result = NaN; // Indicate invalid operator
            break;
    }
    resultParagraph.textContent = isNaN(result) ? "Invalid input" : "Result: ".concat(result);
}
