class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static compare(age1, age2) {
        if (age1 > age2) console.log(age1);
        else console.log(age2);
    }

    greeting() {
        console.log('Greeting', this.name);
    }
}

class Student extends Person {
    constructor(name, age, grades) {
        super(name, age);
        this.grades = grades;
    }

    addGrade(newGrade) {
        this.grades.push(newGrade);
    }

    greeting() {
        console.log('Greeting student', this.name);
    }

    calcAverage() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }
}

const human = new Student('Alex', 20, [10, 36]);
console.log(human);
human.greeting();
human.addGrade(100);
console.log(human);
console.log(human.calcAverage());
Person.compare(22, 24);