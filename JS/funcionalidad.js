let libros = [
    {
        titulo: "El señor de los anillos",
        autor: "J R R Tolkien",
        genero: "Fantasia",
        año: 1947,
        sinopsis: 'El señor de los anillos es una épica trilogía que sigue' +
            "las aventuras de Frodo Bolsón y su grupo de compañeros en su búsqueda" +
            "para destruir un poderoso anillo y así derrotar al malvado señor" +
            "oscuro Sauron.Con  un mundo vasto y detallado, personajes memorables" +
            "y temas profundos sobre la amistad, la valentía y la lucha entre el" +
            "bien y el mal, esta obra maestra de la fantasía ha dejado una marca" +
            "perdurable en la literatura y la cultura popular"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ficcion",
        año: 1949,
        sinopsis: ""
    }
];

//*--------------------------------------------------------------

let bookListContainer = document.getElementById('lista-libros');
console.log(bookListContainer)

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

//*--------------------------------------------------------------

displayBooks()

//*--------------------------------------------------------------