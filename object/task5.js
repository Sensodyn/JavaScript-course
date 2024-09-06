const library = {
    books: [
        {
            title: 'A',
            author: 'QQ',
            publish: 2001,
        },
        {
            title: 'B',
            author: 'QQ',
            publish: 2002,
        },
        {
            title: 'C',
            author: 'QE',
            publish: 2003,
        }
    ],
    adress: 'Town, Street',
}

// console.log(library.books);

function libraryInfo(library) {
    for (let i = 0; i < library.books.length; i++) {
        for (let key in library.books[i]) {
            console.log(library.books[i][key]);
        }
    }
}
libraryInfo(library);