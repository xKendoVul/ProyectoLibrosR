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
    <img src="${books.portada}" alt="${books.titulo}" style="max-width: 100px; max-height: 100px;">
        <h2>${books.titulo}</h2>
        <p><strong>Autor:</strong> ${books.autor}</p>
        <p><strong>Género:</strong> ${books.genero}</p>
        <p><strong>Año:</strong> ${books.año}</p>x   
        <hr>
    `;
    bookListContainer.appendChild(bookItem);
});

const formulario = document.getElementById("add-book-form");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const titulo = document.getElementById("title");
    const

})