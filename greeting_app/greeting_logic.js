/**
 * Function to validate inputs, generate a greeting, and update the DOM.
 */
function displayGreeting() {
    // 1. Get references to the input and output DOM elements
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const outputDiv = document.getElementById('output');

    // Get the values (trim whitespace from name)
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    // Reset output styling
    outputDiv.className = ''; 

    // 2. Form Validation: Check for empty inputs
    if (name === '' || age === '') {
        outputDiv.textContent = 'Error: Please fill in both Name and Age fields.';
        outputDiv.classList.add('error'); // Apply error styling
        return; 
    }

    // 3. Generate the personalized message
    const message = `Hello ${name}, you are ${age} years old!`;

    // 4. Use DOM manipulation to display the result
    outputDiv.textContent = message;
    outputDiv.style.color = '#007BFF'; // Example of dynamic styling
}