function currentDate() {
    const date = new Date();
    const fullDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    console.log(fullDate);
}
currentDate();