const input = 5;
for (let i = 0; i < input; i++) {
    let stroke = "";
    for (let j = 0; j < input; j++) {
        if (j === 0 || j === input - 1 || i === 0 || i === input - 1) {
            stroke += "*";
        } else {
            stroke += "-";
        }
    }
    console.log(stroke);
}