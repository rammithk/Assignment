// Filter elements from an array that meet a certain condition using the `filter()` method.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterArr() {
  arr.filter(value => {
    if (value % 2 == 0) {
      console.log(value);
    }
  });
}
filterArr();
