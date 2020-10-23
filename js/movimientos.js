var usuario = getSession();

function showBalance(tipo,obj1,obj2){
    var row = document.getElementById("tarjetas");
    row.innerHTML = "";
    if(tipo=="Efectivo"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-success";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+obj1.Saldo;
        let p = document.createElement("p");
        p.innerHTML="Saldo Disponible";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-cash";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Método Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    }else if(tipo=="Cuenta"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-warning";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+obj1.Saldo;
        let p = document.createElement("p");
        p.innerHTML="N° "+obj1.NoCuenta;
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-social-bitcoin";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Método Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    } else if(tipo=="Tarjeta"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-info";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+obj1.Saldo;
        let p = document.createElement("p");
        p.innerHTML="N° "+obj1.NoTarjeta;
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-card";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    }
    let col = document.createElement("div");
    col.className = "col-1";
    let smallbox = document.createElement("div");
    smallbox.className="small-box bg-transparent";
    smallbox.style.boxShadow="none";
    let inner = document.createElement("div");
    inner.className="inner";
    let h3 = document.createElement("h3");
    h3.innerHTML="";
    let p = document.createElement("p");
    p.innerHTML="";
    let icon = document.createElement("div");
    icon.className="icon";
    let i = document.createElement("i");
    i.className="ion-arrow-right-a";    

    icon.appendChild(i);
    inner.appendChild(h3);
    inner.appendChild(p);
    smallbox.appendChild(inner);
    smallbox.appendChild(icon);
    col.appendChild(smallbox);
    row.appendChild(col);

    if(tipo=="Efectivo"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-success";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+obj2.Saldo;
        let p = document.createElement("p");
        p.innerHTML="Saldo Disponible";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-cash";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Método Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    }else if(tipo=="Cuenta"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-warning";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+obj2.Saldo;
        let p = document.createElement("p");
        p.innerHTML="N° "+obj2.NoCuenta;
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-social-bitcoin";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Método Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    } else if(tipo=="Tarjeta"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-info";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+obj2.Saldo;
        let p = document.createElement("p");
        p.innerHTML="N° "+obj2.NoTarjeta;
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-card";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    }
    document.getElementById("Modal3-Open").click();
}

function showCard(element,tipo,place){
    var row = document.getElementById(place+"metodoSelect");
    row.innerHTML = "";
    if(tipo=="Efectivo"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-success";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+element.Saldo;
        let p = document.createElement("p");
        p.innerHTML="Saldo Disponible";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-cash";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Método Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    }else if(tipo=="Cuenta"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-warning";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+element.Saldo;
        let p = document.createElement("p");
        p.innerHTML="N° "+element.NoCuenta;
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-social-bitcoin";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Método Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    } else if(tipo=="Tarjeta"){
        let col = document.createElement("div");
        col.className = "col-5";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-info";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+element.Saldo;
        let p = document.createElement("p");
        p.innerHTML="N° "+element.NoTarjeta;
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-card";
        let a = document.createElement("a");
        a.className="small-box-footer";
        a.innerHTML="Seleccionado";
        a.href="#"

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.appendChild(col);
    }
}
function actualizar_Ui(place){
    var efectivo = searchEfectivo({"User_Id":usuario.Id});
    var row = document.getElementById(place+"efectivos");
    if(efectivo.success){
        efectivo.data.forEach(element => {
            let col = document.createElement("div");
            col.className = "col-lg-3 col-6";
            let smallbox = document.createElement("div");
            smallbox.className="small-box bg-success";
            let inner = document.createElement("div");
            inner.className="inner";
            let h3 = document.createElement("h3");
            h3.innerHTML="$"+element.Saldo;
            let p = document.createElement("p");
            p.innerHTML="Saldo Disponible";
            let icon = document.createElement("div");
            icon.className="icon";
            let i = document.createElement("i");
            i.className="ion ion-cash";
            let a = document.createElement("a");
            a.className="small-box-footer";
            a.innerHTML="Seleccionar";
            a.href="#"

            icon.appendChild(i);
            inner.appendChild(h3);
            inner.appendChild(p);
            smallbox.appendChild(inner);
            smallbox.appendChild(icon);
            smallbox.appendChild(a);
            col.appendChild(smallbox);
            col.addEventListener("click",function(){
                document.getElementById(place+"metodo").value = JSON.stringify(element);
                document.getElementById(place+"tipo").value = "Efectivo";
                showCard(element,"Efectivo",place);
                document.getElementById(place+"btn-Modal1").click();
            })
            row.appendChild(col);
        });
    } else {
        let col = document.createElement("div");
        col.className = "col-lg-3 col-6";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-dark";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$00.00";
        let p = document.createElement("p");
        p.innerHTML="No posee Efectivo Registrado";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-cash";
        let span = document.createElement("span");
        span.className="small-box-footer";
        span.innerHTML="No puede seleccionar este método";
        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(span);
        col.appendChild(smallbox);
        row.appendChild(col);
    }
    var cuenta = searchCuenta({"User_Id":usuario.id});
    var row = document.getElementById(place+"cuentas");
    if(cuenta.success){
        cuenta.data.forEach(element => {
            let col = document.createElement("div");
            col.className = "col-lg-3 col-6";
            let smallbox = document.createElement("div");
            smallbox.className="small-box bg-warning";
            let inner = document.createElement("div");
            inner.className="inner";
            let h3 = document.createElement("h3");
            h3.innerHTML="$"+element.Saldo;
            let p = document.createElement("p");
            p.innerHTML="N° "+element.NoCuenta;
            let icon = document.createElement("div");
            icon.className="icon";
            let i = document.createElement("i");
            i.className="ion ion-social-bitcoin";
            let a = document.createElement("a");
            a.className="small-box-footer";
            a.innerHTML="Seleccionar";
            a.href="#"

            icon.appendChild(i);
            inner.appendChild(h3);
            inner.appendChild(p);
            smallbox.appendChild(inner);
            smallbox.appendChild(icon);
            smallbox.appendChild(a);
            col.appendChild(smallbox);
            col.addEventListener("click",function(){
                document.getElementById(place+"metodo").value = JSON.stringify(element);
                document.getElementById(place+"tipo").value = "Cuenta";
                showCard(element,"Cuenta",place);
                document.getElementById(place+"btn-Modal1").click();
            })
            row.appendChild(col);
        });
    } else {
        let col = document.createElement("div");
        col.className = "col-lg-3 col-6";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-dark";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$00.00";
        let p = document.createElement("p");
        p.innerHTML="No posee cuentas registradas";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-social-bitcoin";
        let span = document.createElement("span");
        span.className="small-box-footer";
        span.innerHTML="No puede seleccionar este método";

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(span);
        col.appendChild(smallbox);
        row.appendChild(col);
    }
    var tarjeta = searchTarjeta({"User_Id":usuario.id});
    var row = document.getElementById(place+"tarjetas");
    if(tarjeta.success){
        tarjeta.data.forEach(element => {
            let col = document.createElement("div");
            col.className = "col-lg-3 col-6";
            let smallbox = document.createElement("div");
            smallbox.className="small-box bg-info";
            let inner = document.createElement("div");
            inner.className="inner";
            let h3 = document.createElement("h3");
            h3.innerHTML="$"+element.Saldo;
            let p = document.createElement("p");
            p.innerHTML="N° "+element.NoTarjeta;
            let icon = document.createElement("div");
            icon.className="icon";
            let i = document.createElement("i");
            i.className="ion ion-card";
            let a = document.createElement("a");
            a.className="small-box-footer";
            a.innerHTML="Seleccionar";
            a.href="#"

            icon.appendChild(i);
            inner.appendChild(h3);
            inner.appendChild(p);
            smallbox.appendChild(inner);
            smallbox.appendChild(icon);
            smallbox.appendChild(a);
            col.appendChild(smallbox);
            col.addEventListener("click",function(){
                document.getElementById(place+"metodo").value = JSON.stringify(element);
                document.getElementById(place+"tipo").value = "Tarjeta";
                showCard(element,"Tarjeta",place);
                document.getElementById(place+"btn-Modal1").click();
            })
            row.appendChild(col);
        });
    } else {
        let col = document.createElement("div");
        col.className = "col-lg-3 col-6";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-dark";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$00.00";
        let p = document.createElement("p");
        p.innerHTML="No posee tarjetas registradas";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-social-bitcoin";
        let span = document.createElement("span");
        span.className="small-box-footer";
        span.innerHTML="No puede seleccionar este método";

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(span);
        col.appendChild(smallbox);
        row.appendChild(col);
    }
}

function llenar_motivos(id){
    var select = document.getElementById(id);
    var data = getMotivos();
    for(var i =0;i<data.length;i++){
        var option = document.createElement("option");
        if(i==0){
            option.selected="true";
        }
        option.value=data[i];
        option.innerHTML=data[i];
        select.appendChild(option)
    }
}

function getObjeto(tipo,array){
    if(tipo=="Efectivo"){
        return new Efectivo(array);
    } else if(tipo=="Cuenta"){
        return new Cuenta(array);
    } else if(tipo=="Tarjeta"){
        return new Tarjeta(array);
    } else {
        return false;
    }
}

function updateObjeto(tipo,obj){
    if(tipo=="Efectivo"){
        return updateEfectivo(obj);
    } else if(tipo=="Cuenta"){
        return updateCuenta(obj);
    } else if(tipo=="Tarjeta"){
        return updateTarjeta(obj);
    } else {
        return false;
    }
}

function formGasto(e){
    e.preventDefault();
    var motivo = document.getElementById("formGasto-motivo");
    var saldo = document.getElementById("formGasto-saldo");
    var tipo = document.getElementById("formGasto-tipo").value;
    var error = document.getElementById("formGasto-error");
    error.style.display="none";
    var ul_error = document.getElementById("formGasto-error-ul");
    ul_error.innerHTML="";
    var gasto = new Gasto();
    if(document.getElementById("formGasto-metodo").value == ""){
        let li = document.createElement("li");
        li.innerHTML="No ha seleccionado un método de págo";
        ul_error.appendChild(li);
        error.style.display="block";
    } else {
        var metodo = getObjeto(tipo,JSON.parse(document.getElementById("formGasto-metodo").value));
        var obj1 = JSON.parse(document.getElementById("formGasto-metodo").value);
        if(!metodo){
            let li = document.createElement("li");
            li.innerHTML="No ha seleccionado un método de págo";
            ul_error.appendChild(li);
        } else {
            var state = true;
            gasto.setSaldoAnterior(metodo.Saldo);
            if(!metodo.restarSaldo(saldo)){
                let li = document.createElement("li");
                li.innerHTML="No posee suficientes fondos para realizar la operación";
                ul_error.appendChild(li);
                state = false;
            }
            if(state){
                var obj2 = metodo;
                var f = new Date();
                var date = f.getFullYear()+"-"+(f.getMonth() +1) + "-"+f.getDate();
                state = true;
                gasto.setUser_Id(usuario.Id);
                gasto.setUser_Id(usuario.Id);
                gasto.setCuenta_Id(metodo.Id);
                gasto.setTipo(tipo);
                if(!gasto.setFecha(date)){
                    let li = document.createElement("li");
                    li.innerHTML="Error ingresando la fecha";
                    ul_error.appendChild(li);
                    state = false;
                }
                if(!gasto.setMotivo(motivo)){
                    let li = document.createElement("li");
                    li.innerHTML="Error ingresando el motivo";
                    ul_error.appendChild(li);
                    state = false;
                }
                if(!gasto.setMonto(saldo)){
                    let li = document.createElement("li");
                    li.innerHTML="Error ingresando el monto";
                    ul_error.appendChild(li);
                    state = false;
                }
                if(state){
                    storeGasto(gasto);
                    if(updateObjeto(tipo,metodo)){
                        showBalance(tipo,getObjeto(tipo,obj1),obj2);
                    }
                } else{
                    error.style.display="block";
                }
            } else {
                error.style.display="block";
            }
        }
    }
}

function formIngreso(e){
    e.preventDefault();
    var motivo = document.getElementById("formIngreso-motivo");
    var saldo = document.getElementById("formIngreso-saldo");
    var tipo = document.getElementById("formIngreso-tipo").value;
    var error = document.getElementById("formIngreso-error");
    error.style.display="none";
    var ul_error = document.getElementById("formIngreso-error-ul");
    ul_error.innerHTML="";
    var ingreso = new Ingreso();
    if(document.getElementById("formIngreso-metodo").value == ""){
        let li = document.createElement("li");
        li.innerHTML="No ha seleccionado un método de págo";
        ul_error.appendChild(li);
        error.style.display="block";
    } else {
        var metodo = getObjeto(tipo,JSON.parse(document.getElementById("formIngreso-metodo").value));
        var obj1 = JSON.parse(document.getElementById("formIngreso-metodo").value);
        if(!metodo){
            let li = document.createElement("li");
            li.innerHTML="No ha seleccionado un método de págo";
            ul_error.appendChild(li);
            error.style.display="block";
        } else {
            var state = true;
            ingreso.setSaldoAnterior(metodo.Saldo);
            if(!metodo.agregarSaldo(saldo)){
                let li = document.createElement("li");
                li.innerHTML="Error al ingresar el saldo";
                ul_error.appendChild(li);
            }
            if(state){
                var obj2 = metodo;
                var f = new Date();
                var date = f.getFullYear()+"-"+(f.getMonth() +1) + "-"+f.getDate();
                state = true;
                ingreso.setUser_Id(usuario.Id);
                ingreso.setCuenta_Id(metodo.Id);
                ingreso.setTipo(tipo);
                if(!ingreso.setFecha(date)){
                    let li = document.createElement("li");
                    li.innerHTML="Error al ingresar la fecha";
                    ul_error.appendChild(li);
                    state = false;
                }
                if(!ingreso.setMotivo(motivo)){
                    let li = document.createElement("li");
                    li.innerHTML="Error al ingresar el motivo";
                    ul_error.appendChild(li);
                    state = false;
                }
                if(!ingreso.setMonto(saldo)){
                    let li = document.createElement("li");
                    li.innerHTML="Error al ingresar el monto";
                    ul_error.appendChild(li);
                    state = false;
                }
                if(state){
                    storeIngreso(ingreso);
                    if(updateObjeto(tipo,metodo)){
                        showBalance(tipo,getObjeto(tipo,obj1),obj2);
                    }
                } else{
                    error.style.display="block";
                }
            } else {
                error.style.display="block";
            }
        }
    }
}
window.onload=function(){
    usuario = getSession();
    if(usuario){
        if(document.getElementById("logout")){
            document.getElementById("logout").addEventListener("click",clearSession);
        }
        document.getElementById("username").innerHTML = usuario.Nombres;
        document.getElementById("formGasto-btn-Modal1-Open").addEventListener("click",actualizar_Ui("formGasto-"));
        document.getElementById("formIngreso-btn-Modal1-Open").addEventListener("click",actualizar_Ui("formIngreso-"));
        llenar_motivos("formGasto-motivo");
        document.getElementById("formGasto").addEventListener("submit",formGasto);
        document.getElementById("formIngreso").addEventListener("submit",formIngreso);
        document.getElementById("btn-Modal3").addEventListener("click",function(){
            location.reload();
        })
    } else {
        window.location="index.html";
    }
}