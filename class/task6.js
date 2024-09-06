class Book {
    static exchange = 40;

    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    howOld() {
        return this.year;
    }

    getPriceInUSD() {
        return this.price / Book.exchange;
    }
}

const book1 = new Book('The Last Wish', 'Andrzej Sapkowski', 2007, 160);
const book2 = new Book('Sword Of Destiny', 'Andrzej Sapkowski', 2015, 220);
const book3 = new Book('Season Of Storms', 'Andrzej Sapkowski', 2018, 320);
//+
const book4 = new Book('Baptism Of Fire', 'Andrzej Sapkowski', 2014, 240);
const book5 = new Book('Tower Of The Swallow', 'Andrzej Sapkowski', 2016, 260);
//-
const book6 = new Book('Casino Royale', 'Ian Fleming', 1953, 800);
const book7 = new Book('Moonraker', 'Ian Fleming', 1955, 740);
//---------------------------------------------------
const book10 = new Book('Game Of Thrones', 'George Martin', 1996, 180);
const book11 = new Book('Clash Of Kings', 'George Martin', 1998, 280);
//-
const book12 = new Book('Study in Scarlet', 'Arthur Conan Doyle', 1887, 10000);

class Library {
    constructor(books, libName) {
        this.books = books;
        this.libName = libName;
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    addBooks(newBooks) {
        this.books.push(...newBooks);
    }

    removeBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (bookName === this.books[i].title) {
                this.books.splice(i, 1);
            }
        }
    }

    removeBooks(bookNames) {
        for (let i = 0; i < bookNames.length; i++) {
            this.removeBook(bookNames[i]);
        }
    }

    getMostExpensive() {
        let mostExpensiveValue = 0;
        let mostExpensiveName = '';
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].price > mostExpensiveValue) {
                mostExpensiveValue = this.books[i].price;
                mostExpensiveName = this.books[i].title;
            }
        }
        return 'The most expensive book is ' + mostExpensiveName + ' it cost ' + mostExpensiveValue + ' UAH';
    }

    getTheOldest() {
        let oldest = Number.MAX_VALUE;
        let oldestname = '';
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].year < oldest) {
                oldest = this.books[i].year;
                oldestname = this.books[i].title;
            }
        }
        return 'The oldest book is ' + oldestname + ' it is already ' + (2024 - oldest) + ' years old';
    }

    getAveragePrice() {
        let sum = 0;
        for (let i = 0; i < this.books.length; i++) {
            sum += this.books[i].getPriceInUSD();
        }
        return (sum / this.books.length).toFixed(2);
    }

    sellProperty() {
        let sum = 0;
        for (let i = 0; i < this.books.length; i++) {
            sum += this.books[i].getPriceInUSD();
        }
        this.books.splice(0, this.books.length);
        console.log('All this library cost ' + sum.toFixed(2) + ' USD');
    }
}

const LargeLib = new Library([book1, book2, book3, book6, book7], 'Large Lib');
const SmallLib = new Library([book10, book11, book12], 'Small Lib');

SmallLib.addBook(new Book('Feast For Crows', 'George Martin', 2005, 300));

LargeLib.addBooks([book4, book5]);
LargeLib.removeBooks(['Casino Royale', book7.title]);
//console.log(LargeLib);

SmallLib.removeBook('Study in Scarlet');
//console.log(SmallLib);



console.log(LargeLib.getMostExpensive());
console.log(LargeLib.getTheOldest());
console.log(SmallLib.getAveragePrice());

LargeLib.sellProperty();
LargeLib.sellProperty();

SmallLib.sellProperty();