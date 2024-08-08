// Defino los arreglos
let ListadoAprendices = [];
let ListadoProgramas = [];

// Función de inicio
const start = () => {
  let opcionStart = 0;
  let opcionAprendices = 0;
  do {
    opcionStart = parseInt(
      prompt(`Bienvenido a SARA 
            Sistema Automatizado de Registro de Aprendices
            
            1. Aprendices
            2. Programas
            3. Salir`)
    );

    switch (opcionStart) {
      case 1:
        do {
            opcionAprendices = parseInt(
              prompt(`Bienvenido a SARA 
                    Sistema Automatizado de Registro de Aprendices
                    
                    1. Registro
                    2. Listado de aprendices
                    3. Actualización de aprendiz
                    4. Anular matricula del aprendiz
                    5. Salir`)
            );
        
            switch (opcionAprendices) {
              case 1:
                RegistroAprendiz();
                break;
              case 2:
                listadoTotalAprendices();
                break;
              case 3:
                ActualizarDatosAprendiz()
                break;
              default:
                break;
            }
          } while (opcionAprendices != 5);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }
  } while (opcionStart != 3);
};




/*
----------------------------------------------
METODOS O FUNCIONES
----------------------------------------------
*/ 


// METODOS DEL APRENDIZ

// REGISTRO
function RegistroAprendiz(){
    const cantidadAprendiz = parseInt(prompt(`¿Cuántos aprendices desea registrar?`));

    for (let i = 0; i < cantidadAprendiz; i++) {
        
        let documento = prompt("Ingrese el documento de identidad : " + (i+1))
        let nombre = prompt("Ingrese el nombre : " + (i+1))
        let apellidos = prompt("Ingrese los apellidos : " + (i+1))
        let sexo = prompt("Ingrese el sexo : " + (i+1))
        let programa = prompt("Ingrese el programa : " + (i+1))
        let trimestre = prompt("Ingrese el trimestre : " + (i+1))
        let direccion = prompt("Ingrese la direccion : " + (i+1))
        let estadoPrograma = true;

        let datosAprendiz = {
            documento,
            nombre,
            apellidos,
            sexo,
            programa,
            trimestre,
            direccion,
            estadoPrograma,
        }

        ListadoAprendices.push(datosAprendiz)
        
    }
}


// Listado
function listadoTotalAprendices(){
    let listadoTotal = "";
    ListadoAprendices.forEach(element => {
        listadoTotal += 
        `
        Documento: ${element.documento}
        Nombre: ${element.nombre}
        Apellidos: ${element.apellidos}
        Sexo: ${element.sexo}
        Programa: ${element.programa}
        Trimestre: ${element.trimestre}
        Dirección: ${element.direccion}
        Estado del aprendiz: ${element.estadoPrograma ? 'APROBADO' : 'NO APROBADO'}
        
        -----------------------------------------------
        `
    });

    alert(`APRENDICES REGISTRADOS
        ${listadoTotal}`)
}


// Buscar Aprendices.
function ActualizarDatosAprendiz(){

    // Aprendiz por busqueda de documento
    if(ListadoAprendices.length < 1){
        alert("No tienes aprendices registrados")
    }else{
        let documento = prompt("Ingrese el documento del aprendiz a actualizar.")
        let i = 0;
        ListadoAprendices.forEach(element => {
            if(documento == element.documento){
                alert("Lo encontré "+element.nombre )
            }
            i++ ;
        });

    }
        


}







// Arrancamos el proyecto
start()