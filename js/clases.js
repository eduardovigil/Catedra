class Usuario {
    constructor(array = null) {
        if (array != null) {
            this.id = array.id;
            this.nombres = array.nombres;
            this.email = array.email;
            this.contrasena = array.contrasena;
            this.nacimiento = array.nacimiento;
            this.direccion = array.direccion;
            this.tarjeta = array.tarjeta;
            this.nit = array.nit;
            this.dui = array.dui;
            this.telefono = array.telefono;
            this.first = array.first;
        }
    }
    //ID
    setID(id) {
        this.id = id;
    }
    get Id() {
        return this.id;
    }

    //Nombres
    setNombres(obj) {
        obj.style.border = "none";
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓñÑ]{1,30}[ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]{1,30}[ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]{1,30}[ ][a-zA-ZáéíóúÁÉÍÓÚñÑ]{1,30}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.nombres = obj.value;
            return true;
        }
    }
    get Nombres() {
        return this.nombres;
    }

    //Direción
    setDireccion(obj) {
        obj.style.border = "none";
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓñÑ]{1,30}-[a-zA-ZáéíóúÁÉÍÓñÑ]{1,30}-[a-zA-ZáéíóúÁÉÍÓñÑ0-9]{1,30}-[a-zA-ZáéíóúÁÉÍÓñÑ]{1,30}-[#][0-9]{2}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.direccion = obj.value;
            return true;
        }
    }
    get Direccion() {
        return this.direccion;
    }

    //Email
    setEmail(obj) {
        obj.style.border = "none";
        var pattern = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.email = obj.value;
            return true;
        }
    }
    get Email() {
        return this.email;
    }

    //Contraseña
    setContrasena(obj1, obj2) {
        var state = true;
        obj1.style.border = "none";
        obj2.style.border = "none";
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%-*?&])([A-Za-z\d$@$!%-*?&]|[^ ]){8,15}$/;
        if (obj1.value == null || obj1.value == "" || !pattern.test(obj1.value)) {
            obj1.style.border = "2px solid red";
            state = false;
        }
        if (obj2.value == null || obj2.value == "" || !pattern.test(obj2.value)) {
            obj2.style.border = "2px solid red";
            state = false;
        } else {
            if (obj1.value == obj2.value) {
                this.contrasena = obj1.value;
                state = true;
            } else {
                obj1.style.border = "2px solid red";
                obj2.style.border = "2px solid red";
                state = false;
            }
        }
        return state;
    }
    get Contrasena() {
        return this.contrasena;
    }

    //Nacimiento
    setNacimiento(obj) {
        obj.style.border = "none";
        var pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.nacimiento = obj.value;
            return true;
        }
    }
    get Nacimiento() {
        return this.nacimiento;
    }

    //DUI
    setDui(obj) {
        obj.style.border = "none";
        var pattern = new RegExp('^[0-9]{8}-[0-9]{1}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.dui = obj.value;
            return true;
        }
    }
    get Dui() {
        return this.dui;
    }

    //NIT
    setNit(obj) {
        obj.style.border = "none";
        var pattern = new RegExp('^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.nit = obj.value;
            return true;
        }
    }
    get Nit() {
        return this.nit;
    }


    //Telefono
    setTelefono(obj) {
        obj.style.border = "none";
        var pattern = new RegExp('^([0-9]{4}[ ][0-9]{4}|[0-9]{4}-[0-9]{4}|[0-9]{4}[0-9]{4})$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.telefono = obj.value;
            return true;
        }
    }
    get Telefono() {
        return this.telefono;
    }
    //First
    setFirst(state) {
        this.first = state;
    }
    get First() {
        return this.first;
    }

}

class Efectivo {
    constructor(array = null) {
        if (array != null) {
            this.id = array.id;
            this.user_id = array.user_id;
            this.saldo = array.saldo;
        }
    }

    //ID
    setId(id) {
        this.id = id;
    }
    get Id() {
        return this.id;
    }

    //User_ID
    setUser_Id(id) {
        this.user_id = id;
    }
    get User_Id() {
        return this.user_id;
    }

