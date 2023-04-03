// https://www.codewars.com/kata/56001790ac99763af400008c/train/javascript

// kata(5kyu):
// Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array.
// The numbers will be a mix of positive and negative values.
// If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array.
// If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.

// My solution:

function largestSum(arr) {
  const isBelowZero = (num) => num < 0;
  const isAboveZero = (num) => num > 0;

  if (arr.length === 0 || arr.every(isBelowZero)) {
    return 0;
  } else if (arr.every(isAboveZero)) {
    return arr.reduce((a, b) => a + b, 0);
  } else {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      currentSum = Math.max(0, currentSum + arr[i]); // If currentSum is less than 0, it resets to 0.
      //console.log(currentSum)
      maxSum = Math.max(maxSum, currentSum);
      //console.log(maxSum)
    }
    return maxSum;
  }
}

//console.log(largestSum([31,-41,59,26,-53,58,97,-93,-23,84]))
//187
