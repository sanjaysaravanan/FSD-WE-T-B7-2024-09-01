// Primitive Types
let x = 100; // number max range 2^53 - 1, beyond this will be a bigint
let name = "Sanjay"; // string
let isIndian = true; // boolean
let z; // undefined
let bio = null; // null
let bigNum = 9999999999999999n; // bigInt

typeof x; // 'number'
typeof name; // 'string'
typeof isIndian; // 'boolean'
typeof z; // 'undefined'
typeof bio; // 'object'
typeof bigNum; // 'bigInt'
typeof typeof bigNum; // 'string'

// Composite Types
// combination single/multiple types

// Array - using index( 0 based index ) for accessing the values
//          0  1  2  3  4
let arr0 = [1, 2, 3, 4, 5]; // valid
//         0  1         2     3     4
let arr = [1, "sanjay", true, null, undefined]; // valid
let arr2 = [
  [1, 2, 3],
  [3, 4, 5],
  ["sam", "sanjay"],
  { name: "Sanjay", role: "mentor" },
]; // array of array

// accessing values of array
console.log(arr[1]); // 'sanjay

// access the array of string from arr2
console.log(arr2[2]); // [ 'sam', 'sanjay']

// access Obj
console.log(arr2[3]);
console.log(arr2[3].name); // print name in object

// Object - key <-> values pairs
let obj = {
  //key   value
  name: "Sanjay",
  batch: "FSD-WE-T-B7",
  course: "Full-Stack",
  yoe: 6,
  isExternal: true,
  bio: {
    height: 160,
    weight: 70,
  },
  skills: ["python", "js", "java"],
};

// accessing of the values using key
console.log(obj["name"]);
console.log(obj.name); // best

// batch value
console.log(obj.batch);
console.log(obj["batch"]);

// arr, obj
console.log(typeof arr);
console.log(typeof obj);

// access skills & print the 2nd skill
console.log(obj.skills);
