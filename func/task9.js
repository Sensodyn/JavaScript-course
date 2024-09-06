function fuck(num) {
    if (num === 1 || num === 2) {
        return num;
    }

    return fuck(num - 1) * num;
}
console.log(fuck(7));