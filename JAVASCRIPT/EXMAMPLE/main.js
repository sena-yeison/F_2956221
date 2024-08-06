let aprendices = [
    {nombre, apellido, email}
];
let ciudades = [
    {nombre, departamento, pais}
];

function mostarMenu () {
            alert("Bienveido al sistema.")

            let opcion = parseInt(prompt(`1. Aprendices
                2. Ciudad
                3. Salir`))  
            
        return opcion        
}



function registrarCiudad (){
    let nombreCiudad = prompt("Ingrese el nombbre de la ciudad: ")
    let departamento = prompt ("Ingrese el nombre del departamento: ")
    let pais = prompt ("Ingree el nombre del pais: ")

    ciudades.push ({nombreCiudad, departamento, pais});

    alert = ("Registro exitoso")
}

function registrarAprendices () {
        let nombreAprendiz = prompt("Digite su nombre: ")
        let apellido = prompt("Digite su apellido: ")
        let email = prompt("Ingrese su Email: ")

        aprendices.push ({nombreAprendiz, apellido, email});

        alert = ("Registro exitoso")
}

function listarA () {
        if (aprendices.length < 1 ){
            alert  ("La lista esta vacia ")
        }

        else{
            for (let aprendiz of aprendices) {
                alert (`Nombre: ${aprendiz.nombreAprendiz}
                    Apellido: ${aprendiz.apellido}
                    Email: ${aprendiz.email}`)
            }
        }
}

function listarC () {
    if (ciudades.length < 1 ){
        alert  ("La lista esta vacia ")
    }

    else{
        for (let ciudad of ciudades) {
            alert (`Nombre: ${ciudad.nombreCiudad}
                Departamento: ${ciudad.departamento}
                Pais: ${ciudad.pais}`)
        }
    }
}

do {
    let Option = mostarMenu();
    switch (Option) {
        case 1:
            do {
                let opcionAprendices = parseInt(
                    prompt(`MENU APRENDICES
                        1. REGISTRAR
                        2. LISTA APRENDICES
                        3. SALIR
                        
                        ELIGA LA OPCION QUE DESEE: `)
                    
                )
                switch (opcionAprendices) {
                    case 1:
                        registrarAprendices()
                        break;
                    case 2:
                        listarA()
                
                    default:
                        break;
        case 2:
            let opcionCiudades = parseInt(
                prompt(`MENU CUIDADES
                    1. REGISTRAR CIUDADES
                    2. LISTAR CIUDADES
                    3. SALIR
                    
                    INGRESE LA OPCION QUE DESEE: `)
                    
            )
            switch (opcionCiudades) {
                case 1:
                    registrarCiudad()
                    
                    break;
                case 2:
                    listarC()
                    break;
                case 3:
                    alert("HAS SALIDO AL MENU PRINCIPAL CORRECTAMENTE")
                    break
                
            
                default:
                    break;
            }
                }
                
            } while (opcionAprendices != 3);
                registrarAprendices();
            break;
        case 2:
                registrarCiudad();
            break;
        case 3:
                alert("HAS SALIDO EXITOSAMENTE DEL MENU")
            break;
    
        default:
            break;
    }
    
} while (option != 3);



