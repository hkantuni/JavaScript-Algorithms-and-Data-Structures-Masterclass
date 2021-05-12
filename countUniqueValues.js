///////  Multiple Pointers Coding Exercise 2: - countUniqueValues /////////////

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique
// values in the array. There can be negative numbers in the array, but it will always be sorted.

///////////  first solution ////////////

function countUniqueValues(arr) {
  let count = 0;
  if (arr.length < 1) {
    return count;
  }
  for (let i = 0, j = 1; j < arr.length; i++, j++) {
    if (arr[i] !== arr[j]) {
      count++;
    }
  }
  return count + 1;
}

///////////  other one ///////////////

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 2, 2, 5, 7, 7])); // 4
