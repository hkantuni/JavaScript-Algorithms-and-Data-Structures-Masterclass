/////// Multiple Pointers Coding Exercise 6: - isSubsequence  //////////

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  let seq = 0;
  while (i < str1.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
      seq++;
    } else if (j === str2.length) {
      i++;
      j = i;
    } else if (str1[i] !== str2[j]) {
      j++;
    }
  }
  if (seq === str1.length) {
    return true;
  }
  return false;
}

console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false

////////////  other Iterative solution //////////////////////////

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
console.log(isSubsequence("abc", "abracadabra")); //true

/////////////Recursive Solution but not O(1) Space ////////////////

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("abc", "abracadabra"));
