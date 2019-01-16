function longestWordWithForLoop(string) {
  const words = string.split(" ");
  let longestWord = "";
  for (let numWords = 0; numWords < words.length; numWords++) {
    longestWord =
      longestWord.length >= words[numWords].length
        ? longestWord
        : words[numWords];
  }
  return longestWord;
}
console.log(
  "For loop solution:",
  longestWordWithForLoop("Max has a magic dog.")
);
