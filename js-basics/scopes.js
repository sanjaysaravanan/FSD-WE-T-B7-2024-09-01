var x = 100;

function testFunc() {
  var y = 99;
  console.log(y); // 99
}

console.log(x); // 100

testFunc();

console.log(y); // ReferenceError: Y is not Defined

/* var x = 100;
var y = 999;

function testFunc() {
  var y = 99;
  console.log(y); // 99
}

console.log(x); // 100
console.log(y); // 999

testFunc();
 */

/* var x = 100;
var y = 999;

function testFunc() {
  console.log(y); // 999 - this will access the y variable from gloabl
}

console.log(x); // 100

testFunc();

console.log(y); // 999 */

/* var x = 100;
var y = 999;

function testFunc() {
  y = 9; // this will re-assign the global
  console.log(y); // 9
}

console.log(x); // 100

testFunc();

console.log(y); // 9 */

/* var x = 100;

console.log(x); // 100

{
  var x = 200;
  console.log(x); // 200
}

console.log(x); // 200 */

/* let x = 100;

console.log(x); // 100

{
  let x = 200; // allows this re-declaration because of the block scope
  console.log(x); // 200
}

console.log(x); // 100 */
