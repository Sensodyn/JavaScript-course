const object = {
    type: 'car',
    model: 'Subaru',
    year: 2007,
    color: 'white',
    electric: false,
}

function prop(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}

prop(object);