document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".imagen-galeria");

    imagenes.forEach((imagen, index) => {
        imagen.addEventListener("click", () => {
            alert(`Haz hecho clic en la imagen ${index + 1}`);
        });
    });
});
