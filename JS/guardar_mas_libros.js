const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function (event) {
    let biblioteca = JSON.parse(localStorage.getItem("biblioteca"))
    event.preventDefault();
    const tituloInput = document.getElementById('title').value;
    const autorInput = document.getElementById('author').value;
    const generoInput = document.getElementById('genre').value;
    const añoInput = document.getElementById('year').value;
    const sinopsisInput = document.getElementById('sinopsis').value

    console.log(tituloInput, autorInput, generoInput, añoInput,)

    if (tituloInput === "" || autorInput === "" || generoInput === "" || añoInput === "") {
        alert("Informacion EXTRICTAMENTE NECESARIA!!!!")
    }
    else {
        biblioteca.push({
            titulo: tituloInput,
            autor: autorInput,
            genero: generoInput,
            año: añoInput,
            sinopsisInput: sinopsisInput
        });
        formulario.reset();
        localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
    }
});
