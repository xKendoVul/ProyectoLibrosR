let libros = [
    {
        titulo: "El señor de los anillos",
        autor: "J R R Tolkien",
        genero: "Fantasia",
        año: 1947
    }
];

//*--------------------------------------------------------------

let bookListContainer = document.getElementById('lista-libros');

function displayBooks() {
    let coleccionLibros = JSON.parse(localStorage.getItem("biblioteca"))
    coleccionLibros.forEach(libro => {
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
}

//*--------------------------------------------------------------

displayBooks()

//*--------------------------------------------------------------

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function (event) {
    let biblioteca = JSON.parse(localStorage.getItem("biblioteca"))
    event.preventDefault();
    const tituloInput = document.getElementById('title').value;
    const autorInput = document.getElementById('author').value;
    const generoInput = document.getElementById('genre').value;
    const añoInput = document.getElementById('year').value;
    // let imagen = document.getElementById('image').value;
    console.log(tituloInput, autorInput, generoInput, añoInput)

    biblioteca.push({
        titulo: tituloInput,
        autor: autorInput,
        genero: generoInput,
        año: añoInput
    });

    bookListContainer.innerHTML = ''
    formulario.reset();
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
    displayBooks();
});

//*--------------------------------------------------------------