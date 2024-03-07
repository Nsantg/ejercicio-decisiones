const Clasicos = 500000;
const Running = 800000;
const Basketball = 1000000;

let opcionSeleccionada = parseInt(prompt("selecciona el modelo: \n1. Clasicos \n2. Running \n3. Basketball"));

if(opcionSeleccionada == 1){
    precio = Clasicos;
    talla = parseInt(prompt("Ingrese la talla, hay disponibles desde la talla 35 hasta la 44"));
        if(talla < 35 || talla > 44) {
        alert("La talla seleccionada no esta disponible");
        } else {
            cantidad = parseInt(prompt("seleccione la cantidad deseada, min. 1, max. 5" ));
        }       if(cantidad < 1 || cantidad > 5) {
                alert("La cantidad seleccionada es invalida");
                } else {
                    if(cantidad >= 3) {
                        alert((precio * cantidad)-(precio * cantidad * 0.1));
                    } else {
                        alert(precio * cantidad);
                    }
                }
} else if(opcionSeleccionada == 2){
    precio = Running;
    talla = parseInt(prompt("Ingrese la talla, hay disponibles desde la talla 35 hasta la 44"));
        if(talla < 35 || talla > 44) {
        alert("La talla seleccionada no esta disponible");
        } else {
            cantidad = parseInt(prompt("seleccione la cantidad deseada, min. 1, max. 5" ));
        }       if(cantidad < 1 || cantidad > 5) {
                alert("La cantidad seleccionada es invalida");
                } else {
                    if(cantidad >= 3) {
                        alert((precio * cantidad)-(precio * cantidad * 0.1));
                    } else {
                        alert(precio * cantidad);
                    }
                }
} else if(opcionSeleccionada == 3){
    precio = Basketball;
    talla = parseInt(prompt("Ingrese la talla, hay disponibles desde la talla 35 hasta la 44"));
        if(talla < 35 || talla > 44) {
        alert("La talla seleccionada no esta disponible");
        } else {
            cantidad = parseInt(prompt("seleccione la cantidad deseada, min. 1, max. 5" ));
        }       if(cantidad < 1 || cantidad > 5) {
                alert("La cantidad seleccionada es invalida");
                } else {
                    if(cantidad >= 3) {
                        alert((precio * cantidad)-(precio * cantidad * 0.1));
                    } else {
                        alert(precio * cantidad);
                    }
                }
} else {
    alert("No seleccionaste un modelo valido");
}