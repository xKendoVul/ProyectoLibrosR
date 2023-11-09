let bookListContainer = document.getElementById('lista-libros');
let coleccionLibros = JSON.parse(localStorage.getItem("biblioteca"))

//*--------------------------------------------------------------

function espacioLibros(libros) {
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
}

//*--------------------------------------------------------------

function desplegarLibros() {
    if (coleccionLibros === null) {
        coleccionLibros = localStorage.setItem("biblioteca", JSON.stringify(libros))
    }
    else {
        espacioLibros(coleccionLibros)
    }
}

//*--------------------------------------------------------------

desplegarLibros()

//*--------------------------------------------------------------

function buscarTitulo() {
    let coleccionLibros = JSON.parse(localStorage.getItem("biblioteca"))
    const buscarInput = document.getElementById('texto_buscar').value.toLowerCase();
    const resultadoLibros = coleccionLibros.filter(book => book.titulo.toLowerCase().includes(buscarInput));

    if (resultadoLibros.length === 0) {
        bookListContainer.innerHTML = '<p>No se encontraron resultados para la búsqueda.</p>';
    }
    else {
        bookListContainer.innerHTML = ``
        espacioLibros(resultadoLibros)
    }

}