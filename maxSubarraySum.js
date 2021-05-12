///////// Sliding Window Coding Exercise 7: - maxSubarraySum  ///////////

// Given an array of integers and a number, write a function called maxSubarraySum , which finds the maximum
// sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive  elements from the original array. In the first example
// below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

////////   first solution  //////////////

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

//////// other solution ///////////

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([2, -3], 2)); // -1
console.log(maxSubarraySum([2, 3], 3)); // null
