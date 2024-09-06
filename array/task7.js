const arr = ['bob', 'mary', 'john', 'lela', 'clown'];

function upper(item) {
    const spl = item.split('');
    spl[0] = spl[0].toUpperCase();
    // const rest = spl.slice(1);
    // const result = [letter, ...rest].join('');
    return spl.join('');
}
console.log(arr.map(upper));