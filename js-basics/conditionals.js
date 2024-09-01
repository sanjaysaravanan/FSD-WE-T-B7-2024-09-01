var a = 99;

// if else
// check whether the above number is odd
// if odd print odd else print event
if (a % 2 === 1) {
  console.log("Odd");
} else {
  console.log("Even");
}

// a % 2 ---> 1 or 0
if (a % 2) {
  console.log("Odd");
} else {
  console.log("Even");
}

// write a func to find the largest of given 3 numbers

let a = 99,
  b = 98,
  c = 100;

function largestOfNums(a, b, c) {
  if (a >= b && a >= c) {
    // a greater than or equal to b, c
    return a;
  } else if (b >= c) {
    // b greater than or equal a, c
    return b;
  } else {
    return c;
  }
}

console.log(largestOfNums(100, 99, 98)); // 100
console.log(largestOfNums(99, 100, 98)); // 100
console.log(largestOfNums(98, 99, 100)); // 100

function isEven(num) {
  if (num % 4 === 0 || num % 2 === 0) {
    return true;
  }
  return false;
}

// switch case
// write a function which will return the prices of fruit like below,
// orange: 50, apple: 70, lemon: 5, papaya: 20
function fruitsPrice(fruit) {
  switch (fruit) {
    case "papaya":
      return "Papaya is INR: 20";
    case "orange":
      return "Orange is INR: 50";
    case "lemon":
      return "Lemon is INR: 5";
    case "apple":
      return "Apple is INR: 70";
    default:
      return fruit + " is not available";
  }
}

console.log(fruitsPrice("apple"));
