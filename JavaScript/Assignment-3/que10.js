//Write a program that calculates a single value from an array using the `reduce()` method.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arrSumByReduce() {
  let sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(sum);
}
arrSumByReduce();
