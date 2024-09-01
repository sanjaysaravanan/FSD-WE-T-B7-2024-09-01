// print n number starting from 1

var n = 10;
// For

for (let i = 1; i < n; i++) {
  console.log(i);
}

// While
let i = 1;
while (i < n) {
  console.log(i);

  i++;
}

// do while
let j = 1;
do {
  console.log(i);

  j++;
} while (j < n);

// decrementing loop
// Print the n numbers starting from n, n-1, n-2 ... 1

var n = 10;
// n = 10
// 10 9 8 7 6 ... 1
for (let i = n; i >= 1; i--) {
  console.log(i);
}

// While
let p = n;
while (p >= 1) {
  console.log(p);

  p--;
}

// print all the event number till N starting from 2
var n = 10;

// Output: 2 4 6 8 10
let q = 2;
while (q <= n) {
  console.log(q);

  // below two statements are same
  // q = q + 2;
  q += 2;
}

for (let i = 2; i <= n; i = i + 2) {
  console.log(i);
}

// find the sum of digits
// I/P: 456
// O/P: 15
// Exp: 4 + 5 + 6 = 15

var num = 456;

let sumOfDigits = 0;

while (num >= 1) {
  // get the last digit
  let digit = num % 10; // will give last digit

  // below two statements are same
  // sumOfDigits += digit;
  sumOfDigits = sumOfDigits + digit;

  // decrement condition where we divide & decrement the number
  num = Math.floor(num / 10);
}

console.log(sumOfDigits);

// Iteration

// array

const arr = [91, 92, 93, 94, 95, 96, 97];

// using pointer in for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of --> values of arr
for (let v of arr) {
  console.log(v);
}

// for...in --> index of arr
for (let index in arr) {
  console.log(index);
}

// Object
const obj = { name: "sanjay", age: 30, role: "developer" };

console.log(obj.age, obj["age"]);

for (let k in obj) {
  console.log(k);
  console.log(obj[k]); // obj['name'], obj['age'], obj['role']
}

// for...of cannot used for object
/* for (let val of obj) {
  console.log(val);
}
 */
