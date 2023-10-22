// Create a script that calculates the amount of tip to leave for a service.
let selectedService;

function submitData(){
    // Prompt the user to enter the dollar amount of the service and ask if the service quality was great, ok, 
    //     or poor (assume great service gets a 20% tip, Ok service 15%, poor service 10%).
    amount = verifyAmount();
    tip = verifyService();

    if (amount == false || tip === false) {
        // If either are false, just end here and don't execute the calculateTip function.
        // While it does work without this, I noticed the console throws a "Uncaught TypeError"
        return;
    }

    calculateTip(amount, tip);    
}

function verifyService(){
    // Create a function to verify a valid service quality was entered.
    // If an invalid value is entered, display a message and end the code.
    selectedService = document.getElementById("service").value; // Assign the word to the global variable
    var tipAmount = 0;

    if (selectedService === "Great") {
        tipAmount = 0.20; // 20% tip for "Great Service"
    } else if (selectedService === "Okay") {
        tipAmount = 0.15; // 15% tip for "Okay Service"
    } else if (selectedService === "Poor") {
        tipAmount = 0.10; // 10% tip for "Poor Service"
    } else {
        alert("Valid service quality was not entered. Ending program.");
        return false;
    }

    return tipAmount;
}

function verifyAmount(){
    // Create a function to verify a service amount between $5.00 and $500.00 was entered.
    // If an invalid value is entered, display a message and end the code.
    var amountInput = document.getElementById("dollarAmount").value;
    var cleanAmount = amountInput.replace(/[^0-9.]/g, '') // This just makes sure to only keep the numbers and the decimal
    var convertedAmount = parseFloat(cleanAmount); // Now we convert it to a float

    if (isNaN(convertedAmount) || convertedAmount < 5.00 || convertedAmount > 500.00){ // Check that it is between $5.00 and $500.00 and a number
        alert("Valid amount was not entered. Ending program.");
        return false;
    } else {
        return convertedAmount; // Returns the value between 5.00 and 500.00
    }
}

function calculateTip(totalAmount, tipPercentage){
    // Create a function to calculate the tip amount and return the value.
    // If valid values are entered, call the function to calculate the tip. The tip amount is displayed to the user
    //     in a descriptive message that includes the service amount, the recommended tip, and the service quality
    //     the tip is based on.
    var amount = totalAmount;
    var tip = tipPercentage;
    var serviceTotalDiv = document.getElementById("serviceTotal");
    var tipTotalDiv = document.getElementById("tipTotal");
    var serviceRatingDiv = document.getElementById("serviceRating");
    var grandTotalDiv = document.getElementById("grandTotal");

    var tipAmount = amount * tip; // Get the tip amount
    console.log(tipAmount);
    var totalBill = amount + tipAmount; // Add the tip to the bill

    // Now to update the display and set all results to only 2 decimal places
    serviceTotalDiv.textContent = "Service Total: $" + amount.toFixed(2);
    tipTotalDiv.textContent = "Tip Total: $" + tipAmount.toFixed(2);
    serviceRatingDiv.textContent = "Based on Service Rating: " + selectedService;
    grandTotalDiv.textContent = "Grand Total: $" + totalBill.toFixed(2);

}










