/////// Frequency Counter / Multiple Pointers Coding Exercise 4: - areThereDuplicates  /////////////

// Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in.  You can solve this using the
// frequency counter pattern OR the multiple pointers pattern.

////////   Frequency Counter solution //////////

function areThereDuplicates(...arg) {
  arg.sort((a, b) => a > b);

  let i = 0;
  let j = 1;
  while (j < arg.length) {
    if (arg[i] === arg[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

console.log(areThereDuplicates("a", "2", "3", "1", "2"));

////// other Frequency Counter solution //////////

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "2", "3", "1"));

////  Multiple Pointers solution  ///////

function areThereDuplicates(...arg) {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates("a", "b", "c", "a")); // true;
console.log(areThereDuplicates("a", "b", "c", "d")); // false
