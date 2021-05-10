///////////  Recursion Coding Exercise 20: nestedEvenSum   ///////////////////

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers
// in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let count = 0;
  for (let key in obj) {
    if (Number.isInteger(obj[key]) && obj[key] % 2 === 0) {
      count += obj[key];
    } else if (obj[key] === Object(obj[key])) {
      count += nestedEvenSum(obj[key]);
    }
  }
  return count;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 2,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 12
