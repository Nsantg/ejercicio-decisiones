const Bestsellers = 500;
const literatura = 100;
const academicos = 0;

let opcionSeleccionada = parseInt(prompt("Selecciona la categoria del libro \n1. Bestsellers \n2. literatura \n3. academicos"));

if(opcionSeleccionada == 1){
    precio = Bestsellers;
    Dias = parseInt(prompt("Indique el número de dias del prestamo (min. 1, max. 30"));
    if(Dias < 1 || Dias > 30){
        alert("Número de dias invalido");
    } else {
        cantidad = parseInt(prompt("Selecciona la cantidad de libros (1-5)"));
        if(cantidad < 1 || cantidad > 5){
            alert("La cantidad seleccionada es invalida");
        } else {
            alert(precio * Dias * cantidad);
        }
    }
} else if(opcionSeleccionada == 2){
    precio = literatura;
    Dias = parseInt(prompt("Indique el número de dias del prestamo (min. 1, max. 30"));
    if(Dias < 1 || Dias > 30){
        alert("Número de dias invalido");
    } else {
        cantidad = parseInt(prompt("Selecciona la cantidad de libros (1-5)"));
        if(cantidad < 1 || cantidad > 5){
            alert("La cantidad seleccionada es invalida");
        } else {
            alert(precio * Dias * cantidad);
        }
    }
} else if(opcionSeleccionada == 3){
    precio = academicos;
    Dias = parseInt(prompt("Indique el número de dias del prestamo (min. 1, max. 30"));
    if(Dias < 1 || Dias > 30){
        alert("Número de dias invalido");
    } else {
        cantidad = parseInt(prompt("Selecciona la cantidad de libros (1-5)"));
        if(cantidad < 1 || cantidad > 5){
            alert("La cantidad seleccionada es invalida");
        } else {
            alert(precio * Dias * cantidad);
        }
    }
} else {
    alert("categoria invalida")
}