    //Saldo
    setSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.saldo = obj.value;
            return true;
        }
    }
    get Saldo() {
        return this.saldo;
    }

    //Agregar Saldo
    agregarSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.saldo = parseFloat(this.saldo) + parseFloat(obj.value);
            return true;
        }
    }

    //Restar Saldo
    restarSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            if (this.saldo - parseFloat(obj.value) > 0) {
                this.saldo -= parseFloat(obj.value);
                return true;
            } else {
                return false;
            }
        }
    }
}

class Cuenta {
    constructor(array = null) {
        if (array != null) {
            this.id = array.id;
            this.user_id = array.user_id;
            this.banco = array.banco;
            this.nocuenta = array.nocuenta;
            this.saldo = array.saldo;
        }
    }

    //ID
    setId(id) {
        this.id = id;
    }
    get Id() {
        return this.id;
    }

    //User_ID
    setUser_Id(id) {
        this.user_id = id;
    }
    get User_Id() {
        return this.user_id;
    }

    //Banco
    setBanco(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓ .]{1,100}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.banco = obj.value;
            return true;
        }
    }
    get Banco() {
        return this.banco;
    }

    //NoCuenta
    setNoCuenta(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{3,17}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.nocuenta = obj.value;
            return true;
        }
    }
    get NoCuenta() {
        return this.nocuenta;
    }

    //Saldo
    setSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.saldo = obj.value;
            return true;
        }
    }
    get Saldo() {
        return this.saldo;
    }

    //Agregar Saldo
    agregarSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.saldo = parseFloat(this.saldo) + parseFloat(obj.value);
            return true;
        }
    }

    //Restar Saldo
    restarSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            if (this.saldo - parseFloat(obj.value) > 0) {
                this.saldo -= parseFloat(obj.value);
                return true;
            } else {
                return false;
            }
        }
    }
}

class Tarjeta {
    constructor(array = null) {
        if (array != null) {
            this.id = array.id;
            this.user_id = array.user_id;
            this.banco = array.banco;
            this.notarjeta = array.notarjeta;
            this.saldo = array.saldo;
            this.interes = array.interes;
            this.fecha = array.fecha;
        }
    }

    //ID
    setId(id) {
        this.id = id;
    }
    get Id() {
        return this.id;
    }

    //User_ID
    setUser_Id(id) {
        this.user_id = id;
    }
    get User_Id() {
        return this.user_id;
    }

    //Banco
    setBanco(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓ .]{1,100}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.banco = obj.value;
            return true;
        }
    }
    get Banco() {
        return this.banco;
    }

    //NoTarjeta
    setNoTarjeta(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.notarjeta = obj.value;
            return true;
        }
    }
    get NoTarjeta() {
        return this.notarjeta;
    }

    //Saldo
    setSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.saldo = obj.value;
            return true;
        }
    }
    get Saldo() {
        return this.saldo;
    }

    //Interes
    setInteres(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,2}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.interes = obj.value;
            return true;
        }
    }
    get Interes() {
        return this.interes;
    }

    //Fecha
    setFecha(obj1, obj2) {
        obj1.style.border = "1px solid #ced4da";
        obj2.style.border = "1px solid #ced4da";
        var text = obj2.value + "/" + obj1.value;
        var pattern = new RegExp('^(3[0-1]|[1-2][0-9]|[0]{1}?[1-9]{1})/(1[0-2]|0?[1-9]{1})$');
        if (text == null || text == "/" || !pattern.test(text)) {
            obj1.style.border = "2px solid red";
            obj2.style.border = "2px solid red";
            return false;
        } else {
            this.fecha = text;
            return true;
        }
    }
    get Fecha() {
        return this.fecha;
    }

    //Agregar Saldo
    agregarSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.saldo = parseFloat(this.saldo) + parseFloat(obj.value);
            return true;
        }
    }

    //Restar Saldo
    restarSaldo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            if (this.saldo - parseFloat(obj.value) > 0) {
                this.saldo -= parseFloat(obj.value);
                return true;
            } else {
                return false;
            }
        }
    }
}

class Ingreso {
    constructor(array = null) {
        if (array != null) {
            this.id = array.id;
            this.user_id = array.user_id;
            this.tipo = array.tipo;
            this.cuenta_id = array.cuenta_id;
            this.fecha = array.fecha;
            this.motivo = array.motivo;
            this.monto = array.monto;
            this.saldoanterior = array.saldoanterior;
        }
    }

