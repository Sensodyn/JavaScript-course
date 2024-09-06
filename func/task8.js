// function fib(number) {
//     let a = 0;
//     let b = 1;
//     let next;
//     for (let i = 0; i < number; i++) {
//         next = a + b;
//         a = b;
//         b = next;
//         console.log(a);
//     }
//     return a;
// }
fibo(6);

function fibo(num) {
    console.log(num);
    if (num === 1 || num === 2) return num - 1;
    return fibo(num - 2) + fibo(num - 1);
}