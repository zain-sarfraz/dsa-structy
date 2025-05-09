const longestWord = sentence => {
  let longest = "";
  const words = sentence.split(" ");

  for (let word of words) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }
  return longest;
};

module.exports = {
  longestWord,
};
