// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", () => {
    let boton = document.getElementById("crearpdf");
    let conainar = document.getElementById("contenedor");

    boton.addEventListener("click", event => {
        event.preventDefault();
        boton.style.display = "none";
        window.print();
    }, false);

    conainar.addEventListener("click", event => {
        boton.style.display = "initial";
    }, false);

}, false);