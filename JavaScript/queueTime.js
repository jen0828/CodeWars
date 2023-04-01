// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

// kata(6kyu) :
// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for all the customers to check out!
// input -  customers: an array of positive integers representing the queue. Each integer represents a customer
// , and its value is the amount of time they require to check out. n: a positive integer, the number of checkout tills.
// output - The function should return an integer, the total time required.


// My solution:


function queueTime(customers, n) {
  const new_array = Array(n <= 0 ? 1 : n).fill(0);
  
  customers.forEach((customer) => {
    const fastest = new_array.indexOf(Math.min(...new_array));
    new_array[fastest] += customer;
  });

  return Math.max(...new_array);
}

//console.log(queueTime([2,3,10], 2))

//Refactored version:

function queueTime(customers, n) {
  const cashiers = new Array(Math.max(n, 1)).fill(0);

  for (const customer of customers) {
    const shortestQueueIndex = cashiers.indexOf(Math.min(...cashiers));
    cashiers[shortestQueueIndex] += customer;
  }

  return Math.max(...cashiers);
}
