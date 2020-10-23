var usuario = getSession();
function llenar_cards(){
    var efectivo = searchEfectivo({"User_Id":usuario.Id});
    var body = document.getElementById("cards");
    var total = 0;
    var row = [];
    if(efectivo.success){
        var sum = 0;
        efectivo.data.forEach(element => {
            sum = parseFloat(sum)+parseFloat(element.Saldo);
        });
        let col = document.createElement("div");
        col.className = "col-10";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-success";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+sum;
        let p = document.createElement("p");
        p.innerHTML="Saldo Disponible";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-cash";
        let a = document.createElement("span");
        a.className="small-box-footer";
        a.innerHTML="Efectivo";

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.push(col);
        total = parseFloat(total)+parseFloat(sum);
    } else {
        let col = document.createElement("div");
        col.className = "col-10";
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
        row.push(col);
    }
    var cuenta = searchCuenta({"User_Id":usuario.id});
    if(cuenta.success){
        var sum = 0;
        cuenta.data.forEach(element => {
            sum = parseFloat(sum)+parseFloat(element.Saldo);
        });
        let col = document.createElement("div");
        col.className = "col-10";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-warning";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+sum;
        let p = document.createElement("p");
        p.innerHTML="Saldo Disponible";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-social-bitcoin";
        let a = document.createElement("span");
        a.className="small-box-footer text-body";
        a.innerHTML="Cuentas Bancarias";

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.push(col);
        total = parseFloat(total)+parseFloat(sum);
    } else {
        let col = document.createElement("div");
        col.className = "col-10";
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
        row.push(col);
    }
    var tarjeta = searchTarjeta({"User_Id":usuario.id});
    if(tarjeta.success){
        var sum = 0;
        tarjeta.data.forEach(element => {
            sum = parseFloat(sum)+parseFloat(element.Saldo);
        });
        let col = document.createElement("div");
        col.className = "col-10";
        let smallbox = document.createElement("div");
        smallbox.className="small-box bg-info";
        let inner = document.createElement("div");
        inner.className="inner";
        let h3 = document.createElement("h3");
        h3.innerHTML="$"+sum;
        let p = document.createElement("p");
        p.innerHTML="Saldo Disponible";
        let icon = document.createElement("div");
        icon.className="icon";
        let i = document.createElement("i");
        i.className="ion ion-card";
        let a = document.createElement("span");
        a.className="small-box-footer";
        a.innerHTML="Tarjetas";

        icon.appendChild(i);
        inner.appendChild(h3);
        inner.appendChild(p);
        smallbox.appendChild(inner);
        smallbox.appendChild(icon);
        smallbox.appendChild(a);
        col.appendChild(smallbox);
        row.push(col);
        total = parseFloat(total)+parseFloat(sum);
    } else {
        let col = document.createElement("div");
        col.className = "col-10";
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
        row.push(col);
    }
    let col = document.createElement("div");
    col.className = "col-10";
    let smallbox = document.createElement("div");
    smallbox.className="small-box bg-secondary";
    let inner = document.createElement("div");
    inner.className="inner";
    let h3 = document.createElement("h3");
    h3.innerHTML="$"+total;
    let p = document.createElement("p");
    p.innerHTML="Saldo Total Disponible";
    let icon = document.createElement("div");
    icon.className="icon";
    let i = document.createElement("i");
    i.className="ion ion-checkmark-circled";
    let a = document.createElement("span");
    a.className="small-box-footer";
    a.innerHTML="Balance General";
    
    icon.appendChild(i);
    inner.appendChild(h3);
    inner.appendChild(p);
    smallbox.appendChild(inner);
    smallbox.appendChild(icon);
    smallbox.appendChild(a);
    col.appendChild(smallbox);
    row.unshift(col);
    row.forEach(element => {
        body.appendChild(element);
    });


}

function getValues(tipo){
    var dat;
    if(tipo=="ingresos"){
        dat = searchIngreso({"User_Id":usuario.Id});
        if(dat.success){
            var data = dat.data;
            var values = [];
            var sing = 0;
            for(var i=1;i<13;i++){
                sing = 0;
                for(var j=0;j<data.length;j++){
                    if(data[j].Fecha.split("-")[1]==i){
                        sing=parseFloat(sing)+parseFloat(data[j].Monto);
                    }
                }
                values.push(sing);
            }
            return values;
        } else {
            return [0,0,0,0,0,0,0,0,0,0,0,0];
        }
    } else {
        dat = searchGasto({"User_Id":usuario.Id});
        if(dat.success){
            var data = dat.data;
            var values = [];
            var sing = 0;
            for(var i=1;i<13;i++){
                sing = 0;
                for(var j=0;j<data.length;j++){
                    if(data[j].Fecha.split("-")[1]==i){
                        sing=parseFloat(sing)+parseFloat(data[j].Monto);
                        console.log(sing);
                    }
                }
                values.push(-sing);
            }
            return values;
        } else {
            return [0,0,0,0,0,0,0,0,0,0,0,0];
        }
    }
}

function actualizar_ui(){
    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var myChart = new Chart(ctx1, {
        type:'line',
        data: {
            labels:MONTHS,
            datasets:[{
                        label:'',
                        borderColor: '#43A047',
                        pointBorderColor:'#1B5E20',
                        pointBackgroundColor: '#1B5E20',
                        backgroundColor: 'rgba(39,174,96,0.5)',
                        data: getValues("ingresos"),

                },
                {
                    label:'',
                    borderColor: '#D32F2F',
                    pointBorderColor:'#B71C1C',
                    pointBackgroundColor: '#B71C1C',
                    backgroundColor: 'rgba(255,87,51,0.5)',
                    data: getValues("gastos"),
            }
            ]
        },
        options: {
            spanGaps: false,
            elements: {
                line: {
                    tension: 0
                }
            },
            responsive: true,
            title: {
                display: true,
                text: 'Ingresos vs Egresos'
            },
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'index'
            },
            scales             : {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
          }
    });
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx2, {
        type:'line',
        data: {
            labels:MONTHS,
            datasets:[{
                        label:'',
                        borderColor: '#43A047',
                        pointBorderColor:'#1B5E20',
                        pointBackgroundColor: '#1B5E20',
                        backgroundColor: 'rgba(39,174,96,0.5)',
                        data: getValues("ingresos"),
                }
            ]
        },
        options: {
            spanGaps: false,
            elements: {
                line: {
                    tension: 0
                }
            },
            responsive: true,
            title: {
                display: true,
                text: 'Ingresos'
            },
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'index'
            },
            scales             : {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
          }
    });
}
window.onload = function(){
    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
    console.log(usuario);
    if(usuario){
        if(document.getElementById("logout")){
            document.getElementById("logout").addEventListener("click",clearSession);
        }
        document.getElementById("username").innerHTML = usuario.Nombres;
        actualizar_ui();
        llenar_cards();
    } else {
        window.location="index.html";
    }
}