const num = 5;
let start = 1;
for (let i = 0; i < num; i++) {
    let print = '';
    for (let j = 0; j <= i; j++) {
        print += start + ' ';
        start++;
    }
    console.log(print);
}