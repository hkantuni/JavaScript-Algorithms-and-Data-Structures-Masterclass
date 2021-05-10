///////////  Recursion Coding Exercise 22: stringifyNumbers   ///////////////////

// Write a function called stringifyNumbers  which takes in an object and finds all of the values which
// are numbers and converts them to strings. Recursion would be a great way to solve this! Do not change original obj.

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Number.isInteger(obj[key])) {
      newObj[key] = obj[key].toString();
    } else if (obj[key] === Object(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
