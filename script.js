let currentPrice = 50; // Initial random price
let alertPrice = null;

// Function to update the price every second
function updatePrice() {
    currentPrice = (Math.random() * 200).toFixed(2); // Generate a random price
    document.getElementById("price").innerText = currentPrice;

    // Check if the price has reached the alert
    if (alertPrice !== null && currentPrice >= alertPrice) {
        document.getElementById("notification").innerText = `🔥 Price hit $${alertPrice}!`;
        alert("Price Alert Triggered!");
        alertPrice = null; // Reset alert
    }
}

// Function to set a price alert
function setAlert() {
    let inputPrice = parseFloat(document.getElementById("alertPrice").value);
    if (isNaN(inputPrice) || inputPrice <= 0) {
        alert("Please enter a valid price.");
        return;
    }
    alertPrice = inputPrice;
    document.getElementById("notification").innerText = `🔔 Alert set at $${alertPrice}`;
}

// Add event listener to button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("setAlertBtn").addEventListener("click", setAlert);
});

// Update price every second
setInterval(updatePrice, 1000);
