// Control flow statements in JavaScript
// Control flow statements are used to determine the order in which statements({block of code}) are executed in a program. They allow you to control the flow of execution based on certain conditions or loops. The main types of control flow statements in JavaScript include:

// 1. Conditional Statements - used to perform different actions based on different conditions. The most common conditional statements are `if`, `else if`, and `else`.

let user = {
  name: "Albert",
  role: "admin",
};

// Example - a system authorization logic based on user role
if (user.role === "admin") {
  console.log("Welcome to Admin Dashboard");
  console.log("Add new driver");
} else if (user.role === "driver") {
  console.log("Welcome to Driver Dashboard");
  console.log("View your trips");
  console.log("Update your profile");
  console.log("View your earnings");
} else {
  console.log("Welcome to Client Dashboard");
  console.log("View your booking ");
  console.log("Send a parcel");
}
// TASK:- rewrite this code using a switch statement

// 2. Loop Statements - used to execute a block of code repeatedly until a specified condition is met. The most common loop statements are `for`, `while`, and `do...while`.

let year = 1990;

while (year <= 2025) {
  if (year % 4 == 0) {
    console.log("Year " + year + " is a leap year");
  } else if (year % 4 != 0) {
    console.log("Not a leap year " + year);
  } else if (year === 2017) {
    console.log("This is a special year!!!");
  }

  year++;
}

// TASK:- rewrite the above code using a for loop
