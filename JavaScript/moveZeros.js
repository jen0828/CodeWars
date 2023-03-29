// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

//kata(5kyu): Moving Zeros To The End

// My solution:

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  return arr;
}

// Refactor using higher order functions :

function moveZeros(arr) {
  const nonZeros = arr.filter((el) => el !== 0);
  const zeros = arr.filter((el) => el === 0);
  return nonZeros.concat(zeros);
}
