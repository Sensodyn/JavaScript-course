const max = 20;
for (let i = 1; i <= max; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    console.log('For number', i, 'its', count, 'divisors');
}