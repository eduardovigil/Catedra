
// Conexión y Sesiones


//------------------------------------------------Usuario------------------------------------------------------------
function storeUsuario(obj){
    var data = getAllUsers();
    var cadena = {"id":data.length,"nombres":obj.Nombres,"email":obj.Email,"direccion":obj.Direccion,"contrasena":obj.Contrasena,"nacimiento":obj.Nacimiento,"nit":obj.Nit,"dui":obj.Dui,"telefono":obj.Telefono,"first":obj.First};
    var state = true;
    for(i=0;i<data.length;i++){
        if(data[i].email==cadena.email){
            state = false;
            break;
        }
    }
    if(state){
        data.push(cadena);
        localStorage.setItem('users',JSON.stringify(data));
    }
    return state;
}

function getAllUsers(){
    if(localStorage.getItem('users')){
        var data = JSON.parse(localStorage.getItem('users'));
        return data;
    } else {
        return [];
    }
}

function searchUsuario(obj){
    var data = getAllUsers();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].email==obj.Email){
            state = true;
            break;
        }
    }
    var response = {};
    if(state){
        let user = new Usuario(data[i]);
        response = {"success":"Usuario Encontrado","data":user};
    } else {
        response = {"error":"No se ha encontrado ningún usuario"};
    }
    return response;
}

function updateUsuario(obj){
    var data = getAllUsers();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    data[i].email = obj.Email;
    data[i].nombres = obj.Nombres;
    data[i].contrasena = obj.Contrasena;
    data[i].nacimiento = obj.Nacimiento;
    data[i].nit = obj.Nit;
    data[i].dui = obj.Dui;
    data[i].telefono = obj.Telefono;
    data[i].first = obj.First;
    data[i].direccion = obj.Direccion;
    localStorage.setItem('users', JSON.stringify(data));
    return true;
}

