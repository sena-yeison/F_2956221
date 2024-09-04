// Defino los arreglos
let ListadoAprendices = [];
let ListadoProgramas = [];

// Función de inicio
const start = () => {
  let opcionStart = 0;
  let opcionAprendices = 0;
  let opcionActualizacionAprendices = 0;
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
                    4. Eliminar aprendiz
                    5. Anular aprendiz
                    6. Salir`)
          );

          switch (opcionAprendices) {
            case 1:
              RegistroAprendiz();
              break;
            case 2:
              listadoTotalAprendices();
              break;
            case 3:
              ActualizarDatosAprendiz();
              break;
            case 4:
              EliminarDatosAprendiz();
              break;
            case 5:
              AnularAprendiz();
              break;
            case 6:
              break;
            default:
              break;
          }
        } while (opcionAprendices != 6);
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

// Registro de aprendiz
function RegistroAprendiz() {

  if(ListadoProgramas.length < 1){
  errorAlert('No tienes programas registrados');
  }else{
      let documento = document.getElementById('documento').value;
      let nombre = document.getElementById('nombre').value;
      let apellidos = document.getElementById('apellidos').value;
      let sexo = document.getElementById('sexo').value;
      let programa = document.getElementById('programa').value;
      let trimestre = document.getElementById('trimestre').value;
      let direccion = document.getElementById('direccion').value;
      let estadoPrograma = true;
  
      let datosAprendiz = {
        documento,
        nombre,
        apellidos,
        sexo,
        programa,
        trimestre,
        direccion,
        estadoPrograma
      };

      console.log(datosAprendiz)
  
      ListadoAprendices.push(datosAprendiz);

      clearRegisterAprendiz();
      successAlert('Aprendiz')
      };
}

function clearRegisterAprendiz(){
  document.getElementById('documento').value = "";
  document.getElementById('nombre').value = "";
  document.getElementById('apellidos').value = "";
  document.getElementById('sexo').value = "";
  document.getElementById('programa').value = "";
  document.getElementById('trimestre').value = "";
  document.getElementById('direccion').value = "";
}

// Listado de aprendiz
function listadoTotalAprendices() {
  let listadoTotal = "";
  ListadoAprendices.forEach((element) => {
    listadoTotal += `
        Documento: ${element.documento}
        Nombre: ${element.nombre}
        Apellidos: ${element.apellidos}
        Sexo: ${element.sexo}
        Programa: ${obtenerNombrePrograma(element.programa)}
        Trimestre: ${element.trimestre}
        Dirección: ${element.direccion}
        Estado del aprendiz: ${
          element.estadoPrograma ? "APROBADO" : "NO APROBADO"
        }
        
        -----------------------------------------------
        `;
  });

  alert(`APRENDICES REGISTRADOS
        ${listadoTotal}`);
}

// Buscar Aprendices.
function ActualizarDatosAprendiz() {
  // Aprendiz por busqueda de documento
  let posicionSeleccionada = true;

  if (ListadoAprendices.length < 1) {
    alert("No tienes aprendices registrados");
  } else {
    let documento = prompt("Ingrese el documento del aprendiz a actualizar.");
    let i = 0;
    let dataUsuarios = " Código  |  Documento    |   Nombre y apellidos \n";
    ListadoAprendices.forEach((element) => {
      if (documento == element.documento) {
        dataUsuarios += `     ${i}    |    ${element.documento}   |   ${element.nombre} ${element.apellidos}`;
      }
      i++;
    });

    alert(dataUsuarios);
    // do {
    let item = parseInt(prompt("Digite el codigo del aprendiz"));
    //   if (item > ListadoAprendices.length) {
    //     alert("Ese dato no existe");
    //   } else {
    //     posicionSeleccionada = false;
    //   }
    // } while (posicionSeleccionada);

    do {
      opcionActualizacionAprendices = parseInt(
        prompt(`Actualización de datos 
                
                1. Documento
                2. Nombre
                3. Apellidos
                4. Sexo
                5. Programa
                6. Trimestre
                7. Estado
                8. Salir`)
      );

      switch (opcionActualizacionAprendices) {
        case 1:
          ListadoAprendices[item].documento = prompt(
            "Ingrese el nuevo documento"
          );
          break;
        case 2:
          ListadoAprendices[item].nombre = prompt("Ingrese el nuevo nombre");
          break;
        case 3:
          ListadoAprendices[item].apellidos = prompt(
            "Ingrese el nuevo apellido"
          );
          break;
        case 4:
          ListadoAprendices[item].sexo = prompt("Ingrese el nuevo sexo");
          break;
        case 5:
          ListadoAprendices[item].programa = prompt(
            "Ingrese el nuevo programa"
          );
          break;
        case 6:
          ListadoAprendices[item].trimestre = prompt(
            "Ingrese el nuevo trimestre"
          );
          break;
        case 7:
          ListadoAprendices[item].estadoPrograma = prompt(
            "Ingrese el nuevo estado"
          );
          break;
        default:
          break;
      }
    } while (opcionActualizacionAprendices != 8);
  }
}

// Eliminar un usuario e arreglo.
function EliminarDatosAprendiz() {
  if (ListadoAprendices.length < 1) {
    alert("No tienes aprendices registrados");
  } else {
    let documento = prompt("Ingrese el documento del aprendiz a actualizar.");
    let i = 0,
      posicion = 0;
    let dataUsuarios = " Código  |  Documento    |   Nombre y apellidos \n";
    ListadoAprendices.forEach((element) => {
      if (documento == element.documento) {
        dataUsuarios += `     ${i}    |    ${element.documento}   |   ${element.nombre} ${element.apellidos}`;
        posicion = i;
      }
      i++;
    });

    alert(dataUsuarios);
    let respuesta = parseInt(
      prompt(`¿Estás seguro de eliminar al aprendíz?
      1. Si
      2. No`)
    );

    if (respuesta == 1) {
      ListadoAprendices.splice(posicion, 1);
    }
  }
}

// Inactivar al usuario
function AnularAprendiz() {
  if (ListadoAprendices.length < 1) {
    alert("No tienes aprendices registrados");
  } else {
    let documento = prompt("Ingrese el documento del aprendiz a actualizar.");
    let i = 0,
      posicion = 0;
    let dataUsuarios = " Código  |  Documento    |   Nombre y apellidos \n";
    ListadoAprendices.forEach((element) => {
      if (documento == element.documento) {
        dataUsuarios += `     ${i}    |    ${element.documento}   |   ${element.nombre} ${element.apellidos}`;
        posicion = i;
      }
      i++;
    });

    alert(dataUsuarios);
    let respuesta = parseInt(
      prompt(`¿Estás seguro de anular al aprendíz?
      1. Si
      2. No`)
    );

    if (respuesta == 1) {
      ListadoAprendices[posicion].estadoPrograma = false;
    }
  }
}





// METODOS DEL PROGRAMA

// Retorno de listado de aprendicez
function listadoPrograma() {
  let programas = "";
  for (let i = 0; i < ListadoProgramas.length; i++) {
    programas += `Código: ${ListadoProgramas[i].codigo} - Nombre :${ListadoProgramas[i].nombre}\n`;
  }
  return programas;
}

// Impresion del nombrel programa
function obtenerNombrePrograma(id){

  // Retorno  por código del programa
  let nombrePrograma;
  ListadoProgramas.forEach(element=>{
    if(id == element.codigo){
      nombrePrograma = element.nombre
    }
  })
  return nombrePrograma
 
  // Retorno por posición del programa en el arreglo
  // return ListadoProgramas[id].nombre;
}

// Arrancamos el proyecto
// start();



function guardarDatos(){
  alert("Hola Mundo");
}