/////////// Recursion Coding Exercise 17: someRecursive////////////////////

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, f) {
  if (arr.length === 0) {
    return false;
  }
  if (f(arr[0]) === true) {
    return true;
  }
  return someRecursive(arr.slice(1), f);
}

console.log(someRecursive([4, 6, 8], (val) => val > 10));

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
