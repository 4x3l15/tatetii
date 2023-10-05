const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");

abrirModal.addEventListener("click", () => {
    modal.style.display = "block";
});

cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
