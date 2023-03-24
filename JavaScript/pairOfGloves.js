// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

// kata(6kyu):
// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

// My solution:

function numberOfPairs(gloves) {
  const pairsInColour = {};

  gloves.forEach((colour) => {
    if (pairsInColour[colour]) {
      pairsInColour[colour]++;
    } else {
      pairsInColour[colour] = 1;
    }
  });

  const values = Object.values(pairsInColour)
    .filter((num) => num >= 2)
    .reduce((a, b) => a + Math.floor(b / 2), 0);
    
  return values;
}

// Refactored version:

function numberOfPairs(gloves) {
  const pairsInColour = {};

  gloves.forEach((colour) => {
    pairsInColour[colour] = (pairsInColour[colour] || 0) + 1;
  });

  const values = Object.values(pairsInColour)
    .map((num) => Math.floor(num / 2))
    .reduce((a, b) => a + b, 0);

  return values;
}
