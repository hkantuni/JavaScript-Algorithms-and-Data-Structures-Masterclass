////////////  Search Coding Exercise 25: Binary Search Exercise ///////////////

// Write a function called binarySearch  which accepts a sorted  array and a value and returns the
// index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here -
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and
// here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = Math.ceil(left + (right - left) / 2);
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] < num) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 4
