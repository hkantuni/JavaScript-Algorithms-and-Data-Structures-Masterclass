////////////    Sliding Window Coding Exercise 8: - minSubArrayLen    ////////////////

// Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive
// integer.
// This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal
// to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, num) {
  let minLen = Infinity;
  let sum = 0;
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (sum < num) {
      if (j === arr.length) {
        break;
      }
      sum += arr[j];
      j++;
    } else {
      minLen = Math.min(minLen, j - i);
      sum -= arr[i];
      i++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 3, 5], 5)); //////1
console.log(minSubArrayLen([], 44)); /////////0
