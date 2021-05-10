/////////Recursion Coding Exercise 18: flatten//////////////////////////

function flatten(array) {
  let flat = [];

  function helper(input) {
    if (input.length === 0) {
      return flat;
    }
    if (Array.isArray(input[0]) === false) {
      flat.push(input[0]);
    } else {
      helper(input[0]);
    }
    return helper(input.slice(1));
  }
  helper(array);
  return flat;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
