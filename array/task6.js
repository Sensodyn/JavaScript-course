const arr = [4, 13, 7, 20, 99, 65];

// function predicate(item) {
//     return item > 11;
// }

console.log(arr.filter((item) => item > 30));

// function predicate(item, index, array) {
//     return index % 2 === 0;
// }

console.log(arr.filter((item, index) => index % 2 === 0));