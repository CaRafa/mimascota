
function crearadmin (){

 var correo = document.getElementById('getemail').value;
 var password = document.getElementById('getpassword').value;

 firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
 var user = firebase.auth().currentUser;

 alert("usuario creado");
 console.log(user.uid);
 window.location.replace("/");


}),
function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } 
  else if (errorCode == 'auth/email-already-in-use'){
  	alert('correo ya en uso');
  }
  else {
    alert(errorMessage);
  }

}

}


function crearEntrada(){

var nombre = document.getElementById('getnombre').value;
var apellido = document.getElementById('getapellido').value;
var cedula = document.getElementById('getcedula').value;
var telefono = document.getElementById('gettelefono').value;
var correo = document.getElementById('getemail').value;

firebase.database().ref('entradas/'+cedula).set({
  nombre:nombre,
  apellido:apellido,
  telefono:telefono,
  correo:correo,
}).then(function(){
  window.location = "/registropet?id="+cedula;

}, function(error){
  alert(error.code);
});

}


function crearPerro(){


var nombre = document.getElementById('getnombre').value;
var edad = document.getElementById('getedad').value;

var url = $(location).attr('href'); 
var cedula = decodeURIComponent(url);
console.log(cedula);

}

















