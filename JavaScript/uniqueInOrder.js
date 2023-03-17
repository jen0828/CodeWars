// https://www.codewars.com/kata/54e6533c92449cc251001667

// kata(6kyu): Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next to each other
// and preserving the original order of elements.

// My Solution

var uniqueInOrder = function (iterable) {
  const result = [];
  for (const element of iterable) {
    if (result[result.length - 1] !== element) {
      result.push(element);
    }
  }
  return result;
};
