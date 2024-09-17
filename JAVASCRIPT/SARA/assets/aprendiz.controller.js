// Defino los arreglos
let ListadoAprendices = [];
let ListadoProgramas = [{ codigo: 133241242, nombre: "ADSO" }];

// Listado de aprendiz
function listadoTotalAprendices() {
  let tbody = document.getElementById("tbody-table");
  tbody.innerHTML = "";

  ListadoAprendices.forEach((element, index) => {
    let filaTr = document.createElement("tr");
    filaTr.innerHTML = `
                        <td>${index}</td>
                        <td>${element.documento}</td>
                        <td>${element.nombre}</td>
                        <td>${element.programa}</td>
                        <td>${element.direccion}</td>
                        <td><button class="btn btn-${element.estadoPrograma ? "success" : "danger"}">
                            ${element.estadoPrograma ? "Activo" : "Inactivo"}</button>
                        </td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button onclick="verDatosAprendiz(${index}, 1)" data-bs-toggle="modal" data-bs-target="#actualizacionAprendiz" type="button" class="btn btn-primary">Ver</button>
                                <button data-bs-toggle="modal" data-bs-target="#actualizacionAprendiz" type="button" class="btn btn-success">Editar</button>
                                <button onclick="EliminarDatosAprendiz(${index})" type="button" class="btn btn-danger">Eliminar</button>
                              </div>
                        </td>`;

    tbody.appendChild(filaTr);
  });
}

listadoTotalAprendices();


function verDatosAprendiz(id, process){
    let documento = document.getElementById("documentoVer").value = ListadoAprendices[id].documento;
    let nombre = document.getElementById("nombreVer").value  = ListadoAprendices[id].nombre;
    let apellidos = document.getElementById("apellidosVer").value  = ListadoAprendices[id].apellidos;
    let sexo = document.getElementById("sexoVer").value  = ListadoAprendices[id].sexo;
    let programa = document.getElementById("programaVer").value  = ListadoAprendices[id].programa;
    let trimestre = document.getElementById("trimestreVer").value  = ListadoAprendices[id].trimestre;
    let direccion = document.getElementById("direccionVer").value  = ListadoAprendices[id].direccion;
    // let estadoPrograma = false;
}


// Registro de aprendiz
function RegistroAprendiz() {
  if (ListadoProgramas.length < 1) {
    errorAlert("No tienes programas registrados");
  } else {
    let documento = document.getElementById("documento").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let sexo = document.getElementById("sexo").value;
    let programa = document.getElementById("programa").value;
    let trimestre = document.getElementById("trimestre").value;
    let direccion = document.getElementById("direccion").value;
    let estadoPrograma = false;

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
      ListadoAprendices.push(datosAprendiz);
      successAlertRegister("Aprendiz");
      clearFor();
      listadoTotalAprendices();
  }
}


function validatorDocumentExisting(){
  let documento = document.getElementById("documento").value;

  let userExisting = false;
  ListadoAprendices.forEach((element, index) => {
    if (documento == element.documento) {
      userExisting = true;
    }
  });
  if(userExisting){
    errorAlert("El aprendiz ya esta registrado");
      clearFor();
  }
}

function validatorLength(){
  let documento = document.getElementById("documento").value;
  if (documento.length > 10) {
    errorAlert("Ha sobrepasado la longitud del dcumento");
    document.getElementById("documento").value="";
  }
  return true;
}


function clearFor() {
  document.getElementById("documento").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("programa").value = "";
  document.getElementById("trimestre").value = "";
  document.getElementById("direccion").value = "";
}

// actualizar Aprendices.
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







// Eliminar aprendices
function EliminarDatosAprendiz(id) {
      let nombre = ListadoAprendices[id].nombre
      ListadoAprendices.splice(id, 1);
      successAlertDelete(nombre)
      listadoTotalAprendices();
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
