// Functions in js -  function is a block {} of code designed to perform a particular task.

// Functions are reusable pieces of code that can be called with different arguments to perform operations. They help in organizing code, making it more readable and maintainable. In JavaScript, functions can be defined using the `function` keyword or as arrow functions.

// Function to covert currency - ksh to usd

function convertKshToUsd(ksh) {
  const exchangeRate = 0.076; // Example exchange rate
  return ksh * exchangeRate;
}

// arrow function to covert currency - ksh to usd
const convertKshToUsdArrow = (ksh) => {
  const exchangeRate = 0.076; // Example exchange rate
  return ksh * exchangeRate;
};

// convert usd to ksh
function convertUsdToKsh(usd) {
  const exchangeRate = 0.076; // Inverse of the exchange rate
  return usd / exchangeRate;
}

// to use the function, you can call/invoke it with a specific amount in Ksh:
const res = convertKshToUsd(1000);
const res1 = convertKshToUsd(10);
const res2 = convertKshToUsdArrow(1010000);
console.log(res);
console.log(res1);
console.log(res2);

// the return value of the function can be stored in a variable or used directly in an expression, it represents the output of the function based on the input provided. In this case, it converts 1000 Ksh to USD using the specified exchange rate.

// Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In JavaScript, functions are first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables.


// Tasks 
// 1. Create a function that takes a number as an argument and returns its square.
// 2. Create a function that takes an array of numbers and returns the sum of all the numbers in the array.
// 3. Create a function that takes a string and returns the string reversed.