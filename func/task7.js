function fucktorial(num) {
    let sum = 1;
    for (let i = 1; i < num + 1; i++) {
        sum *= i;
    }
    console.log('Факториал', num + '!', '=', sum);
}

fucktorial(5);