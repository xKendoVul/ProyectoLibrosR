let books = [
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        genero: 'Ficción',
        año: 1967,
        portada: 'images/senor-de-los-anillos.jpeg'
    },
    {
        titulo: 'El señor de los anillos',
        autor: 'J.R.R. Tolkien',
        genero: 'Fantasía',
        año: 1954,
        portada: 'images/senor-de-los-anillos.jpeg'
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        genero: 'Ciencia ficción',
        año: 1949,
        portada: 'images/senor-de-los-anillos.jpeg'
    }
];

let bookListContainer = document.getElementById('lista-libros');

books.forEach(book => {
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
        <h2>${book.titulo}</h2>
        <img src="${book.portada}" alt="${book.titulo}" style="max-width: 100px; max-height: 100px;">
        <p><strong>Autor:</strong> ${book.autor}</p>
        <p><strong>Género:</strong> ${book.genero}</p>
        <p><strong>Año:</strong> ${book.año}</p>
        <hr>
    `;
    bookListContainer.appendChild(bookItem);
});

const formulario = document.getElementById("add-book-form");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const titulo = document.getElementById("title").value;
    const autor = document.getElementById("author").value;
    const genero = document.getElementById("genre").value;
    const año = document.getElementById("year").value;
    const imagen = document.getElementById("image").value;

    books.push({ titulo, autor, genero, año, imagen });
    formulario.reset();
    displayBooks();
})

function displayBooks() {
    bookListContainer.innerHTML = '';
    books.forEach(book => {
        let bookItem = document.createElement('div');
        bookItem.innerHTML = `
            <h2>${book.titulo}</h2>
            <img src="${book.portada}" alt="${book.titulo}" style="max-width: 100px; max-height: 100px;">
            <p><strong>Autor:</strong> ${book.autor}</p>
            <p><strong>Género:</strong> ${book.genero}</p>
            <p><strong>Año:</strong> ${book.año}</p>
            <hr>
        `;
        bookListContainer.appendChild(bookItem);
    });
}

displayBooks();