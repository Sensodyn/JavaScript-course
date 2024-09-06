const day = 99;

if (day > 0 && day < 32){
    console.log("January");
}
else if (day > 31 && day < 59){
    console.log("February");
}
else if (day > 58 && day < 90){
    console.log("March");
}
else if (day > 89 && day < 366){
    console.log("Ya zaebalsya");
}
else {console.log("Incorrect day");}