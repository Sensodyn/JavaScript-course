// const arr = ['ccc', 'a', 'dada', 'bb', 'opopopopopop', 'qwqwqwq'];

//console.log(arr.sort((a, b) => a.length - b.length));

// function compare(a, b) {
//         if (a.length > b.length) return 1;
//         if (a.length === b.length) return 0;
//         if (a.length < b.length) return -1;
//     return a.length - b.length;
// }

// console.log(arr.sort(compare));

const arr = ["cat", "karas", 'buble', 'bobby', 'sabaka', 'leroy aaaaaaaa'];
function findA(item) {
    let value = 0;
    const letters = item.split('');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'a') {
            value++
        }
    }
    return value;
}

// function compareA(a, b) {
//     return findA(b) - findA(a);
// }

console.log(arr.sort((a, b) => findA(b) - findA(a)));