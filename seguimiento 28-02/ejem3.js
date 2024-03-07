const EscobaDuraSintética = 8000;
const EscobaDuraNatural = 10000;
const cepilloSintético = 12000;
const cepilloNatural = 15000;
const Mangolargo = 2000;
const GanchoEnPunta = 500;
const nada = 0;
let opcionSeleccionada = parseInt(prompt("seleccione el producto: \n1. Escoba dura sintetica \n2. Escoba dura natural \n3. Cepillo sintetico \n4. Cepillo natural"));

if(opcionSeleccionada == 1){
   precio = EscobaDuraSintética;
   Extra = parseInt(prompt("Selccione si desea un producto adicional: \n5. Mango largo \n6. Gancho en punta \n7. Nada"));
   if(Extra == 5){
      Extra = Mangolargo;
   } else if(Extra == 6){
      Extra = GanchoEnPunta;
   } else if(Extra == 7){
      Extra = nada
   } else {
      alert("opcion invalida");
   }
   Cantidad = parseInt(prompt("Seleccione la cantidad a fabricar: min. 3, max. 30"));
      if(Cantidad < 3 || Cantidad > 30) {
         alert("La cantidad seleccionada es invalida");
      } else {
         alert("$"+ ((precio + Extra) * Cantidad));
      }
} else if(opcionSeleccionada == 2){
   precio = EscobaDuraNatural;
   Extra = parseInt(prompt("Selccione si desea un producto adicional: \n5. Mango largo \n6. Gancho en punta \n7. Nada"));
   if(Extra == 5){
      Extra = Mangolargo;
   } else if(Extra == 6){
      Extra = GanchoEnPunta;
   } else if(Extra == 7){
      Extra = nada
   } else {
      alert("opcion invalida");
   }
   Cantidad = parseInt(prompt("Seleccione la cantidad a fabricar: min. 3, max. 30"));
      if(Cantidad < 3 || Cantidad > 30) {
         alert("La cantidad seleccionada es invalida");
      } else {
         alert("$"+ ((precio + Extra) * Cantidad));
      }
} else if(opcionSeleccionada == 3){
   precio = cepilloSintético;
   Extra = parseInt(prompt("Selccione si desea un producto adicional: \n5. Mango largo \n6. Gancho en punta \n7. Nada"));
   if(Extra == 5){
      Extra = Mangolargo;
   } else if(Extra == 6){
      Extra = GanchoEnPunta;
   } else if(Extra == 7){
      Extra = nada
   } else {
      alert("opcion invalida");
   }
   Cantidad = parseInt(prompt("Seleccione la cantidad a fabricar: min. 3, max. 30"));
      if(Cantidad < 3 || Cantidad > 30) {
         alert("La cantidad seleccionada es invalida");
      } else {
         alert("$"+ ((precio + Extra) * Cantidad));
      }
} else if(opcionSeleccionada == 4){
   precio = cepilloNatural;
   Extra = parseInt(prompt("Selccione si desea un producto adicional: \n5. Mango largo \n6. Gancho en punta \n7. Nada"));
   if(Extra == 5){
      Extra = Mangolargo;
   } else if(Extra == 6){
      Extra = GanchoEnPunta;
   } else if(Extra == 7){
      Extra = nada
   } else {
      alert("opcion invalida");
   }
   Cantidad = parseInt(prompt("Seleccione la cantidad a fabricar: min. 3, max. 30"));
      if(Cantidad < 3 || Cantidad > 30) {
         alert("La cantidad seleccionada es invalida");
      } else {
         alert("$"+ ((precio + Extra) * Cantidad));
      }
} else {
   alert("El producto seleccionado no es valido")
}            