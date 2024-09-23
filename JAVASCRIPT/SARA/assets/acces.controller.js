
// Registro de aprendiz
function RegistroAprendiz() {

    let datosAprendiz = {
        documento:document.getElementById("documento").value,
        nombre:document.getElementById("nombre").value,
        apellidos:document.getElementById("apellidos").value,
        sexo:document.getElementById("sexo").value,
        programa:document.getElementById("programa").value,
        trimestre:document.getElementById("trimestre").value,
        direccion:document.getElementById("direccion").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        fotoPerfil:document.getElementById("fotoPerfil").value,
        estado:true
    };

    localStorage.setItem('acces', JSON.stringify(datosAprendiz))
    successAlertRegister("Aprendiz");
}



function accessUser(){
    let email = document.getElementById("emailUser").value;
    let password = document.getElementById("passwordUser").value;

    console.log(email)
    console.log(password)


    let dataStorage = localStorage.getItem('acces');
    dataStorage = JSON.parse(dataStorage)

    if(email == dataStorage.email && password == dataStorage.password){
        successAcces ()
        setTimeout(() => {
            window.location.replace('home.html');
        }, 1000);
    }else{
        errorAlert("Credenciales de acceso incorrectas")
        document.getElementById("emailUser").value = ""
        document.getElementById("passwordUser").value=""
    }
}

function logout(){
    

    Swal.fire({
        title: "¿Estas seguro?",
        text: "Seguro que desea cerrar sesión!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro!"
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace('index.html');
        }
      });
}