function mostrarImagen(src) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imagen-modal");
    modal.style.display = "flex";
    modalImg.src = src;
}

function mostrarImagenConSonido(src) {
    mostrarImagen(src);
    var audio = document.getElementById("sonido-navidad");
    audio.play();
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    var audio = document.getElementById("sonido-navidad");
    audio.pause();
    audio.currentTime = 0;
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        cerrarModal();
    }
}