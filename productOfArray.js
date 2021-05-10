///////// Recursion Coding Exercise 12: productOfArray //////////////////

// Write a function called productOfArray  which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  let result = 1;
  function helper(helperArr) {
    if (helperArr.length === 0) {
      return;
    } else {
      result = helperArr[0] * result;
    }
    helper(helperArr.slice(1));
  }
  helper(arr);
  return result;
}

console.log(productOfArray([1, 2, 3, 10])); //60
// productOfArray([1,2,3]) // 6
