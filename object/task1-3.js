function CarInfo(model, year, distance, owner, electric) {
    this.model = model;
    this.year = year;
    this.distance = distance;
    this.owner = owner;
    this.electric = electric;
}

const car1 = new CarInfo('Opel', 2010, 69000, 'Sanchous', false);
const car2 = new CarInfo('Lanos', 2006, 122000, 'Bodya', true);
const car3 = new CarInfo('BMW', 2019, 33000, 'Clown', false);
const car4 = new CarInfo('Porshe', 2022, 8000, 'Ruslan', false);

function carAge(car) {
    return 'Car age: ' + (2024 - car.year);
}

console.log(carAge(car2));
console.log(nextService(car2));

function nextService(car) {
    if (car.distance < 10000) {
        return 'Next service after ' + (10000 - car.distance);
    } else if (car.distance < 25000) {
        return 'Next service after ' + (25000 - car.distance);
    } else if (car.distance < 50000) {
        return 'Next service after ' + (50000 - car.distance);
    } else {
        //let next = 50000 - (car.distance % 50000);
        let next = 50000 * Math.ceil(car.distance / 50000);
        return 'Next service after ' + (next - car.distance);
    }
}