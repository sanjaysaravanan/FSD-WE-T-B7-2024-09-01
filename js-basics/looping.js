// looping used to repeat somethings
/* for (;;) {
  console.log("something");
} */

// print the first N numbers starting from 0

// N = 24, 0,1,2,3,...23 N = 24
var N = 24;
for (var i = 0; i < N; i = i + 1) {
  console.log(i);
}

console.log(i); // 24

// print the first N numbers starting from 1
// N = 24, 1,2,3,...24 N = 24
var N = 24;
for (let i = 1; i <= N; i = i + 1) {
  console.log(i);
}

//console.log(i); // Reference Error: undefined

// print the first N numbers starting from 1
var N = 24;
let i = 1;
console.log(i);
while (i <= N) {
  console.log(i);
  // inc/dec
  i = i + 1; // i++;
}

console.log(i); // 25

{
  // let lives within in curly braces
  // can access i since it in the global scope
  let x = 0;
  var z = 100;
}

console.log(x); // error
console.log(z); // 100

var N = 24;
let i = 0;
do {
  console.log(i);
  i++;
} while (i < N);

// Iteration
//         0  1  2  3  4
var arr = [1, 2, 3, 4, 5];

// arr.length -> return the length of the array (5)

// Print each values of the arr
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of -> iterating through the array elements
var arr = [1, 2, 3, 4, 5];

// arr.length -> return the length of the array (5)

var arr = [91, 92, 93, 94, 95];
// Print each values of the arr
for (let val of arr) {
  console.log(val);
}

// for...in
var arr = [91, 92, 93, 94, 95];
// Print each values of the arr
for (let index in arr) {
  console.log(index);
}
