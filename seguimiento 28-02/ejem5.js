const  Hamburguesas = 25000
const Pizzería = 85000
const ComidaChina = 18000

let menu
let costoTotal = 0
let domicilio = 1
let envio = 5000

let opcionSeleccionada = parseInt(prompt("Seleccione el restaurante que quiera  \n1. Hamburguesas  \n2 pizzeria  \n3 Comida China"));
if(opcionSeleccionada <1 || opcionSeleccionada >3){
    alert("Ese restaurante no esta en la lista");
}else{
if(opcionSeleccionada === 1){
    alert("Hamburguesa 25000");
}else if (opcionSeleccionada === 2){
    alert("pizza 85000");
}else if (opcionSeleccionada === 3){
alert("Comida china 18000");
}

let cantidad = parseInt(prompt("elija la cantidad (max. 100)"))
if (cantidad <1 || cantidad >100){
    alert("Minimo 1 porcion, max. 100")
}else{ 
    if(domicilio = 1)
        switch(domicilio){
        case 1:
        costoTotal = (Hamburguesas * cantidad + envio); break;
        case 2:
        costoTotal = (Pizzería * cantidad + envio); break;
        case 3:
        costoTotal = (ComidaChina * cantidad + envio); break;
        }
        
        alert ("el costo del pedido es de $"+ costoTotal);
     }
}