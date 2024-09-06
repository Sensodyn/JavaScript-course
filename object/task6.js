const object = {
    type: 'car',
    model: 'Subaru',
}

// function copyObj(obj) {
//     const newObject = Object.assign({}, obj);
//     return newObject;
// }

function copyObj(obj) {
    const newObject = {...obj};
    return newObject;
}


const newObj = copyObj(object);
newObj.type = 'plane';

console.log(object);
console.log(newObj);