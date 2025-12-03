export function actualizarDisplay(display, litros, precio, mililitros = 0, mensaje = "") {
    display.innerHTML = `
        <strong>Litros:</strong> ${litros} L<br>
        <strong>Precio:</strong> $${precio.toFixed(2)} MXN<br>
        <p style="margin-top:10px; color:#0f0;">${mensaje}</p>
    `;
}
