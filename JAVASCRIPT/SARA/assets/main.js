// Funcion de exito
function successAlert (nombre) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: nombre + " registrado exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
}



//  Funcion de error
function errorAlert(mensaje){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lo sentimos! "+mensaje,
        showConfirmButton:false,
        timer:2000
      });
}