// In this project, you will use the information on Wikipedia’s List of Fictional Dogs
// in Animated Television to create a literal object, a constructor, add a method to the object,
// and display the values. For each task, use comments to label steps as needed.
// Group comments whenever possible to keep the code readable.

// Goal 1: Pick a favorite animal from Wikipedia's List of Fictional Dogs in Animated Television and
// create a literal object named myDog. Use the properties provided on the Wikipedia page to define
// an object using an object literal.
// Goal 2: In addition to the properties on the List of Fictional dogs, include a property you name
//  “mySound” that stores what the dog might say to describe how it sounds. This will be text to represent
// their personality. If they are a mean dog their sound might be “when you hear me you should be scared”,
// if they are a big dog they might be “I sound very intimidating because of my size”, if they are a tiny dog,
// they might sound like “you might not be scared, but you should be!”. Use your imagination here to mimic
// what the character might say.

const myDog = {
  dogName: 'Brian',
  dogBreed: 'white labrador retriever',
  dogShow: 'Family Guy',
  dogNotes: 'the family dog and equal family member; about the Griffins, a dysfunctional family.',
  mySound: 'When I\'m bored I usually ask whose leg do I need to hump to get a drink around here?'
};

// Display the dog’s name included in a message to the user that describes the dog using each property. 
document.write("Hello, my name is " + myDog.dogName + ", " + myDog.mySound + "<br>");
document.write("I am in the TV show " + myDog.dogShow + ". My character is a " + myDog.dogBreed + "." + "<br>");
document.write("I'm " + myDog.dogNotes + "<br><br>");

// Now create another dog object called myDogConst using a simple constructor.
// Use the same information you used to create the object literal.
// This time add a new property named canTalk and give it a true or false value.

function myDogConst (name, breed, show, notes, sound, talk) {
  this.dogName = name;
  this.dogBreed = breed;
  this.dogShow = show;
  this.dogNotes = notes;
  this.mySound = sound;
  this.canTalk = talk;

// Create an object method called myGreeting (a method is a function stored in an object) as one of the properties.
// When the object’s method is called, the method would display a greeting that displays the information below:
// "Hello, my name is Brian, When I'm bored I usually ask whose leg do I need to hump to get a drink around here?
// I am in the TV show Family Guy. My character is a white labrador retriever.
// I'm the family dog and equal family member; about the Griffins, a dysfunctional family."

  this.myGreeting = function() {
    return (
      "Hello, my name is " + this.dogName + ", " + this.mySound + "<br>" +
      "I am in the TV show " + this.dogShow + ". My character is a " + this.dogBreed + ".<br>" +
      "I'm " + this.dogNotes
    );
  };
}

// Call the object’s method to display the myGreeting message for the object.
// Need to create the object first.
var dog = new myDogConst(
  "Brian",
  "white labrador retriever",
  "Family Guy",
  "the family dog and equal family member; about the Griffins, a dysfunctional family.",
  "When I\'m bored I usually ask whose leg do I need to hump to get a drink around here?",
  true); 
 
// Now we can call it.
document.write(dog.myGreeting());
