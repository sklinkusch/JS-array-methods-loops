function longestWordWithForLoop(string) {
  const words = string.split(" ");
  let maxLength = 0;
  let longestWord;
  for (let numWords = 0; numWords < words.length; numWords++) {
    if (words[numWords].length > maxLength) {
      maxLength = words[numWords].length;
      longestWord = words[numWords];
    }
  }
  return longestWord;
}
console.log(
  "For loop solution:",
  longestWordWithForLoop("Max has a magic dog.")
);
