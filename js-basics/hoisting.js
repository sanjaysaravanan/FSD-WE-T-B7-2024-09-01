console.log(x); // undefined // because of the hoisting behavior

var x;

x = 900;

y = 100;

console.log(y); // 100 // because of the hoisting behavior

var y;
/* var z;

var y; */

// const, let cannot be hoisted

console.log(p);
let p;
p = 100;

console.log(z);
const z = 100;

// hositing of var inside function
function sampleFunc() {
  console.log(r);
  var r;
  r = 100;
}

// Hosting of functions

displayInfo();

function displayInfo() {
  console.log("Hi, Welcome to the Class");
}
