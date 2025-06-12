// Javascript just like Python, Java, C++, etc. provide built in functions/methods to manipulate data types. These methods are used to perform operations on strings, arrays, objects, and other data types. Here are some common methods for each data type:

//
// String methods e.g. charAt(), split(), toUpperCase(), toLowerCase(), indexOf(), replace(), trim(), etc.

const username = "Albert";

console.log(username.charAt(0));
console.log(username.split(""));
console.log(username.replace("A", "8"));

// Array methods e.g. push(), pop(), shift(), unshift(), slice(), splice(), indexOf(), join(), etc.
const fruits = ["apple", "banana", "cherry"];

fruits.unshift("orange"); // adds "orange" to the end of the array

console.log(fruits);

// example using slice() to get a subarray
const subArray = fruits.slice(1, 3); // gets elements from index 1 to 2
console.log(subArray);

// Tasks - no higher order functions to be used

// 1. Create an array of numbers and use the `push` method to add a new number to the end of the array.

// 2. Create an array of strings and use the `pop` method to remove the last string from the array.
// 3. Create an array of objects and use the `shift` method to remove the first object from the array.
// 4. Create an array of numbers and use the `unshift` method to add a new number to the beginning of the array.
// 5. Create an array of strings and use the `indexOf` method to find the index of a specific string in the array.
// 6. Create an array of numbers and use the `join` method to convert the array into a string with a specific separator (e.g., comma).
// 7. Create an array of objects and use the `splice` method to remove a specific number of elements from a specific index in the array.

// Tasks - string methods
// 1. Create a string and use the `toUpperCase` method to convert it to uppercase.
// 2. Create a string and use the `toLowerCase` method to convert it to lowercase.
// 3. Create a string and use the `indexOf` method to find the position of a specific character in the string.
// 4. Create a string and use the `replace` method to replace a specific character with another character.
// 5. Create a string and use the `trim` method to remove any leading or trailing whitespace.
