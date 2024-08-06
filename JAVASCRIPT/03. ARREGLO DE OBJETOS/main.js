// Varibales globales
let arregloObjetos = [];

// Definiemos el objeto
const start = () => {
  opc = 0;
  opcUpdate = 0;
  do {
    opc = parseInt(
      prompt(`1. Registro
            2. Listado
            3. Actualizar
            4. Salir`)
    );

    switch (opc) {
      case 1:
        registro();
        break;
      case 2:
        listado();
        break;
      case 3:
        do {
          opcUpdate = parseInt(
            prompt(`1. Nombre
                          2. Apellidos
                          3. Dirección
                          4. Telefono
                          5. Estado
                          6. Salir`)
          );

          switch (opcUpdate) {
            case 1:
              break;
            case 2:
              break;
            case 3:
              break;
            case 4:
              break;
            case 5:
              break;
            case 6:
              break;
            default:
              break;
          }
        } while (opcUpdate != 6);
        actualizarDatos();
        break;
      case 4:
        alert("Adios...");
        break;
      default:
        alert("Vea mi perro, no se equivoque...");
        break;
    }
  } while (opc != 4);
};

const registro = () => {
  let cantidad = parseInt(
    prompt(`Bienvenido al registro de aprendices
        ¿Cuantos aprendices desea registrar?`)
  );

  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese el nombre");
    let apellidos = prompt("Ingrese los apelllidos");
    let direccion = prompt("Ingrese la dirección");
    let telefono = prompt("Ingrese el telefono");

    let objeto = {
      nombre: nombre,
      apellidos: apellidos,
      direccion: direccion,
      telefono: telefono,
      estado: true
    };
    arregloObjetos.push(objeto);
  }
  console.log(arregloObjetos);
};

const listado = () => {
  let i = 1;
  arregloObjetos.forEach((element) => {
    alert(`${i} : 
            Nombre: ${element.nombre}
            Apellidos: ${element.apellidos}
            Dirección: ${element.direccion}
            Telefono: ${element.telefono}
            Estado: ${element.estado ? "Activo" : "Inactivo"}
            `);
    i++;
  });
};
start();
