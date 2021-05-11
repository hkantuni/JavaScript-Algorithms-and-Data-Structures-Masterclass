/////////////// Frequency Counter Coding Exercise 1: - validAnagram //////////////////////////////

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
// formed from iceman.

function validAnagram(str1, str2) {
  if (str1.lenght !== str2.lenght) {
    return false;
  }
  let count1 = {};
  let count2 = {};

  for (let val of str1) {
    count1[val] = (count1[val] || 0) + 1;
  }
  for (let val of str2) {
    count2[val] = (count2[val] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("aaz", "zza")); // false
