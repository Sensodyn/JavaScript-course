const input = 10;
for (let i = 1; i <= input; i++) {
    let print = "";
    for (let j = 0; j < i; j++) {
        print += "*";
    }
    console.log(print);
}