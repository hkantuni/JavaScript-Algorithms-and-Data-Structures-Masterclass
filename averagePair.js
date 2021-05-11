///////    Multiple Pointers Coding Exercise 5:  - averagePair    //////////

// Write a function called averagePair  Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

function averagePair(arr, n) {
  if (arr.length < 2) {
    return false;
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if ((arr[i] + arr[j]) / 2 === n) {
      return true;
    } else if ((arr[i] + arr[j]) / 2 > n) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
