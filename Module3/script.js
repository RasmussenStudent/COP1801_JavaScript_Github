// Write a for loop that counts from 0 to 10. Each time through the loop, check if the current number is odd or even and display a message to the webpage.
function runWhileLoop(){
    let textOutput = ''; // Used to store the text to later be output to the page. This is easier than using append.
    let i = 0;
    while (i <= 10){
        evenOrOdd = ''; // store the even or odd text
        if (i%2 == 0){ // Checks to see i is divisable by 2. If the remainder is zero, it's even. Anything else is odd.
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        textOutput += "Count " + i + " is " + evenOrOdd + "<br>";
        i++;
    }
    document.getElementById("evenOdd").innerHTML = textOutput; // Write the results to the div
}

// Ask the user for a number between 5 and 20, and store their input in the variable myNum.
// Use the myNum variable in a Do While loop to display the loop counter until it equals the value of myNum.
// The loop counter should start at 1. The loop stops when the counter equals the variable myNum.
function runDoWhileLoop(){
    let askUserText = '';
    let myNum;

    do {
        myNum = parseInt(prompt("Enter a number between 5 and 20: "));
    } while (isNaN(myNum) || myNum < 5 || myNum > 20); // Validate user input and, if incorrect, prompt again. 

        let counter = 0;
        do {
            askUserText += "<br> The current count is " + counter + " which is not your number.";
            counter++;
        } while (counter != myNum);
    
    askUserText += "<br> The current count is " + counter + " which is your number.<br><br>"; // Technically shows the counter after existing the loop
    
    document.getElementById("askUser").innerHTML = askUserText; // Write the results to the div
}

// Store the following subjects in an array: Accounting, Algebra, Programming, Art, Data Analytics
// Display the array values in a readable format using foreach()
// Display the array values separated by commas using one statement. Note: See lesson content for help if needed.
function runForLoop(){
    let arrayDisplayText = '';
    const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

    for (let i=0; i < subjects.length; i++){
        arrayDisplayText += i+1 + ". " + subjects[i] + "<br>"; // Display the subjects in a readable numbered list
    }

    arrayDisplayText += "<br>";
    arrayDisplayText += subjects.join(', '); // Displays the comma seperated one. I could have done it without the join, but I like the space to make it more readable.

    document.getElementById("arrayDisplay").innerHTML = arrayDisplayText; // Write both results to the div
}

runWhileLoop();
runDoWhileLoop();
runForLoop();


