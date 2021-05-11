//////// Frequency Counter Coding Exercise 3: - sameFrequency //////////////////////

// Write a function called sameFrequency. Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  for (let val of num1) {
    count1[val] = (count1[val] || 0) + 1;
  }
  for (let val of num2) {
    count2[val] = (count2[val] || 0) + 1;
  }
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(22, 222)); // false
