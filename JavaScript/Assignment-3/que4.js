// Write a program that adds an element to the beginning of an array using the `unshift()` method.
let arr = [];
function addFromFirst(n) {
  arr.unshift(n);
  console.log(arr);
}
addFromFirst(10);
addFromFirst(20);
addFromFirst(30);
