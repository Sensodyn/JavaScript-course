const array = ['banana', 'raspberry', 'orange'];
console.log(array);

let removedItem = array.pop();
array.push('apple');
console.log(array, removedItem, 'was deleted');

console.log('По алфавиту:', array.sort());
console.log('Наоборот:', array.reverse());

console.log('Do we have apple?', array.includes('apple'));