//comprobamos la vinculación del archivo js 
//console.log("Archivo vinculado");

// para comentar y descomentar líneas de código: Ctrl + ]}` - (llaves/corchete)
// para las baksticks: AltGr + ]}`


//Validaciones del formulario

const usuarioNombre = document.querySelector("[name=nombre]");
const usuarioMascota = document.querySelector("[name=nombre-mascota]");
const usuarioEmail = document.querySelector("[name=email]");
const usuarioTel = document.querySelector("[name=telefono]");
const usuarioProvincia = document.querySelector("[name=provincia]");
const usuarioConsulta = document.querySelector("[name=consulta]")
const selectConocernos = document.querySelector("[name=conocernos]");

//comprobamos los input en la consola
//console.log(usuarioNombre, usuarioMascota, usuarioEmail, usuarioTel, usuarioProvincia);

// verificamos que el campo no este vacío a traves de una función
const validarCampoVacio = (e) => {
    const campo = e.target;
    const campoValor = e.target.value; // e = evento, target = campo usuarioNombre, value = el valor que recibe ese campo 
    if (campoValor === "") {
        //console.log ("Completar nombre y apellido");
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error"); // nextElementSibling (es el siguiente elemento hermano), classList.add (le agregamos una clase)
        campo.nextElementSibling.innerText = "Completar este campo"; //a ese elemento le agregamos un texto
        // otra opción es: campo.nextElementSibling.innerText = `${campo.name} es obligatorio`;
        
    } else {
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
};

// validamos que el campo EMAIL este correctamente escrito
const validarEmail = (e) => {
    const campo = e.target;
    const campoValor = e.target.value; 
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (campoValor.trim().length > 5 && !emailRegex.test(campoValor)) {
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error"); 
        campo.nextElementSibling.innerText = "Ingrese un mail válido"; 
        
    } else {
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}

// validar el núm de TELÉFONO 
const validarTel = (e) => {
    const campo = e.target;
    const campoValor = e.target.value;
    const telNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ( (campoValor > 10 || campoValor < 13) && !telNum.test(campoValor) ) {
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error"); 
        campo.nextElementSibling.innerText = "Número telefónico inválido"
    } else {
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}

/* Validar SELECT "Cómo nos conociste..." */
const validarSelect = (e) => {
    const campo = e.target;
    const campoValor = e.target.value;
    if (campoValor == "default" ) {
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error"); 
        campo.nextElementSibling.innerText = "Seleccione una opción";
    } else {
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}


// validación del FORMULARIO


usuarioNombre.addEventListener("blur", validarCampoVacio);
usuarioMascota.addEventListener("blur", validarCampoVacio);
usuarioEmail.addEventListener("blur", validarCampoVacio); 
usuarioProvincia.addEventListener("blur", validarCampoVacio);
usuarioConsulta.addEventListener("blur", validarCampoVacio);


usuarioEmail.addEventListener("input", validarEmail);

usuarioTel.addEventListener("input", validarTel);

selectConocernos.addEventListener("blur", validarSelect);