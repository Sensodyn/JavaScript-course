/*const arr = [3, 5, 4, 7, 10, 1];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
        max = arr[i + 1];
    }
}
console.log(max);*/

/*const arr = "I cant run".split(' ');
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
        max = arr[i].length;
    }
}
console.log(max);*/

const arr = "I dont want to set the world on fire".split(' ');
let maxCount = 0;
let maxWord;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxCount) {
        maxCount = arr[i].length;
        maxWord = arr[i];
    }

} console.log(maxWord);