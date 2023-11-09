function displayBooks() {
    let coleccionLibros = JSON.parse(localStorage.getItem("biblioteca"))
    if (coleccionLibros === null) {
        coleccionLibros = localStorage.setItem("biblioteca", JSON.stringify(libros))
    }
    else {
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
}
