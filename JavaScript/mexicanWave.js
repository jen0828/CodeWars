//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// kata(6kyu):
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]



// My solution:

function wave(str) {
  const wave_arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      wave_arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }

  return wave_arr;
}

// Refactor - using higher order functions instead of for loop

function wave(str) {
  return str
    .split('')
    .map((char, i) => {
      if (char === ' ') return char;
      return str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
    })
    .filter((waveStr) => waveStr !== ' ');
}
