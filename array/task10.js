const arr = [[1, 2], [3, 4, 5], [6, 7]];
console.log(arr.flat());

let arr2 = [[1, 2], [3, 4, 5], [6, 7]];
let arr1d = [].concat(...arr2);
console.log(arr1d);