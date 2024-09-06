function greatest() {
    let biggest = arguments[0];
    //let biggest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) {
        if (biggest < arguments[i]) {
            biggest = arguments[i];
        }
    }
    console.log(biggest);
}

greatest(-10, 5, 3);