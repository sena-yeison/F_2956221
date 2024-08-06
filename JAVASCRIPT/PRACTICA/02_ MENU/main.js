let opcion = 0;
let opcionCiudades = 0;

// ARRAYS DE CIUDADES Y APRENDICES
let listadoCiudades = [];
let listadoAprendices = [];

const start = () => {
  alert("Sistema de Registro SRCA");

  do {
    opcion = parseInt(
      prompt(`Menú
            1. Ciudades
            2. Aprendices
            3. Salir

            ¿Qué opcion quires tomar?`)
    );

    switch (opcion) {
      case 1:
        do {
          opcionCiudades = parseInt(
            prompt(`FORMULARIO DE CIUDADES\n------------------------
                
                Menú
                1. Nueva ciudad
                2. Listado de ciudades
                3. Salir
        
                ¿Qué opcion quires tomar?`)
          );

          switch (opcionCiudades) {
            case 1:
              RegistroCiudades();
              break;
            case 2:
              ListarDatosT(listadoCiudades, "Ciudades");
              break;

            case 3:
              alert("Regresando al menu principal");
              break;

            default:
              alert("Opción errada\nIntente nuevamente");
              break;
          }
        } while (opcionCiudades != 3);
        break;

      case 2:
        do {
          OpcionesMenuPrincipal();

          switch (opcionAprendices) {
            case 1:
              RegistroAprendices();
              break;
            case 2:
              ListarAprendices();
              break;

            case 3:
              alert("Regresando al menu principal");
              break;

            default:
              alert("Opción errada\nIntente nuevamente");
              break;
          }
        } while (opcionAprendices != 3);
        break;

      case 3:
        alert("Suerte es que le digo hermano....");
        break;

      default:
        alert("Opción errada\nIntente nuevamente");
        break;
    }
  } while (opcion != 3);
};

// FUNCIONES Y/O PROCESOS

// FUNCIONES PARA CIUDADES
const RegistroCiudades = () => {
  let cantidad = parseInt(prompt(`¿Cuantas ciudades desea registrar?`)); //5
  for (let i = 0; i < cantidad; i++) {
    listadoCiudades[i] = prompt(`Ingrese el nombre de la ciudad No. ${i + 1}`);
  }
  alert("Ciudades registradas exitosamente....");
};

const ListarCiudades = () => {
  if (listadoCiudades.length < 1) {
    alert("Lo sentimos, no tienes ciudades registradas");
  } else {
    let dataciudades = "";
    for (let i = 0; i < listadoCiudades.length; i++) {
      dataciudades += `   ${i + 1} : ${listadoCiudades[i]} \n`;
    }

    alert("LISTADO DE CIUDADES\n" + dataciudades);
  }
};

// FUNCIONES PARA APRENDICES
const RegistroAprendices = () => {
  let cantidad = parseInt(prompt(`¿Cuantas aprendices desea registrar?`)); //5
  for (let i = 0; i < cantidad; i++) {
    listadoAprendices[i] = prompt(
      `Ingrese el nombre de la ciudad No. ${i + 1}`
    );
  }
  alert("Aprendices registradas exitosamente....");
};

const ListarAprendices = () => {
  if (listadoAprendices.length < 1) {
    alert("Lo sentimos, no tienes aprendices registradas");
  } else {
    let dataaprendices = "";
    for (let i = 0; i < listadoAprendices.length; i++) {
      dataaprendices += `   ${i + 1} : ${listadoAprendices[i]} \n`;
    }

    alert("LISTADO DE APRENDICES\n" + dataaprendices);
  }
};

// FUNCION GENERICA

function ListarDatosT(datas, nombrePersonalizado) {
  if (datas.length < 1) {
    alert(`Lo sentimos, no tienes ${nombrePersonalizado} registradas`);
  } else {
    let datosConcatenados = "";
    for (let i = 0; i < datas.length; i++) {
      datosConcatenados += `   ${i + 1} : ${datas[i]} \n`;
    }
    alert(`LISTADO DE ${nombrePersonalizado}\n` + datosConcatenados);
  }
}


// FUNCIONES PARA CIUDADES
const RegistroGenerico = (arreglo) => {
    let cantidad = parseInt(prompt(`¿Cuantas ciudades desea registrar?`)); //5
    for (let i = 0; i < cantidad; i++) {
      arreglo[i] = prompt(`Ingrese el nombre de la ciudad No. ${i + 1}`);
    }
    alert("Ciudades registradas exitosamente....");
  };


start();
