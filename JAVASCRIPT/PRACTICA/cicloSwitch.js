let opcion;
let nombre = (prompt("¿Cómo te llamas?"));

do {

    console.log(`Hola ${nombre}, elige una opción\n1. Suma\n2. Resta\n6. Salir`);
    console.log(`Dime la opción`)

    opcion = parseInt(prompt("Ingrese la opción"));
    
    switch (opcion) {
        case 1:
            let numero = parseInt(prompt("¿Cúal es la tabla que quieres generar"));
            sumar(numero);
            opcionElegir = (prompt("¿Deseas continuar o salir?\n1. Continuar 2. Salir"));
            if (opcionElegir == 2) {
                opcion = 6
            }
            break;
        case 2:
            console.log("Estoy en el case 2");
            break;
        case 3:
            console.log("Estoy en el case 3");
            break;
        case 4:
            console.log("Estoy en el case 4");
            break;
        case 5:
            console.log("Estoy en el case 5");
            break;
        case 6:
            console.log("Salir");
            break;
        default: console.log("Opcion invalida");
    }

} while (opcion != 6);
    
console.clear();





// Sumar dos numeros
function sumar(numero) {
    for (let i = 0; i <= 10; i++) {
      console.log(i, " / ", numero, " = ", i / numero);
    }
}