function letraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function (event) {
    let biblioteca = JSON.parse(localStorage.getItem("biblioteca"))
    event.preventDefault();
    const tituloInput = letraMayuscula(document.getElementById('title').value);
    const autorInput = letraMayuscula(document.getElementById('author').value);
    const generoInput = letraMayuscula(document.getElementById('genre').value);
    const añoInput = letraMayuscula(document.getElementById('year').value);
    const sinopsisInput = letraMayuscula(document.getElementById('sinopsis').value);

    console.log(tituloInput, autorInput, generoInput, añoInput,)

    if (tituloInput === "" || autorInput === "" || generoInput === "" || añoInput === "") {
        alert("Informacion ESTRICTAMENTE NECESARIA!!!!")
    }
    else {
        biblioteca.push({
            titulo: tituloInput,
            autor: autorInput,
            genero: generoInput,
            año: añoInput,
            sinopsis: sinopsisInput
        });
        formulario.reset();
        localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
    }
});
