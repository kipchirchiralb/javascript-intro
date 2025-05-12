// a loop allows you to repeat a block of code a number of times
// a for loop is a loop that will repeat a block of code a specific number of times

// for (let i = 2; i > 0; i = i + 1) {
//   console.log("Hi " + i);
// }
// infinite/forever loop - a loop that will never end

// we most of the time use loops to execute code for every element in an array or object

// [student, student, student, student, student, student, student, student, student, student]

// sending emails -- 1 function to send email

// TASK 2: write a loop(while loop) that will print prime numbers from 0 to 100 -- understand the code...

// functions --- array methods-- string metods
// objects in js

// for loop, do while loop, while loop, for of loop, for in loop

// for (let k = 0; k <= 10; k++) {
//   console.log(k);
// }

let k = 0;


do {
  console.log(k);
  k++;
} while (k <= 10);

// let k = 0;
while (k <= 10) {
  console.log(k);
  k++;
}

const weatherConditions = {
  temperature: 25,
  humidity: 60,
  windSpeed: 15,
};
// loop through keys in an object
for (key in weatherConditions) {
  console.log(weatherConditions[key]); // values
}
// loop through elements in an array
const students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Alice", age: 21 },
];

for (x of students) {
  console.log(x.name.toUpperCase()); // values
}
