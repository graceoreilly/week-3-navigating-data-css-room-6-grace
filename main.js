// Print out into the console the entire SOCBook object
console.log(SOCBook);

// Take a look at it in the console
// Notice the shape of the data, and all of the different information contained in it
// Try and play to print out the different parts of the data into the console

// For all the following tasks, access/select the data required through the SOCBook object

// For the Tasks 1, 2, and 3 you will look at the object and find your desired data manually. Then, simply select it from the object
// e.g. object.path[2].data.I.want

// Task 1
// Complete the function so it returns Liz Rios' favourite fruit



function getAllPeople () {
  const people = SOCBook.data.people; //attempting to access the people array
  people.forEach(function(person) { //the .forEach() method loops through the people array and prints out each person's name
    console.log(person.name); //printing the name property for each person
  })
  }
  getAllPeople ();

  function allFavFruits () {
    const favFruit = SOCBook.data.people.favoriteFruit; //to try get a list of all the fruits and copying the example like above?
    favFruit.forEach(function(favoriteFruit) {
      console.log(favFruit.favoriteFruit);
    })
  }
  allFavFruits ();
  

  function lizRiosFavFruit() {
  }
  lizRiosFavFruit ();


//there is a people array
//confirm Liz Rios name, extract all of the people in SOCBook
//check the property name for their favourite fruit - favoriteFruit
//now that i have confirmed their name and the property name for favoriteFruit, I need to display this but I don't know how to link it


/////////////////////////////////////////////////////////////////////////////////////////////////////


// TO UNDO console.log("Liz Rios' favourite fruit is:", lizRiosFavFruit());

// Task 2
// Complete the function so it returns Marie David's 2nd friend's name

function marieDavid2ndFriend() {
  // Your code goes here...
}

// TO UNDO console.log("Marie David's 2nd friend is:", marieDavid2ndFriend());

// Task 3
// Complete the function so Cooper Brady's greeting message is shown in the p tag with the id of "message"
// We've helped start breaking down the plan!

function cooperBradyGreeting() {
  // Your code goes here...
  // Select Cooper Brady's greeting message from the object
  // Select the p tag with the id of message
  // Set the text of the p tag to be the greeting message
}

cooperBradyGreeting();

// For Tasks 4, 5, 6, and 7 you will be getting much more programmatic with how you interact with the data, rather than manually finding and selecting

// Task 4
// Complete the following function
// In it, we want to take in an email as a parameter, and loop through search for the person who has that email
// If we find them, return the person
// If we don't, return null

function findPersonByEmail(email) {
  // Your code goes in here...
}

const found = findPersonByEmail("carversalinas@comtent.com");
// TO UNDO console.log("What I found:", found);

// Task 5
// Make a list containing only the people's names who's favourite fruit is a mango

function getMangoLovers() {
  let mangoLovers = [];

  // Your code goes here...

  return mangoLovers;
}

// TO UNDO console.log("Who loves mango?", getMangoLovers());

// Task 6
// Complete the function. Try and return the address of the person in the position in the array we've been handed

function getAddress(positionInArray) {
  // Your code goes here...
}

// TO UNDO console.log(getAddress(0));

// Task 7
// Show a profile for each person in the ul with id "profiles"
// A profile should include a person's name, age, and their image
// Remember, break this down and tackle it step by step!
