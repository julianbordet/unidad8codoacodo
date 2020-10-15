function validar(){

var username = document.forms["loginForm"]["user"].value;
var password = document.forms["loginForm"]["passw"].value;

if (!(username.includes("@"))) {
	
		alert("Falta el arroba en el usuario")
		return false;
	
	}
	
if (!(password)) {
	
		alert("La constraseña no puede estar vacía")
		return false;
	
	}

}


