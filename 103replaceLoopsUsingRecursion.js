//* Replace Loops using Recursion

//? Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

//find the product of n natural number
/*
let multiply = (arr, n) => {
  let product = 1;

  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
};
console.log(multiply([1, 2, 3, 4, 5], 4));
*/

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
console.log(sum([1], 0));
