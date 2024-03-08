const general = 50000;
const preferencial = 150000;
const VIP = 300000;

let costoTotal = "0"
let cargo = 5000;
let impuestos = 0.010;

let opcionSeleccionada = parseInt(prompt("Elija el tipo de boleta:\n1 General 50000  \n2 Preferencial 150000  \n3 VIP 300000"));

if(opcionSeleccionada < 1 || opcionSeleccionada > 3){
    alert("tipo de boleta no valido");
} else {
    let boletas = parseInt(prompt("ingrese la cantidad de boletas (max. 5)"));
    if(boletas < 1 || boletas > 5){
        alert("Solo se pueden comprar entre 1 o 5 boletas");
    } else {
        switch(opcionSeleccionada){
            case 1:
                costoTotal = (general * boletas) + cargo + (general * boletas * impuestos); break;
            case 2:
                costoTotal = (preferencial * boletas) + cargo + (preferencial * boletas * impuestos); break;
            case 3:
                costoTotal = (VIP * boletas) + cargo + (VIP * boletas * impuestos); break;
            
        }  let tipodepago = parseInt(prompt("Que metodo de pago usara: \n1 Tarjeta \n2 Efectivo"))
        if (tipodepago <1 || tipodepago > 2){
            alert ("metodo de pago invalido")
        }
        else {
            alert("El costo total es $" + costoTotal);
            }
}
}