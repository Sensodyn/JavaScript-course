const arr = ['bisty', 'elemy', 'nagi'];
// function newArr(item) {
//     if (item.includes('i')) {
//         return item;
//     }
// }
// console.log(arr.filter(newArr));

console.log(arr.filter((item) => item.includes('i')));

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('i')) {
//         console.log(arr[i]);
//     }
// }