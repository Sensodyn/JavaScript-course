// const input = 9;
// const mid = Math.floor(input / 2);
// for (let i = 0; i < input; i++) {
//     let stroke = "";
//     const k = mid - Math.abs(mid - i);
//     for (let j = 0; j < input; j++) {
//         if (j >= mid - k && j <= mid + k) {
//             stroke += "*";
//         } else {
//             stroke += " ";
//         }
//     }
//     console.log(stroke);
// }

const input = 9;
const mid = Math.floor(input / 2);
for (let i = 0; i < input; i++) {
    let stroke = "";
    const k = Math.abs(mid - i);
    for (let j = 0; j < input; j++) {
        if (j >= mid - k && j <= mid + k) {
            stroke += "*";
        } else {
            stroke += " ";
        }
    }
    console.log(stroke);
}