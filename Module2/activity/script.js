let Fname; // delcares the variable Fname for use later
let myFavNum; // delcares the variable myFavNum for use later
const piValue = 3.1415926; // Creates the constant piValue variable with the value of Pi to 7 digits

function firstName(){
    // Gets the value for the first name from the HTML and stores it in Fname
    Fname = document.getElementById("firstName").value;

    // Creates the greeting using the user's first name and stores it as a node
    let greeting = document.createTextNode("Hello, " + Fname + "! I hope you are having a good day.");

    //appends the greeting node to the existing div namePrompt
    document.getElementById("namePrompt").appendChild(greeting);

    // Removes the hidden attribute from the numberDiv to display the next question
    document.getElementById("numberDiv").removeAttribute("hidden");

    // Removes the button so the user can't keep clicking "Submit"
    document.getElementById("nameBtn").remove();
}

function calcNum(){
    // Gets the value for the favorite number from the HTML and stores it in myFavNum
    myFavNum = document.getElementById("myFavNum").value;

    // Calculates the area of a circle where the user's favorite number is the radius and stores it in myArea
    const myArea = piValue * Math.pow(myFavNum, 2);

    // Creates the text node to append to the div
    let variableText =  document.createTextNode(Fname + ", did you know that if you took your favorite number, " + 
    myFavNum + ", and assumed that was the radius of a circle, using the equation A = πr2 with π equal to " + 
    piValue + " the circle's area would be: " + myArea + "! Isn't that amazing?");

    //appends the greeting node to the existing div namePrompt
    document.getElementById("numberDiv").appendChild(variableText);

    // Removes the button so the user can't keep clicking "Submit" here either
    document.getElementById("numBtn").remove();
}
