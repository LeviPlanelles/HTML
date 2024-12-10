function mostrarImagen(src) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imagen-modal");
    modal.style.display = "block";
    modalImg.src = src;
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}