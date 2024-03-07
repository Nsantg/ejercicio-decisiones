const valorBase = 7000000;

let opcionPago = parseInt(prompt("Selecciona la opción de pago:\n1 - Pago completo\n2 - Pago en 2 cuotas\n3 - Pago en 3 cuotas"));

if (opcionPago == 1) {
    totalPagar = valorBase - (valorBase * 0.05); 
} else if (opcionPago == 2 || opcionPago == 3) {
    totalPagar = (valorBase / opcionPago) * 1.02; 
} else {
    alert("opcion invalida");  
}

    alert("Total a Pagar: $" + (totalPagar));