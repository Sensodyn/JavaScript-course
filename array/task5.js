const array1 = ['bob', 'cat', 'jam', 'fire',];
const array2 = ['ice', 'jam', 'cock', 'bob',];

function merge(arr1, arr2) {
    const mergearr = [...arr1, ...arr2];
    const unique = new Set(mergearr);
    return unique;
}

console.log(merge(array1, array2));