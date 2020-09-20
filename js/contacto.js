var Nombre = document.getElementById('Name');
var Correo = document.getElementById('Email');
var Mensaje = document.getElementById('Message');

function Letras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " aábcdeéfghiíjklmnñoópqrstuúvwxyz";
    especiales = [8, 13];
    tecla_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert('Sólo se permiten letras');
        return false;
    }
}

document.getElementById('Email').addEventListener('input', function () {
    campo = event.target;
    valido = document.getElementById('emailOK');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        valido.innerText = "Correo válido ✔";
    } else {
        valido.innerText = "Correo no válido ✘";
    }
});

document.getElementById('submitBtn').addEventListener("click", function () {
    if (Nombre.value.length == 0) {//Validación para que no queden los campos vacíos
        alert('Debe llenar el campo del nombre');
        return false;
    } else if (Correo.value.length == 0) {//Validación para que no queden los campos vacíos
        alert('Debe llenar el campo del correo');
        return false;
    } else if (Mensaje.value.length == 0) {//Validación para que no queden los campos vacíos
        alert('Debe llenar el campo del mensaje');
        return false;
    } else {
        alert('Su mensaje fue enviado correctamente');
    }
});