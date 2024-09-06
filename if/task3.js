const math = "60/4";

if (math.includes("+")){
    const array = math.split('+');
    //const num1 = math.split('+')[0];
    //const num2 = math.split('+')[1];
    console.log(Number(array[0]) + Number(array[1]));
    //console.log("Result: " + (Number(num1) + Number(num2)));
}
else if (math.includes("-")){
    const num1 = math.split('-')[0];
    const num2 = math.split('-')[1];

    console.log("Result: " + (Number(num1) - Number(num2)));
}
else if (math.includes("*")){
    const num1 = math.split('*')[0];
    const num2 = math.split('*')[1];

    console.log("Result: " + (Number(num1) * Number(num2)));
}
else if (math.includes("/")){
    const num1 = math.split('/')[0];
    const num2 = math.split('/')[1];

    console.log("Result: " + (Number(num1) / Number(num2)));
}
else {console.log("Unknown operation");}