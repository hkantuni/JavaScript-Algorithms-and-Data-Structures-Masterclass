/////// Frequency Counter / Multiple Pointers Coding Exercise 4: - areThereDuplicates  /////////////

// Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in.  You can solve this using the
// frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...arg) {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates("a", "b", "c", "a")); // true;
console.log(areThereDuplicates("a", "b", "c", "d")); // false
