// a funtion is a block of code that can be called and executed when needed(reusable code)

function sendEmail(email) {
  console.log("Sending email to " + email); // send email to the user --  using a plus in a string is called string concatenation - mergring two strings together
}

// sending OTP to a user
// booking - nofication
// marketing
//

sendEmail("alber@gmail.com");
sendEmail("lydia@gmail.com");
sendEmail("al");

// arrow function - a shorter way to write a function in js
const systemEmail = (email) => {
  console.log("Sending email to " + email); // send email to the user
};

// return keyword - used to make a fuction call hold a value and return it to the caller of the function

const add = (a, b) => {
  return a + b; // return the sum of a and b
};

let final = add(2, 3); // 5
console.log(final);

// the return value terminates a fuction

// REASEARCG MORE ON JS FUNCTIONS

// JAVASCRIPT UNDER THE HOOD ---- BLOG

// STRING AND ARRAY METHODS
