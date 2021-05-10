/////////// Recursion Coding Exercise 11: factorial //////

// Write a function factorial  which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g., factorial four (4! )
// is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(7)); //5040

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
