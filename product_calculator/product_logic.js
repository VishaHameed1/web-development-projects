// Array containing the list of products (name and price)
const products = [
    { name: 'Laptop Charger', price: 1500 },
    { name: 'USB-C Cable', price: 450 },
    { name: 'Gaming Mouse', price: 3200 },
    { name: 'External SSD (500GB)', price: 9800 },
    { name: 'Webcam (HD)', price: 2150 }
];

/**
 * Function to display the product list on the webpage.
 */
function displayProducts() {
    const listElement = document.getElementById('productList');
    let htmlContent = '';
    
    // Iterate through the products array and create list items
    products.forEach(product => {
        htmlContent += `
            <li>
                <span>${product.name}</span>
                <strong>Rs. ${product.price.toFixed(2)}</strong>
            </li>
        `;
    });
    
    // Insert the generated HTML into the <ul> element
    listElement.innerHTML = htmlContent;
}

/**
 * Function to compute and display the total price of all products.
 */
function calculateTotal() {
    const outputDiv = document.getElementById('totalOutput');
    let total = 0;

    // Use the reduce method to efficiently sum up all prices
    total = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    // Display the result neatly formatted
    outputDiv.textContent = `Total Price of All Products: Rs. ${total.toFixed(2)}`;
}

// Call the function to display the product list when the page loads
displayProducts();