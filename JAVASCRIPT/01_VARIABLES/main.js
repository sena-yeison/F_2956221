// // Variables

// // Tipos

// /*
//     LET =>
//     VAR
//     CONST

// */

// let data = 7.5;
// const data2 = 6;
// // data = "33333";
// // data = "Yeison";
// // data = {
// //   nombre: "Yeison",
// //   Apellidos: "Barrios"
// // };

// console.log("Valor : ", data2 + data)

// // data = [
// //   {
// //     nombre: "Yeison",
// //     Apellidos: "Barrios"
// //   },
// //   {
// //     nombre: "Yeison",
// //     Apellidos: "Barrios"
// //   }
// // ];

// // TIPOS DE DATOS
// // PRIMITIVOS ()

// // console.log(data)

// ESTRUCTURAS DE CONTROL

// SIMPLES
// let valor1 = 5;
// let valor2 = 4;
// let valor3 = 2;

// if (valor2 > valor3) {
//     console.log( valor2, "Es mayor");
// }else if(valor1 < valor3) {
//     console.log( valor3 , "Es mayor");
// }
//  if (valor1 > valor2) {
//     console.log(valor1, " Es mayor")
// }

// SWITCH -> SELECCIÓN DE UNA OPCION

let menu = `
  1. Case 1
  2. Case 2
  3. Case 3
  4. Case 4
  5. Case 5
  6. Case 6
`;
alert(menu);
let opcion = parseInt(prompt("Ingrese la opción"));

switch (opcion) {
  case 1:
    console.log("Estoy en el case 1");
    break;
  case 2:
    console.log("Estoy en el case 2");
    break;
    case 3:
        alert("Estoy en el case 3");
        let opcionInterna = parseInt(prompt("Ingrese la opción interna"));
        switch (opcionInterna) {
          case 1:
            console.log("Estoy en el case interno No. 1");
            break;
          case 2:
            console.log("Estoy en el case interno No. 2");
            break;
          case 3:
            console.log("Estoy en el case interno No. 3");
            break;
          case 4:
            console.log("Estoy en el case interno No. 4");
            break;
          case 5:
            console.log("Estoy en el case interno No. 5");
            break;
          case 6:
            console.log("Estoy en el case interno No. 6");
            break;
          default:
            console.log("Opcion invalida");
        }
    break;
  case 4:
    console.log("Estoy en el case 4");
    break;
  case 5:
    console.log("Estoy en el case 5");
    break;
  case 6:
    console.log("Estoy en el case 6");
    break;
  default: console.log("Opcion invalida");
}




//  CICLOS 
