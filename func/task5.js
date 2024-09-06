function getRandomNumber(from, to, floatingPoint) {
    if (from > to) {
        let i = to;
        to = from;
        from = i;
        console.log('ти баран, але я пофіксив');
    } else if (from === to) {
        console.log('введи різні числа клоун');
        return;
    }
    const number = Math.random() * (to - from) + from;
    console.log(number.toFixed(floatingPoint));
}

getRandomNumber(5, 15, 6);