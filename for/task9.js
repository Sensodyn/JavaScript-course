const num = 6;
for (let i = num; i < 0; i--) {
    let print = '';
    for (let j = 0; j < i; j++) {
        print += i.toString();
    }
    console.log(print);
}