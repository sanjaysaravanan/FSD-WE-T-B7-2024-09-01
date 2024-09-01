// function to find whether a number is isOdd
// should return true if the number Odd else false
function isOdd(num) {
  if (num % 2) {
    return true;
  } else {
    return false;
  }
}

function isOdd(num) {
  return num % 2 === 1;
}

// power of a number
function powerOf(num, power) {
  return num ** power;
}

function powerOf(num, power) {
  let pValue = num;
  for (let i = 1; i < power; i++) {
    pValue = pValue * num;
  }
  return pValue;
}

console.log(powerOf(2, 3));

// factorial 0! - 1
// 1 - 1
// 2 - 2
// 5 -> 1 * 2 * 3 * 4 * 5
// 3 -> 1 * 2 * 3

const factorial = (num) => {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(5));

// 4. Print the first 10 fibonacci number
// 0 1 1 2 3 5 8 13 21 34 55

var n = 10;
// i 0 1 2 ..... 9
let num1 = 0,
  num2 = 1;
console.log(num1);
console.log(num2);

// 2
for (let i = 2; i < n; i++) {
  const newNum = num1 + num2; // 8
  console.log(newNum);
  num1 = num2; // 5
  num2 = newNum; // 8
}

// num1 = 0, num2 = 1
// i = 2; newNum = 1, num1 = 1, num2 = 1

// i = 3; newNum = 2, num1 = 1, num2 = 2

// i = 4; newNum = 3, num1 = 2, num2 = 3

// i = 5; newNum = 5, num1 = 3, num2 = 5

// i = 6; newNum = 8, num1 = 5, num2 = 8