    //ID
    setId(id) {
        this.id = id;
    }
    get Id() {
        return this.id;
    }

    //User_ID
    setUser_Id(id) {
        this.user_id = id;
    }
    get User_Id() {
        return this.user_id;
    }

    //Tipo
    setTipo(obj) {
        var pattern = new RegExp('^(Efectivo|Cuenta|Tarjeta)$');
        if (obj == null || obj == null || !pattern.test(obj)) {
            return false;
        } else {
            this.tipo = obj;
        }
    }
    get Tipo() {
        return this.tipo;
    }

    //Cuenta_Id
    setCuenta_Id(id) {
        this.cuenta_id = id;
    }
    get Cuenta_Id() {
        return this.cuenta_id;
    }

    //Fecha
    setFecha(value) {
        var pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        if (value == null || value == "" || !pattern.test(value)) {
            return false;
        } else {
            this.fecha = value;
            return true;
        }
    }
    get Fecha() {
        return this.fecha;
    }

    //Motivo
    setMotivo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓñÑ .,]{1,100}$');
        if (obj.value == null || obj.value == null || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.motivo = obj.value;
            return true;
        }
    }
    get Motivo() {
        return this.motivo;
    }

    //Monto
    setMonto(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.monto = obj.value;
            return true;
        }
    }
    get Monto() {
        return this.monto;
    }

    //Saldo Anterior
    setSaldoAnterior(obj) {
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj == null || obj == "" || !pattern.test(obj)) {
            return false;
        } else {
            this.saldoanterior = obj;
            return true;
        }
    }
    get SaldoAnterior() {
        return this.saldoanterior;
    }
}

class Gasto {
    constructor(array = null) {
        if (array != null) {
            this.id = array.id;
            this.user_id = array.user_id;
            this.tipo = array.tipo;
            this.cuenta_id = array.cuenta_id;
            this.fecha = array.fecha;
            this.motivo = array.motivo;
            this.monto = array.monto;
            this.saldoanterior = array.saldoanterior;
        }
    }

    //ID
    setId(id) {
        this.id = id;
    }
    get Id() {
        return this.id;
    }

    //User_ID
    setUser_Id(id) {
        this.user_id = id;
    }
    get User_Id() {
        return this.user_id;
    }

    //Tipo
    setTipo(obj) {
        var pattern = new RegExp('^(Efectivo|Cuenta|Tarjeta)$');
        if (obj == null || obj == null || !pattern.test(obj)) {
            return false;
        } else {
            this.tipo = obj;
        }
    }
    get Tipo() {
        return this.tipo;
    }

    //Cuenta_Id
    setCuenta_Id(id) {
        this.cuenta_id = id;
    }
    get Cuenta_Id() {
        return this.cuenta_id;
    }

    //Fecha
    setFecha(value) {
        var pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        if (value == null || value == "" || !pattern.test(value)) {
            return false;
        } else {
            this.fecha = value;
            return true;
        }
    }
    get Fecha() {
        return this.fecha;
    }

    //Motivo
    setMotivo(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[a-zA-ZáéíóúÁÉÍÓñÑ .,/]{1,100}$');
        if (obj.value == null || obj.value == null || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.motivo = obj.value;
            return true;
        }
    }
    get Motivo() {
        return this.motivo;
    }

    //Monto
    setMonto(obj) {
        obj.style.border = "1px solid #ced4da";
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj.value == null || obj.value == "" || !pattern.test(obj.value)) {
            obj.style.border = "2px solid red";
            return false;
        } else {
            this.monto = obj.value;
            return true;
        }
    }
    get Monto() {
        return this.monto;
    }
    //Saldo Anterior
    setSaldoAnterior(obj) {
        var pattern = new RegExp('^[0-9]{1,}(.{0,1}[0-9]{0,2})?$');
        if (obj == null || obj == "" || !pattern.test(obj)) {
            return false;
        } else {
            this.saldoanterior = obj;
            return true;
        }
    }
    get SaldoAnterior() {
        return this.saldoanterior;
    }
}