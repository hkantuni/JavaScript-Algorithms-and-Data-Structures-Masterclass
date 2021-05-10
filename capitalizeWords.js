////////Coding Exercise 21: capitalizeWords//////////////////////

function capitalizeWords(words) {
  if (words[0] === words[0].toUpperCase()) {
    return words;
  } else {
    words.push(words[0].toUpperCase());
    words.shift();
    capitalizeWords(words);
  }
  return words;
}

let words = ["i", "am", "learning", "recursion"];

console.log(capitalizeWords(words));

// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
