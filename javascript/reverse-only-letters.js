function reverseOnlyLetters(str) {
  let result = "";
  let lettersIndexes = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/)) {
      lettersIndexes.push(i);
    }
  }

  let reversedLettersIndexes = [...lettersIndexes].reverse();
  let positionsMap = {};

  for (let i = 0; i < lettersIndexes.length; i++) {
    positionsMap[lettersIndexes[i]] = reversedLettersIndexes[i];
  }

  for (let i = 0; i < str.length; i++) {
    if (positionsMap[i] !== undefined) {
      result += str[positionsMap[i]];
      continue;
    }

    result += str[i];
  }

  return result;
}

module.exports = reverseOnlyLetters;
