function FiltrarPorGenero(genero) {
    let LibrosPorGenero = document.getElementById("Libros_por_genero")

    let coleccion = JSON.parse(localStorage.getItem("biblioteca"))
    let librosFiltrados = coleccion.filter(libro => libro.genero === genero);
    console.log(librosFiltrados)

    librosFiltrados.forEach(libro => {
        let bookItem = document.createElement('div');
        bookItem.innerHTML = `
        <h2>${libro.titulo}</h2>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Año:</strong> ${libro.año}</p>
        <hr>
    `;
        LibrosPorGenero.appendChild(bookItem);
    });
}