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


const celdas = document.querySelectorAll('.elem');
const reiniciarBoton = document.getElementById('reiniciar');
let jugadorActual = 'X';
let juegoTerminado = false;


celdas.forEach(celda => {
    celda.addEventListener('click', manejarClic);
});


reiniciarBoton.addEventListener('click', reiniciarJuego);


function manejarClic(event) {
    const celda = event.target;


    if (!celda.innerText && !juegoTerminado) {
        celda.innerText = jugadorActual;
        celda.classList.add('marcada');


        if (verificarGanador()) {
            alert(`¡Jugador ${jugadorActual} ha ganado!`);
            juegoTerminado = true;
        } else if ([...celdas].every(c => c.innerText)) {
            alert('¡Empate!');
            juegoTerminado = true;
        } else {
            jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        }
    }
}


function verificarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];


    return combinacionesGanadoras.some(comb => {
        const [a, b, c] = comb;
        return celdas[a].innerText && celdas[a].innerText === celdas[b].innerText && celdas[a].innerText === celdas[c].innerText;
    });
}


function reiniciarJuego() {
    celdas.forEach(celda => {
        celda.innerText = '';
        celda.classList.remove('marcada');
    });
    jugadorActual = 'X';
    juegoTerminado = false;
}
