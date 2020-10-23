var usuario = getSession();

function trasnformNo(text){
    var size = text.length;
    var max = 0;
    if(size%2==0){
        max = size/2;
    } else{
        max = (size+1)/2;
    }
    var tex = "";
    for(var i=0;i<size;i++){
        if(i<max){
            tex+="*";
        } else {
            tex+=text[i];
        }
    }
    return tex;
}

function fillTable(tipo){
    var data = [];
    if(tipo=="egresos"){
        data = getAllGasto();
    } else if(tipo=="ingresos"){
        data = getAllIngreso();
    }
    console.log(data);
    var row = document.getElementById("table-body-"+tipo);
    data.forEach(element => {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.scope="row";
        th.innerHTML=element.motivo;

        var fecha = document.createElement("td");
        fecha.innerHTML=element.fecha;

        var monto = document.createElement("td");
        monto.className=(tipo=="ingresos") ? "text-success" : "text-danger" ;
        monto.innerHTML=((tipo=="ingresos") ? "+" : "-")+"$"+element.monto;

        var tip = document.createElement("td");
        tip.innerHTML=element.tipo;

        var cuen = document.createElement("td");
        cuen.innerHTML="";

        if(element.tipo=="Efectivo"){
            cuen.innerHTML="-"
        } else if(element.tipo=="Cuenta"){
            var cuenta = new Cuenta(searchCuenta({"Id":element.cuenta_id}).data[0]);
            cuen.innerHTML= trasnformNo(cuenta.NoCuenta);
        } else {
            var tarjeta = new Tarjeta(searchTarjeta({"Id":element.cuenta_id}).data[0]);
            cuen.innerHTML= trasnformNo(tarjeta.NoTarjeta);
        }

        tr.appendChild(th);
        tr.appendChild(fecha);
        tr.appendChild(tip);
        tr.appendChild(cuen);
        tr.appendChild(monto);
        row.appendChild(tr);
    });
}
window.onload = function(){
    console.log(usuario);
    if(usuario){
        if(document.getElementById("logout")){
            document.getElementById("logout").addEventListener("click",clearSession);
        }
        document.getElementById("username").innerHTML = usuario.Nombres;
        fillTable("ingresos");
        fillTable("egresos");
    } else {
        window.location="index.html";
    }
}