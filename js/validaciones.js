var nombres = document.getElementById("Nombres");
var email = document.getElementById("email");
var contra = document.getElementById("password");
var contraC = document.getElementById("passwordC");
var nacimiento = document.getElementById("FN");
var tarjeta = document.getElementById("tarjeta");
var numero = document.getElementById("numero")
var nit = document.getElementById("nit");
var out = document.getElementById("out");
var btn = document.getElementById("btn");
var id;
var letra;
var letra2;
var fecha = new Date()
var ano = fecha.getFullYear();
class Miembro{
    constructor(){
        this.nombres = "";
        this.email = "";
        this.contra = "";
        this.contraC = "";    
        this.nacimiento = "";
        this.tarjeta="";
        this.nit="";
        this.numero="";
    }
    validarnomape(nombres){ 
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓ]{1,30}[ ][a-zA-ZáéíóúÁÉÍÓÚ]{1,30}$');
        if (nombres == null || nombres== "" || !pattern.test(nombres)) { 
        return false; 
        }else{
        return true
        }
    }
    setEmail(email){
        if(this.validarEmail(email)){
            this.email = email;
        }else{
            alert("Error al ingresar el email.");
        }
    }
    setContra(contra, contraC){
        if(this.validarContra(contra, contraC)){
            this.contra = contra;
            this.contraC = contraC; 
        }else{
            alert("Error al ingresar la Contraseña");
        }
    }
    setNacimiento(Fecha){
        if(this.validarFecha(Fecha)){
            this.nacimientom = Fecha;
            
        }else{
            alert("Error al ingresar la fecha");
        }
    }
    validarEmail(email) {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
            return true;
        } else {
            return false;
        }
    }
    validarContra(contra, contraC){
        if(contra.length >= 8){
            if(contraC == contra){
                return true;
            }
            return false;
        }
        return false;
    }
    validarFecha(fecha){
    var pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    
        if (fecha == null || fecha == "" || !pattern.test(fecha)) {
            return false;
        }
            return true
    }
    validarnit(nit){ 
        var pattern = new RegExp('^[0-9]{4}-[0-9]{6}-[0-9]{4}-[0-9]{1}$'); 
        if (nit == null || nit == "" || !pattern.test(nit)) { 
        return false; 
        } else{
            return true
        }
    }
    validartarjeta(tarjeta){ 
        var pattern = new RegExp('^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$'); 
        if (tarjeta == null || tarjeta == "" || !pattern.test(tarjeta)) { 
        return false; 
        } else{
        return true
        }
    }
    validarnumero(numero){ 
        var pattern = new RegExp('^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$'); 
        if (numero == null || numero == "" || !pattern.test(numero)) { 
        return false; 
        } else{
        return true
        }
    }

    
}

btn.addEventListener("click",function(){
    var obj = new Miembro();
    obj.setNombres(nombres.value);
    obj.setEmail(email.value)
    obj.setContra(contra.value, contraC.value);
    obj.setNacimiento(nacimiento.value);
    obj.validarnit(nit.value);
    obj.validartarjeta(tarjeta.value);
});