//Create a new array by transforming each element in an existing array using the `map()` method.
let arr = [10, 20, 30, 40, 50];
function createNewArrByMap() {
  let newArr = arr.map(Math.sqrt);
  console.log(newArr);
}
createNewArrByMap();
