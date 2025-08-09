// game.js

// Genera un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

console.log("¡Bienvenido al juego de Frío o Caliente!");
console.log("Adivina el número entre 1 y 100.");

// Importa el módulo para leer desde consola
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar() {
    rl.question("Ingresa tu número: ", (respuesta) => {
        let numeroJugador = parseInt(respuesta);
        intentos++;

        if (isNaN(numeroJugador)) {
            console.log("Por favor, ingresa un número válido.");
            preguntar();
            return;
        }

        if (numeroJugador === numeroSecreto) {
            console.log(`¡Correcto! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`);
            rl.close();
        } else {
            let diferencia = Math.abs(numeroSecreto - numeroJugador);
            if (diferencia <= 5) {
                console.log("🔥 Caliente");
            } else {
                console.log("❄️ Frío");
            }
            preguntar();
        }
    });
}

preguntar();
