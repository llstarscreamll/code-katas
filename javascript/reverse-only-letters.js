function reverseOnlyLetters(str) {
  let lettersIndexes = [];

  str
    .split("")
    .forEach((v, k) => v.match(/[a-zA-Z]/) && lettersIndexes.push(k));

  let reversedLettersIndexes = [...lettersIndexes].reverse();
  let positionsMap = {};

  lettersIndexes.forEach(
    (v, k) => (positionsMap[v] = reversedLettersIndexes[k])
  );

  return str
    .split("")
    .map((v, k, arr) => (v = arr[positionsMap[k]] || v))
    .join("");
}

module.exports = reverseOnlyLetters;
