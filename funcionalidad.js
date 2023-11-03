let libros = [
    {
        titulo: "El señor de los anillos",
        autor: "J R R Tolkien",
        genero: "Fantasia",
        año: 1947
    }
];

let bookListContainer = document.getElementById('lista-libros');

libros.forEach(libro => {
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
        <h2>${libro.titulo}</h2>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
        <p><strong>Año:</strong> ${libro.año}</p>
        <hr>
    `;
    bookListContainer.appendChild(bookItem);
});

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const titulo = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const genero = document.getElementById('genre').value;
    const año = document.getElementById('year').value;
    // let imagen = document.getElementById('image').value;
    console.log(titulo, autor, genero, año)

    localStorage.setItem('books', JSON.stringify(books));
    formulario.reset();
    displayBooks();
});

function displayBooks() {
    libros.forEach(libro => {
        let bookItem = document.createElement('div');
        bookItem.innerHTML = `
            <h2>${libro.titulo}</h2>
            
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Género:</strong> ${libro.genero}</p>
            <p><strong>Año:</strong> ${libro.año}</p>
            <hr>
        `;
    });
}

displayBooks();