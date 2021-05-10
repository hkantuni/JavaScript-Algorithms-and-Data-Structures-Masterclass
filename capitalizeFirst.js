/////////////Recursion Coding Exercise 19: capitalizeFirst /////////////////

function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return arr;
  }
  if (arr[0][0] !== arr[0][0].toUpperCase()) {
    arr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    arr.shift();
    capitalizeFirst(arr);
  }

  return arr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
