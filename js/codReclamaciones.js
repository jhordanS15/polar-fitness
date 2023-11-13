
function validar(){
    if(document.getElementById("txtApellidos").value==""){
        alert("Debe completar sus apellidos")
        document.getElementById("error").innerHTML="Debe completar sus apellidos";
        document.getElementById(txtApellidos).focus();
        return false;
    }
    if(document.getElementById("txtNombres").value==""){
        alert("Debe completar sus nombres")
        document.getElementById("error").innerHTML="Debe completar sus nombres";
        document.getElementById(txtNombres).focus();
        return false;
    }
    if(document.getElementById("txtDNI").value==""){
        alert("Debe completar su dni")
        document.getElementById("error").innerHTML="Debe completar su dni";
        document.getElementById(txtNombres).focus();
        return false;
    }
    if(document.getElementById("txtEmail").value==""){
        alert("Debe completar su E-mail")
        document.getElementById("error").innerHTML="Debe completar su E-mail";
        document.getElementById(txtEmail).focus();
        return false;
    }
    document.getElementById("form").submit();

}

window.onload =function(){

    document.getElementById("btnEnviar").onclick=validar
}