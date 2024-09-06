const price = [29.99, 14.14, 88, 7];
//console.log(price.reduce((acc, next) => acc + next, 0));
console.log(price.reduce(total, 0));
function total(acc, next) {
    acc += next;
    return acc;
}




const arr = [[1, 2], [3, 4, 5], [6, 7]];
const newArr = arr.reduce(arrSum, []);
console.log(newArr);

function arrSum(acc, next) {
    let sum = 0;
    sum += next.reduce((acc2,next2) => acc2 + next2, []);
    acc.push(sum);
    return acc;
}