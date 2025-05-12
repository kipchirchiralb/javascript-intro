//    Write a function that takes an array and a value, and returns how many times that value appears in the array.

const colors = [
  "red",
  "blue",
  "green",
  "red",
  "blue",
  "yellow",
  "blue",
  "red",
  "green",
  "red",
  "blue",
  "yellow",
  "blue",
  "red",
  "green",
  "red",
  "blue",
  "yellow",
  "blue",
  "red",
  "green",
  "red",
  "blue",
  "yellow",
  "blue",
  "red",
];

function countOccurrence(array, value) {
  let count = 0;
  // Loop through the array and count the occurrences of the value
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrence(colors, "yellow")); // Output:

console.log(colors.filter((color) => color === "red").length); // Output: 3

// DSA - tasks - hackerank, codility, leetcode - time and space complexity