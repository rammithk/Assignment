//Modify an array by removing and/or adding elements using the `splice()` method

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
function addBySplice() {
  arr.splice(2, 2, "Dikshit", "Darji");
  console.log(arr);
}
addBySplice();

function removeBySplice() {
  arr.splice(2, 2);
  console.log(arr);
}
removeBySplice();