function deleteUsuario(obj){    
    var data = getAllUsers();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    if(state){
        data.splice(i,1);
        localStorage.setItem('users',JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}

function setSession(obj){
    var cadena = {"id":obj.Id,"nombres":obj.Nombres,"email":obj.Email,"direccion":obj.Direccion,"contrasena":obj.Contrasena,"nacimiento":obj.Nacimiento,"nit":obj.Nit,"dui":obj.Dui,"telefono":obj.Telefono,"first":obj.First};
    sessionStorage.setItem('loged', JSON.stringify(cadena));
    location.reload();
}
function resetSession(obj){
    var cadena = {"id":obj.Id,"nombres":obj.Nombres,"email":obj.Email,"direccion":obj.Direccion,"contrasena":obj.Contrasena,"nacimiento":obj.Nacimiento,"nit":obj.Nit,"dui":obj.Dui,"telefono":obj.Telefono,"first":obj.First};
    sessionStorage.setItem('loged', JSON.stringify(cadena));
}

function getSession(){
    if(sessionStorage.getItem('loged')){
        return new Usuario(JSON.parse(sessionStorage.getItem('loged')));
    } else {
        return false;
    }
}

function clearSession(){
    sessionStorage.removeItem("loged");
    location.reload();
}

//------------------------------------------------End Usuario------------------------------------------------------------

//------------------------------------------------Efectivo------------------------------------------------------------

function storeEfectivo(obj){
    var data = getAllEfectivo();
    var cadena = {"id":data.length,"user_id":obj.User_Id,"saldo":obj.Saldo};
    data.push(cadena);
    localStorage.setItem('efectivo',JSON.stringify(data));
}
function getAllEfectivo(){
    if(localStorage.getItem('efectivo')){
        var data = JSON.parse(localStorage.getItem('efectivo'));
        return data;
    } else {
        return [];
    }
}
function searchEfectivo(obj){
    var data = getAllEfectivo();
    var i = 0;
    var state = false;
    if(obj.User_Id != null){
        var cuentas = [];
        for(i=0;i<data.length;i++){
            if(data[i].user_id==obj.User_Id){
                cuentas.push(new Efectivo(data[i]));
                state = true;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":cuentas};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    } else if(obj.Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].id==obj.Id){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":[new Efectivo(data[i])]};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    }
}
function updateEfectivo(obj){
    var data = getAllEfectivo();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    data[i].id = obj.Id;
    data[i].user_id = obj.User_Id;
    data[i].saldo = obj.Saldo;
    localStorage.setItem('efectivo', JSON.stringify(data));
    return true;
}
function deleteEfectivo(obj){
    var data = getAllEfectivo();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    if(state){
        data.splice(i,1);
        localStorage.setItem('efectivo',JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}

//------------------------------------------------End Efectivo------------------------------------------------------------

//------------------------------------------------Cuenta------------------------------------------------------------

function storeCuenta(obj){
    var data = getAllCuenta();
    var cadena = {"id":data.length,"user_id":obj.User_Id,"banco":obj.Banco,"nocuenta":obj.NoCuenta,"saldo":obj.Saldo};
    var state = true;
    for(var i=0;i<data.length;i++){
        if(data[i].nocuenta==cadena.nocuenta){
            state = false;
            break;
        }
    }
    if(state){
        data.push(cadena);
        localStorage.setItem('cuenta',JSON.stringify(data));
    }
    return state;
}
function getAllCuenta(){
    if(localStorage.getItem('cuenta')){
        return JSON.parse(localStorage.getItem('cuenta'));
    } else {
        return [];
    }
}
function searchCuenta(obj){
    var data = getAllCuenta();
    var i = 0;
    var state = false;
    if(obj.User_Id != null){
        var cuentas = [];
        for(i=0;i<data.length;i++){
            if(data[i].user_id==obj.User_Id){
                cuentas.push(new Cuenta(data[i]));
                state = true;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":cuentas};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    } else if(obj.Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].id==obj.Id){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":[new Cuenta(data[i])]};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    } else if(obj.NoCuenta != null){
        for(i=0;i<data.length;i++){
            if(data[i].nocuenta==obj.NoCuenta){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":[new Cuenta(data[i])]};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    }
}
function updateCuenta(obj){
    var data = getAllCuenta();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    data[i].id = obj.Id;
    data[i].user_id = obj.User_Id;
    data[i].banco = obj.Banco;
    data[i].nocuenta = obj.NoCuenta;
    data[i].saldo = obj.Saldo;
    localStorage.setItem('cuenta', JSON.stringify(data));
    return true;
}
function deleteCuenta(obj){
    var data = getAllCuenta();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    if(state){
        data.splice(i,1);
        localStorage.setItem('cuenta',JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}

//------------------------------------------------End Cuenta------------------------------------------------------------

//------------------------------------------------Tarjeta------------------------------------------------------------

function storeTarjeta(obj){
    var data = getAllTarjeta();
    var cadena = {"id":data.length,"user_id":obj.User_Id,"banco":obj.Banco,"notarjeta":obj.NoTarjeta,"saldo":obj.Saldo,"interes":obj.Interes,"fecha":obj.Fecha};
    var state = true;
    for(var i=0;i<data.length;i++){
        if(data[i].notarjeta==cadena.notarjeta){
            state=false;
            break;
        }
    }
    if(state){
        data.push(cadena);
        localStorage.setItem('tarjeta',JSON.stringify(data));
    }
    return state;
}
function getAllTarjeta(){
    if(localStorage.getItem('tarjeta')){
        return JSON.parse(localStorage.getItem('tarjeta'));
    } else {
        return [];
    }

}
function searchTarjeta(obj){
    var data = getAllTarjeta();
    var i = 0;
    var state = false;
    if(obj.User_Id != null){
        var cuentas = [];
        for(i=0;i<data.length;i++){
            if(data[i].user_id==obj.User_Id){
                cuentas.push(new Tarjeta(data[i]));
                state = true;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":cuentas};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    } else if(obj.Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].id==obj.Id){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":[new Tarjeta(data[i])]};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    } else if(obj.NoTarjeta != null){
        for(i=0;i<data.length;i++){
            if(data[i].notarjeta==obj.NoTarjeta){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Cuentas Encontradas","data":[new Tarjeta(data[i])]};
        } else{
            return {"error":"No se ha encontrado ninguna cuenta asociada"};
        }
    }
}
function updateTarjeta(obj){
    var data = getAllTarjeta();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    data[i].id = obj.Id;
    data[i].user_id = obj.User_Id;
    data[i].banco = obj.Banco;
    data[i].notarjeta = obj.NoTarjeta;
    data[i].saldo = obj.Saldo;
    data[i].interes = obj.Interes;
    data[i].fecha = obj.Fecha;
    localStorage.setItem('tarjeta', JSON.stringify(data));
    return true;
}
function deleteTarjeta(obj){
    var data = getAllTarjeta();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    if(state){
        data.splice(i,1);
        localStorage.setItem('tarjeta',JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}

//------------------------------------------------End Tarjeta------------------------------------------------------------

//------------------------------------------------Ingreso------------------------------------------------------------

function storeIngreso(obj){
    var data = getAllIngreso();
    var cadena = {"id":data.length,"user_id":obj.User_Id,"tipo":obj.Tipo,"cuenta_id":obj.Cuenta_Id,"fecha":obj.Fecha,"motivo":obj.Motivo,"monto":obj.Monto,"saldoanterior":obj.SaldoAnterior};
    data.push(cadena);
    localStorage.setItem('ingreso',JSON.stringify(data));
    return true;
}
function getAllIngreso(){
    if(localStorage.getItem('ingreso')){
        return JSON.parse(localStorage.getItem('ingreso'));
    } else {
        return [];
    }
}
function searchIngreso(obj){
    var data = getAllIngreso();
    var state = true;
    var i=0
    var ingresos = [];
    if(obj.Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].id==obj.Id){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Ingresos Encontradas","data":[new Ingreso(data[i])]};
        } else{
            return {"error":"No se ha encontrado ningun ingreso asociado"};
        }

    } else if(obj.User_Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].user_id==obj.User_Id){
                ingresos.push(new Ingreso(data[i]));
                state = true;
            }
        }
        if(state){
            return {"success":"Ingresos Encontradas","data":ingresos};
        } else{
            return {"error":"No se ha encontrado ningun ingreso asociado"};
        }
    }
}
function updateIngreso(obj){
    var data = getAllIngreso();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    data[i].id = obj.Id;
    data[i].user_id = obj.User_Id;
    data[i].tipo = obj.Tipo;
    data[i].cuenta_id = obj.Cuenta_Id;
    data[i].fecha = obj.Fecha;
    data[i].motivo = obj.Motivo;
    data[i].monto = obj.Monto;
    data[i].saldoanterior = obj.SaldoAnterior;
    localStorage.setItem('ingreso', JSON.stringify(data));
    return true;
}
function deleteIngreso(obj){
    var data = getAllIngreso();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    if(state){
        data.splice(i,1);
        localStorage.setItem('ingreso',JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}

//------------------------------------------------End Ingreso------------------------------------------------------------

//------------------------------------------------Gasto------------------------------------------------------------

function storeGasto(obj){
    var data = getAllGasto();
    var cadena = {"id":data.length,"user_id":obj.User_Id,"tipo":obj.Tipo,"cuenta_id":obj.Cuenta_Id,"fecha":obj.Fecha,"motivo":obj.Motivo,"monto":obj.Monto,"saldoanterior":obj.SaldoAnterior};
    data.push(cadena);
    localStorage.setItem('gasto',JSON.stringify(data));
    return true;
}
function getAllGasto(){
    if(localStorage.getItem('gasto')){
        return JSON.parse(localStorage.getItem('gasto'));
    } else {
        return [];
    }
}
function searchGasto(obj){
    var data = getAllGasto();
    var state = true;
    var i=0
    var gastos = [];
    if(obj.Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].id==obj.Id){
                state = true;
                break;
            }
        }
        if(state){
            return {"success":"Gastos Encontradas","data":[new Gasto(data[i])]};
        } else{
            return {"error":"No se ha encontrado ningun gasto asociado"};
        }

    } else if(obj.User_Id != null){
        for(i=0;i<data.length;i++){
            if(data[i].user_id==obj.User_Id){
                gastos.push(new Gasto(data[i]));
                state = true;
            }
        }
        if(state){
            return {"success":"Gastos Encontradas","data":gastos};
        } else{
            return {"error":"No se ha encontrado ningun gasto asociado"};
        }
    }
}
function updateGasto(obj){
    var data = getAllGasto();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    data[i].id = obj.Id;
    data[i].user_id = obj.User_Id;
    data[i].tipo = obj.Tipo;
    data[i].cuenta_id = obj.Cuenta_Id;
    data[i].fecha = obj.Fecha;
    data[i].motivo = obj.Motivo;
    data[i].monto = obj.Monto;
    data[i].saldoanterior = obj.SaldoAnterior;
    localStorage.setItem('gasto', JSON.stringify(data));
    return true;
}
function deleteGasto(){
    var data = getAllGasto();
    var state = false;
    var i = 0;
    for(i=0;i<data.length;i++){
        if(data[i].id==obj.Id){
            state = true;
            break;
        }
    }
    if(state){
        data.splice(i,1);
        localStorage.setItem('gasto',JSON.stringify(data));
        return true;
    } else {
        return false;
    }
}

//------------------------------------------------End Gasto------------------------------------------------------------


function getMotivos(){
    if(localStorage.getItem("motivos")){
        return JSON.parse(localStorage.getItem("motivos"));
    } else {
        var cadena = ["Pago de celular","Pago de luz eléctrica","Pago de agua","Pago de casa/alquiler","Pago de cable","Pago de internet","Pago de educación","Supermercado","Cine","Ropa","Restaurante","Mascota","Gasolina"];
        localStorage.setItem("motivos",JSON.stringify(cadena));
        return JSON.parse(localStorage.getItem("motivos"));
    }
}
