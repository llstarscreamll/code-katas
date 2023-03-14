const reverseOnlyLetters = require("./reverse-only-letters");

describe.each([
  ["ab-cd", "dc-ba"],
  ["aab", "baa"],
  ["aa-b", "ba-a"],
  ["1aA-bc!", "1cb-Aa!"],
])('reverseOnlyLetters("%s")', (input, expected) =>
  test(`returns ${expected}`, () =>
    expect(reverseOnlyLetters(input)).toBe(expected))
);
