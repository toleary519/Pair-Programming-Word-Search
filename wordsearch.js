const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let verticalJoin = [];
  let verticalWord = [];

  if (letters[0] !== undefined) {
    for (let i = 0; i < letters[0].length; i++) {
      for (let j = 0; j < letters.length; j++) {
        verticalWord.push(letters[j][i]);
      }
      verticalJoin[i] = verticalWord.join("");
      verticalWord = [];
    }

    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }

    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  }
  if (letters.length === 0) {
    return false;
  }

  return false;
};

module.exports = wordSearch;