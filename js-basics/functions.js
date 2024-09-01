// normal function

// function definition
function displayInfo() {
  console.log("Hello FSD-WE-T-B7");
  console.log("Mentor: Sanjay");
}

// Function calling/invoking/execution
displayInfo();

// function with arguments/parameters
function greetBatch(batch, mentor) {
  console.log("Welcome to the MERN Course", batch);
  console.log("By", mentor);
}

greetBatch("FSD-WE-T-B7", "Sanjay");

// dash-case: greet-batch
// snake_case: greet_batch
// camelCase: greetBatch

// return
function getGreetBatch(batch, mentor) {
  /* console.log("Welcome to the MERN Course", batch);
  console.log("By", mentor); */
  return "Welcome to the MERN Course " + batch + " By " + mentor;
}

const val = getGreetBatch("FSD-WE-T-B7", "Sanjay");

console.log(val); // "Welcome to the MERN Course FSD-WE-T-B7 BY Sanjay"

// Arrow Function
var displayMessage = () => {
  console.log("Hello Guys");
  console.log("I am Your Mentor, Sanjay");
};

displayMessage();

// arrow function with parameters
let welcomBatch = (batch, mentor) => {
  console.log("Hello Guys", batch);
  console.log("I am Your Mentor,", mentor);
};

welcomBatch("FSD-WE-T-B7", "Sanjay");

// return value with return keyword
const getWelcomeBatch = (batch, mentor) => {
  return "Hello Guys " + batch + " I am Your Mentor, " + mentor;
};
getWelcomeBatch("FSD-WE-T-B7", "Sanjay");

// return value without return keyword - can be done only when there is single statement which is a return
const strWelcomeBatch = (batch, mentor) =>
  "Hello Guys " + batch + " I am Your Mentor, " + mentor;
strWelcomeBatch("FSD-WE-T-B7", "Sanjay");
