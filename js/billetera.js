var usuario = getSession();

function actualizar_Ui(){
    var efectivo = searchEfectivo({"User_Id":usuario.Id});
    var row = document.getElementById("efectivos");
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
            let span = document.createElement("span");
            span.className="small-box-footer";
            span.innerHTML="Efectivo";

            icon.appendChild(i);
            inner.appendChild(h3);
            inner.appendChild(p);
            smallbox.appendChild(inner);
            smallbox.appendChild(icon);
            smallbox.appendChild(span);
            col.appendChild(smallbox);
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
        span.innerHTML="Efectivo";
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
    var row = document.getElementById("cuentas");
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
            let span = document.createElement("span");
            span.className="small-box-footer";
            span.innerHTML="Cuenta";

            icon.appendChild(i);
            inner.appendChild(h3);
            inner.appendChild(p);
            smallbox.appendChild(inner);
            smallbox.appendChild(icon);
            smallbox.appendChild(span);
            col.appendChild(smallbox);
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
        span.innerHTML="Cuenta";

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
    var row = document.getElementById("tarjetas");
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
            let span = document.createElement("span");
            span.className="small-box-footer";
            span.innerHTML="Tarjeta";

            icon.appendChild(i);
            inner.appendChild(h3);
            inner.appendChild(p);
            smallbox.appendChild(inner);
            smallbox.appendChild(icon);
            smallbox.appendChild(span);
            col.appendChild(smallbox);
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
        span.innerHTML="Tarjeta";

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

function formEfectivo(e){
    e.preventDefault();
    var efectivo = new Efectivo();
    var state = true;
    var saldo = document.getElementById("formEfectivo-saldo");
    var error = document.getElementById("formEfectivo-error");
    error.style.display="none";
    var ul_error = document.getElementById("formEfectivo-error-ul");
    ul_error.innerHTML="";
    if(!efectivo.setSaldo(saldo)){
        let li = document.createElement("li");
        li.innerHTML="El formato de efectivo ingresado no válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!efectivo.setUser_Id(usuario.Id)){
        let li = document.createElement("li");
        li.innerHTML="No se ha recopilado la información del usuario";
        ul_error.appendChild(li);
        stet = false;
    }
    if(state){
        storeEfectivo(efectivo);
        location.reload();
    } else {
        error.style.display="block";
    }
}

function formCuenta(e){
    e.preventDefault();
    var cuenta = new Cuenta();
    var state = true;
    var banco = document.getElementById("formCuenta-banco");
    var nocuenta = document.getElementById("formCuenta-cuenta");
    var saldo = document.getElementById("formCuenta-saldo");
    var error = document.getElementById("formCuenta-error");
    error.style.display="none";
    var ul_error = document.getElementById("formCuenta-error-ul");
    ul_error.innerHTML="";
    cuenta.setUser_Id(usuario.Id);
    if(!cuenta.setBanco(banco)){
        let li = document.createElement("li");
        li.innerHTML="El formato banco ingresado no es válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!cuenta.setNoCuenta(nocuenta)){
        let li = document.createElement("li");
        li.innerHTML="El formato de Número de Cuenta no válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!cuenta.setSaldo(saldo)){
        let li = document.createElement("li");
        li.innerHTML="El formato de saldo no es correcto";
        ul_error.appendChild(li);
        state = false;
    }
    if(state){
        if(storeCuenta(cuenta)){
            location.reload();
        }
    } else {
        error.style.display="block";
    }
}
function formTarjeta(e){
    e.preventDefault();
    var tarjeta = new Tarjeta();
    var state = true;
    var banco = document.getElementById("formTarjeta-banco");
    var notarjeta = document.getElementById("formTarjeta-tarjeta");
    var saldo = document.getElementById("formTarjeta-saldo");
    var interes = document.getElementById("formTarjeta-interes");
    var mes = document.getElementById("formTarjeta-mes");
    var dia = document.getElementById("formTarjeta-dia");
    var error = document.getElementById("formTarjeta-error");
    error.style.display="none";
    var ul_error = document.getElementById("formTarjeta-error-ul");
    ul_error.innerHTML="";
    tarjeta.setUser_Id(usuario.Id);
    if(!tarjeta.setBanco(banco)){
        let li = document.createElement("li");
        li.innerHTML="El banco ingresado no es válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!tarjeta.setNoTarjeta(notarjeta)){
        let li = document.createElement("li");
        li.innerHTML="El formato de tarjeta ingresado no es válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!tarjeta.setSaldo(saldo)){
        let li = document.createElement("li");
        li.innerHTML="El formato de saldo ingresado no es válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!tarjeta.setInteres(interes)){
        let li = document.createElement("li");
        li.innerHTML="El formato de interés ingresado no es válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(!tarjeta.setFecha(mes,dia)){
        let li = document.createElement("li");
        li.innerHTML="El formato de fecha ingresado no es válido";
        ul_error.appendChild(li);
        state = false;
    }
    if(state){
        if(storeTarjeta(tarjeta)){
            location.reload();
        }
    } else {
        error.style.display="block";
    }
}
window.onload = function(){
    var usuario = getSession();
    console.log(usuario);
    if(usuario){
        if(document.getElementById("logout")){
            document.getElementById("logout").addEventListener("click",clearSession);
        }
        document.getElementById("username").innerHTML = usuario.Nombres;
        if(usuario.First){
            alert("Agregue sus datos, adjunte cuentas y tarjetas.");
            usuario.setFirst(false);
            resetSession(usuario);
            updateUsuario(usuario);
            document.getElementById("formTarjeta-dia").focus();
            document.getElementById("formEfectivo-saldo").focus();
        }
    } else {
        window.location="index.html";
    }
    actualizar_Ui();
    document.getElementById("formEfectivo").addEventListener("submit",formEfectivo);
    document.getElementById("formCuenta").addEventListener("submit",formCuenta);
    document.getElementById("formTarjeta").addEventListener("submit",formTarjeta);
}