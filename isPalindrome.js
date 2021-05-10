///////Recursion Coding Exercise 16: isPalindrome//////////////////////

////with helper function //////////////////

// function isPalindrome1(str) {
//   function helper(input) {
//     if (input.length === 0) {
//       return "";
//     }
//     return helper(input.slice(1)) + input[0];
//   }
//   return helper(str) === str;
// }

/////pure recursive////////////////////

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

console.log(isPalindrome("tacocat"));

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
