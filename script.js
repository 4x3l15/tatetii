const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("miModal");
const iniciarJuegoBtn = document.getElementById("iniciarJuego");
const nombreJugadorXInput = document.getElementById("nombreJugadorX");
const nombreJugadorOInput = document.getElementById("nombreJugadorO");
const Turno = document.getElementById("Turno");

let jugadoresRegistrados = false;
let nombreJugadorX = '';
let nombreJugadorO = '';

abrirModal.addEventListener("click", () => {
    modal.style.display = "block";
});

iniciarJuegoBtn.addEventListener("click", () => {
    nombreJugadorX = nombreJugadorXInput.value;
    nombreJugadorO = nombreJugadorOInput.value;

    if (nombreJugadorX && nombreJugadorO) {
        jugadoresRegistrados = true;
        modal.style.display = "none";
        Turno.innerText = `Turno de ${nombreJugadorX}`;
    } else {
        alert("Por favor, ingresa los nombres de ambos jugadores antes de jugar.");
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
        if (jugadoresRegistrados) {
            celda.innerText = jugadorActual;
            celda.classList.add('marcada');
            let nombreJugadorActual = jugadorActual === 'X' ? nombreJugadorX : nombreJugadorO;

            if (verificarGanador()) {
                alert(`¡${nombreJugadorActual} ha ganado!`);
                juegoTerminado = true;
            } else if ([...celdas].every(celdas => celdas.innerText)) {
                alert('¡Empate!');
                juegoTerminado = true;
            } else {
                jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
                Turno.innerText = `Turno de ${jugadorActual === 'X' ? nombreJugadorX : nombreJugadorO}`;
            }
        } else {
            alert("Por favor, registra los nombres de los jugadores antes de jugar.");
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
    Turno.innerText = `Turno de ${nombreJugadorX}`;
}
  

