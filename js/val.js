var efectivo = document.getElementById("efectivo");
var banco = document.getElementById("banco");
var cuenta = document.getElementById("cuenta");

class valor{
    constructor(){
        this.efectivo = "";
        this.banco = "";
        this.cuenta ="";
    }
    validarnomape(banco){ 
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓ]{1,30}[ ][a-zA-ZáéíóúÁÉÍÓÚ]{1,30}$');
        if (banco == null || banco== "" || !pattern.test(banco)) { 
        return false; 
        }else{
        return true
        }
    }
    validarnumero(efectivo){ 
        var pattern = new RegExp('^[0-9]{4}[.][0-9]{2}$'); 
        if (efectivo == null || efectivo == "" || !pattern.test(efectivo)) { 
        return false; 
        } else{
        return true
        }
    }
    validarnumero2(cuenta){ 
        var pattern = new RegExp('^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$'); 
        if (cuenta == null || cuenta == "" || !pattern.test(cuenta)) { 
        return false; 
        } else{
        return true
        }
    }
}
btn.addEventListener("click",function(){
    var obj = new Miembro();
    obj.validarnomape(banco.value);
    obj.validarnumero(efectivo.value);
    obj.validarnumero2(cuenta.value);
});