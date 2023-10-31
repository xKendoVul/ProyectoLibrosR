fetch('json/lista-libros.json')
    .then(response => response.json())
    .then(data => {
        // Trabajar con los datos obtenidos
        console.log(data); // Mostrar los datos en la consola
        displayBooks(data); // Llamar a la función para mostrar los libros en la página
    })
    .catch(error => console.error('Error al obtener los datos:', error));

function displayBooks(books) {
    // Obtener el contenedor de la lista de libros
    const bookListContainer = document.getElementById('lista-libros');

    // Mostrar la lista de libros en el contenedor
    books.forEach(book => {
        let bookItem = document.createElement('div');
        bookItem.innerHTML = `
                <h2>${book.title}</h2>
                <img src="${book.image}" alt="${book.title}" style="max-width: 100px; max-height: 100px;">
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Género:</strong> ${book.genre}</p>
                <p><strong>Año:</strong> ${book.year}</p>
                <hr>
            `;
        bookListContainer.appendChild(bookItem);
    });
}





