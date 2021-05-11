////////////  Recursion Coding Exercise 23: collectStrings /////////////

/// Write a function called collectStrings  which accepts an object and returns an array of all the values
/// in the object that have a typeof string

function collectStrings(obj) {
  let ans = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      ans.push(obj[key]);
    } else if (obj[key] === Object(obj[key])) {
      ans = ans.concat(collectStrings(obj[key]));
    }
  }
  return ans;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
