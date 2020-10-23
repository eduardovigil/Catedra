window.onload = function(){
    var user = getSession();
    if(user){
        if(document.getElementById("logout")){
            if(document.getElementById("log")){
                document.getElementById("log").style.display = "none";
            }
            document.getElementById("logout").style.display = "block";
            document.getElementById("logout").addEventListener("click",clearSession);
        }
        if(document.getElementById("dash")){
            document.getElementById("dash").style.display = "block";
        }
        if(user.First){
            window.location = "agregar.html";
        }
    }
}