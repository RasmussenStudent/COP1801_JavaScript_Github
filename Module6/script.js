// Using the code from Module 5, make changes for Module 6
// Changed from myDogConst to Dog which I think is what is being asked?
function Dog (name, breed, show, notes, sound, talk) {
  this.dogName = name;
  this.dogBreed = breed;
  this.dogShow = show;
  this.dogNotes = notes;
  this.mySound = sound;
  this.canTalk = talk;

  // Object method to display greeting information
  // Modify the myGreeting method to display whether the dog can talk. Use a conditional statement to determine if the dog can talk.
  this.myGreeting = function() {
    let talk;
    if(this.canTalk){ // If it evaluates to true, then the dog can talk otherwise it can't.
      talk = "I can talk!"
    } else {
      talk = "I cannot talk."
    }

    return ( // updated to use template literals
      `Hello, my name is ${this.dogName}, ${this.mySound}<br>
      I am in the TV show ${this.dogShow}. My character is a ${this.dogBreed}.<br>
      I'm ${this.dogNotes}. Also, ${talk}`
    );
  };
}

// Need to create the object first - updated from myDogConst to Dog.
const tvDog = new Dog(
  "Brian",
  "white labrador retriever",
  "Family Guy",
  "the family dog and equal family member; about the Griffins, a dysfunctional family",
  "When I\'m bored I usually ask whose leg do I need to hump to get a drink around here?",
  true); 
 
// Call the myGreeting method to display if the dog can talk.
document.write(tvDog.myGreeting());

// You will now use a constructor function to define a dog object and then pass values to it to create new objects.
// Create a constructor to define the object’s properties using the same properties you used to create the myDogConst.

let dog1 = new Dog(
  "Santa's Little Helper",
  "greyhound",
  "The Simpsons",
  "The family dog; about a dysfunctional family and noted for its fast and subtle humor and ridiculous plots",
  "When I bark I'm usually oblivious and harmless.",
  false);

let dog2 = new Dog(
  "Underdog",
  "beagle",
  "The Underdog Show",
  "About a dog with super powers who always speaks in rhymes",
  "I speak in rhyme all the time. Polly is my girl and she makes my heart swirl.",
  true);

// Use a for ... in loop to display each property and value in the object appropriately labeled.
document.write("<h2>Properties and values of the dogs:</h2>");
document.write("<h2>Here is the first one</h2>");
for (let property in dog1) {
  if (dog1.hasOwnProperty(property)) {
    document.write(`dog1.${property} = ${dog1[property]}<br>`);
  }
}
document.write("<h2>Here is the second one</h2>");
for (let property in dog2) {
  if (dog2.hasOwnProperty(property)) {
    document.write(`dog2.${property} = ${dog2[property]}<br>`);
  }
}

let dogChoice = prompt(`Select a dog (${dog1.dogName} or ${dog2.dogName}):`).toLowerCase();
// Display the selected dog's information or an error message
if (dogChoice === dog1.dogName.toLowerCase()) {
  document.write("<h2>Here is your dog!</h2>");
  document.write("<p>" + dog1.myGreeting() + "</p>");
} else if (dogChoice === dog2.dogName.toLowerCase()) {
  document.write("<h2>Here is your dog!</h2>");
  document.write("<p>" + dog2.myGreeting() + "</p>");
} else {
  document.write(`<h2>Error: The only choices were ${dog1.dogName} or ${dog2.dogName}.</h2>`);
}

  

