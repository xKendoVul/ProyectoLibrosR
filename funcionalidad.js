let books = [
    {
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        genre: 'Ficción',
        year: 1967,
        port: 'images/senor-de-los-anillos.jpeg'
    },
    {
        title: 'El señor de los anillos',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasía',
        year: 1954,
        port: 'images/senor-de-los-anillos.jpeg'
    },
    {
        title: '1984',
        author: 'George Orwell',
        genre: 'Ciencia ficción',
        year: 1949,
        port: 'images/senor-de-los-anillos.jpeg'
    }
];

let bookListContainer = document.getElementById('book-list');

books.forEach(book => {
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
    <img src="${book.port}" alt="${book.title}" style="max-width: 100px; max-height: 100px;">
        <h2>${book.title}</h2>
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Género:</strong> ${book.genre}</p>
        <p><strong>Año:</strong> ${book.year}</p>
        <hr>
    `;
    bookListContainer.appendChild(bookItem);
});
