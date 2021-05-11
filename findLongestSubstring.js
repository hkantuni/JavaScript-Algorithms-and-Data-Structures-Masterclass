///////////////// Sliding Window Coding Exercise 9: findLongestSubstring ///////////

// Write a function called findLongestSubstring, which accepts a string and returns the length
// of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  let maxLen = 0;
  let currentLen = 0;
  let i = 0;
  let j = 0;
  let count = {};

  while (j < str.length) {
    if (count[str[j]] === undefined) {
      count[str[j]] = j;
      j++;
      currentLen = j - i;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      for (let k = i; k < count[str[j]]; k++) {
        count[str[k]] = undefined;
      }
      i = count[str[j]] + 1;
      count[str[j]] = j;
      j++;
    }
  }
  return maxLen;
}

console.log(findLongestSubstring("rithmschool")); // 7

///////    other solution ///////

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("bbb")); // 1
