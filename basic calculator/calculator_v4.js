/**
 * Basic JavaScript Calculator Function
 * This function reads two numbers from the input fields and performs the
 * specified arithmetic operation (add, subtract, multiply, or divide).
 * It includes error handling for non-numeric input and division by zero.
 */
function calculate(operation) {
    // 1. Get the input values from the HTML elements
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const resultElement = document.getElementById('result');

    // Convert input values to floating-point numbers
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);

    let result;
    
    // 2. Ensure proper error handling (e.g., empty or non-numeric input)
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Error: Please enter valid numerical inputs.";
        resultElement.style.color = "red";
        resultElement.style.borderColor = "red";
        return; // Stop execution if inputs are invalid
    }

    // 3. Perform the calculation based on the operation parameter
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            // 4. Ensure proper error handling (e.g., division by zero)
            if (num2 === 0) {
                resultElement.textContent = "Error: Division by zero is not allowed.";
                resultElement.style.color = "red";
                resultElement.style.borderColor = "red";
                return; // Stop execution if division by zero occurs
            }
            result = num1 / num2;
            break;
        default:
            // This case should theoretically not be reached
            resultElement.textContent = "Error: Invalid operation specified.";
            return;
    }

    // 5. Display the result
    // Reset styling for successful calculation
    resultElement.style.color = "#28a745";
    resultElement.style.borderColor = "#28a745";
    
    // Use toFixed(2) for cleaner output, but still keep precision for the operation
    resultElement.textContent = `Result: ${result.toFixed(2)}`;
}