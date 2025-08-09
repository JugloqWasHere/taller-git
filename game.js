// Genera un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
    const input = document.getElementById("numero");
    const mensaje = document.getElementById("mensaje");

    let numeroJugador = parseInt(input.value);
    intentos++;

    if (isNaN(numeroJugador)) {
        mensaje.textContent = "⚠️ Por favor, ingresa un número válido.";
        return;
    }

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `🎉 ¡Correcto! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`;
    } else {
        let diferencia = Math.abs(numeroSecreto - numeroJugador);
        if (diferencia <= 5) {
            mensaje.textContent = "🔥 Caliente";
        } else {
            mensaje.textContent = "❄️ Frío";
        }
    }

    input.value = "";
    input.focus();
}

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA