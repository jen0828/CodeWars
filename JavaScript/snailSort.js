// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// kata(4kyu):

// My solution:

snail = function (array) {
  if (array.length === 0 || array[0].length === 0) {
    return [];
  }

  const result = [];
  let topRow = 0,
    bottomRow = array.length - 1;
  let leftCol = 0,
    rightCol = array.length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse the top row from left to right
    for (let col = leftCol; col <= rightCol; col++) {
      result.push(array[topRow][col]);
    }
    topRow++;

    // Traverse the right column from top to bottom
    for (let row = topRow; row <= bottomRow; row++) {
      result.push(array[row][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
      // Traverse the bottom row from right to left
      for (let col = rightCol; col >= leftCol; col--) {
        result.push(array[bottomRow][col]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
      // Traverse the left column from bottom to top
      for (let row = bottomRow; row >= topRow; row--) {
        result.push(array[row][leftCol]);
      }
      leftCol++;
    }
  }

  return result;
};
