class MyBook {
    static exchange: number = 40;

    title: string;
    author: string;
    year: number;
    price: number;

    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    howOld(): number {
        return this.year;
    }

    getPriceInUSD(): number {
        return this.price / MyBook.exchange;
    }
}

const b1: MyBook = new MyBook('The Last Wish', 'Andrzej Sapkowski', 2007, 160);
const b2: MyBook = new MyBook('Sword Of Destiny', 'Andrzej Sapkowski', 2015, 220);
const b3: MyBook = new MyBook('Season Of Storms', 'Andrzej Sapkowski', 2018, 320);
//+
const b4: MyBook = new MyBook('Baptism Of Fire', 'Andrzej Sapkowski', 2014, 240);
const b5: MyBook = new MyBook('Tower Of The Swallow', 'Andrzej Sapkowski', 2016, 260);
//-
const b6: MyBook = new MyBook('Casino Royale', 'Ian Fleming', 1953, 800);
const b7: MyBook = new MyBook('Moonraker', 'Ian Fleming', 1955, 740);
//---------------------------------------------------
const b10: MyBook = new MyBook('Game Of Thrones', 'George Martin', 1996, 180);
const b11: MyBook = new MyBook('Clash Of Kings', 'George Martin', 1998, 280);
//-
const b12: MyBook = new MyBook('Study in Scarlet', 'Arthur Conan Doyle', 1887, 10000);

class MyLibrary {

    books: MyBook[];
    libName: string;

    constructor(books, libName) {
        this.books = books;
        this.libName = libName;
    }

    addBook(newBook: MyBook) {
        this.books.push(newBook);
    }

    addBooks(newBooks: MyBook[]) {
        this.books.push(...newBooks);
    }

    removeBook(bookName: string) {
        for (let i = 0; i < this.books.length; i++) {
            if (bookName === this.books[i].title) {
                this.books.splice(i, 1);
            }
        }
    }

    removeBooks(bookNames: string[]) {
        for (let i = 0; i < bookNames.length; i++) {
            this.removeBook(bookNames[i]);
        }
    }

    getMostExpensive(): string {
        let mostExpensiveValue: number = 0;
        let mostExpensiveName: string = '';
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].price > mostExpensiveValue) {
                mostExpensiveValue = this.books[i].price;
                mostExpensiveName = this.books[i].title;
            }
        }
        return 'The most expensive book is ' + mostExpensiveName + ' it cost ' + mostExpensiveValue + ' UAH';
    }

    getTheOldest(): string {
        let oldest: number = Number.MAX_VALUE;
        let oldestname: string = '';
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].year < oldest) {
                oldest = this.books[i].year;
                oldestname = this.books[i].title;
            }
        }
        return 'The oldest book is ' + oldestname + ' it is already ' + (2024 - oldest) + ' years old';
    }

    getAveragePrice(): string {
        let sum: number = 0;
        for (let i = 0; i < this.books.length; i++) {
            sum += this.books[i].getPriceInUSD();
        }
        return (sum / this.books.length).toFixed(2);
    }

    sellProperty() {
        let sum: number = 0;
        for (let i = 0; i < this.books.length; i++) {
            sum += this.books[i].getPriceInUSD();
        }
        this.books.splice(0, this.books.length);
        console.log('All this library cost ' + sum.toFixed(2) + ' USD');
    }
}

const BigLib: MyLibrary = new MyLibrary([b1, b2, b3, b6, b7], 'Large Lib');
const TinyLib: MyLibrary = new MyLibrary([b10, b11, b12], 'Small Lib');

TinyLib.addBook(new MyBook('Feast For Crows', 'George Martin', 2005, 300));

BigLib.addBooks([b4, b5]);
BigLib.removeBooks(['Casino Royale', b7.title]);
//console.log(LargeLib);

TinyLib.removeBook('Study in Scarlet');
//console.log(SmallLib);



console.log(BigLib.getMostExpensive());
console.log(BigLib.getTheOldest());
console.log(TinyLib.getAveragePrice());

BigLib.sellProperty();
BigLib.sellProperty();

TinyLib.sellProperty();