// conditional statements -  if, else if, else -- allows us to execute code based on certain conditions

if (50 > 80) {
  // condition is true, execute the code block inside the if statement
  console.log("50 is greater than 30");
} else {
  // condition is false, execute the code block inside the else statement
  console.log("50 is not greater than 30");
}

// build a grading system using if, else if, else statements
let score = 125; // db data

if (score > 100 || score < 0) {
  // check if score is greater than 100 or less than 0 -- erro checking condition
  console.log("Invalid score");
} else if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  // 80 - 89
  console.log("Grade B");
} else if (score >= 70) {
  // 70 - 79
  console.log("Grade C");
} else if (score >= 60) {
  // 60 - 69
  console.log("Grade D");
} else if (score >= 50) {
  // 50 - 59
  console.log("Grade E");
} else {
  // 0 - 49
  console.log("Grade F");
}

// TASK 1: REBUILD THE GRADING SYSTEM USING SWITCH STATEMENT in js