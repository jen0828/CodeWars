// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// kata(5kyu):
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2
// , otherwise returns false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My solution:

function scramble(str1, str2) {
  const freq = new Map();

  for (let char of str1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!freq.has(char) || freq.get(char) === 0) {
      return false;
    }
    freq.set(char, freq.get(char) - 1);
    //This "removes" each character in str2 from str1 by decrementing its frequency count in the freq map.
    //This way, the function can check if all the characters in str2 can be "created" from the characters in str1.
  }
  return true;
}
