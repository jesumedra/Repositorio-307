import { actualizarDisplay } from "./ResultadoLitros/Resultado.js";

export default function InterfazLitros() {

    const container = document.createElement("div");
    container.className = "dispensador-container";

    let litros = 0;
    let precio = 0;

    const precioPorLitro = 22.50;
    const limiteMaximo = 10;

    let litrosPedido = 0;
    const incremento = 0.001;  // 1 mililitro
    let intervalo = null;

    // Título
    const titulo = document.createElement("h2");
    titulo.innerText = "Dispensador de Gas";
    titulo.className = "dispensador-titulo";
    container.appendChild(titulo);

    // Info
    const info = document.createElement("p");
    info.innerText = `Precio por litro: $${precioPorLitro} | Máximo permitido: ${limiteMaximo} L`;
    info.className = "dispensador-info";
    container.appendChild(info);

    // Input para pedir litros
    const inputLitros = document.createElement("input");
    inputLitros.type = "number";
    inputLitros.placeholder = "¿Cuántos litros quieres?";
    inputLitros.className = "dispensador-input";
    inputLitros.min = "0.1";
    inputLitros.max = limiteMaximo;
    inputLitros.step = "0.1";
    container.appendChild(inputLitros);

    // Display
    const display = document.createElement("div");
    display.className = "dispensador-display";
    container.appendChild(display);

    actualizarDisplay(display, litros, precio);

    // Botón surtir
    const btnSurtir = document.createElement("button");
    btnSurtir.innerText = " Surtir";
    btnSurtir.className = "btn btn-surtir";

    btnSurtir.onclick = () => {
        if (intervalo) return;

        litrosPedido = parseFloat(inputLitros.value);

        if (!litrosPedido || litrosPedido <= 0) {
            actualizarDisplay(display, litros, precio, "Ingresa litros válidos");
            return;
        }

        if (litrosPedido > limiteMaximo) {
            actualizarDisplay(display, litros, precio, "Máximo permitido: 10 L");
            return;
        }

        intervalo = setInterval(() => {

            if (litros + incremento <= litrosPedido) {
                litros += incremento;
                litros = parseFloat(litros.toFixed(3));
                precio = litros * precioPorLitro;

                actualizarDisplay(display, litros, precio);
            } else {
                actualizarDisplay(display, litros, precio, "Cantidad alcanzada");
                clearInterval(intervalo);
                intervalo = null;
            }

        }, 100); // ← ANTES 10ms — AHORA MÁS LENTO

    };

    container.appendChild(btnSurtir);

    // Botón detener
    const btnDetener = document.createElement("button");
    btnDetener.innerText = " Detener";
    btnDetener.className = "btn btn-detener";

    btnDetener.onclick = () => {
        clearInterval(intervalo);
        intervalo = null;
    };

    container.appendChild(btnDetener);

    // Botón reset
    const btnReset = document.createElement("button");
    btnReset.innerText = " Resetear";
    btnReset.className = "btn btn-reset";

    btnReset.onclick = () => {
        clearInterval(intervalo);
        intervalo = null;
        litros = 0;
        precio = 0;
        inputLitros.value = "";
        actualizarDisplay(display, litros, precio);
    };

    container.appendChild(btnReset);

    document.body.appendChild(container);
}
