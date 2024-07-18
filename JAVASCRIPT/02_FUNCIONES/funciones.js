

// // // FUNCIONES 
// // // let valor1 = parseInt(prompt("Valor 1"))
// // // let valor2 = parseInt(prompt("Valor 2"))

// // let valor1 = 4;
// // let valor2 = 6;
// // let response = nombreFuncion(valor1); 
// // console.log("--")
// // console.log("--")
// // console.log("--")
// // console.log(response)

// // // DECLARADAS
// // function nombreFuncion(x=0,y=0,z=0){
// //     let conca = [x,y]
// //     console.log(conca)
// //     return conca;
// // }




// // // // FUNCIONES ANÓNIMAS
// // // const funcionAnonima = function(){
// // //     console.log("Función anónima")
// // // }


// // // funcionAnonima()



// // // // FUNCIONES DE FLECHA
// // // const flecha = ()=>{
// // //     console.log("Función fecha")
// // // }

// // // flecha();



// function start(){
//     let nombre = "Yeison";
//     let nota1 = 10;  
//     let nota2 = 50;
//     let nota3 = 15;

//     let promedio = Promedio(nota1, nota2, nota3);
//     console.log(promedio);

//     if(nota1 > promedio){console.log("La clififcación 1 es mayor")}
//     if(nota2 > promedio){console.log("La clififcación 2 es mayor")}
//     if(nota3 > promedio){console.log("La clififcación 3 es mayor")}
// }



// function Promedio(x,y,z){
//     return (x+y+z)/3;
// }


// start()


// // ARREGLOS
// let arreglo = [1];
// // console.log(arreglo);
// let i = 0;
// do{
//     console.log(arreglo[i])
//     i++;
// }while(i>arreglo.length)


// console.log("----------------")

// // EJERCICIO CON LLENADO MANUALPOR POSICIÓN
// let arregloManual = Array();
// arregloManual[0] = prompt("Nombre del primer aprendiz");
// arregloManual[1] = prompt("Nombre del segundo aprendiz");
// arregloManual[2] = prompt("Nombre del tercero aprendiz");
// arregloManual[3] = prompt("Nombre del cuarto aprendiz");

// console.log(arregloManual)


// EJERCICIO CON LLENADO CICLICO
// Llenando los datos
let arregloAprendices = [];
let cantidad = 2;
for(let i=0; i<cantidad; i++){
    arregloAprendices[i]=prompt("Ingrese el nombre");
}



// Leer e imprimir los datos:
for(let i=0; i<arregloAprendices.length; i++){
    console.log(arregloAprendices[i])
}

