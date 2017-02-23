
function crearAdmin (){

 var correo = document.getElementById('getemail').value;

 var password = document.getElementById('getpassword').value;



firebase.auth().createUserWithEmailAndPassword(correo, password).catch(function(error) {
        if (error.code){
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            console.log(errorMessage);
            
        }
        else{
            alert("usuario creado");
            var user = firebase.auth().currentUser;
 
           console.log(user.uid);
            window.location = "/";
        }
    });

}


function crearEntrada(){

var nombre = document.getElementById('getnombre').value;
var apellido = document.getElementById('getapellido').value;
var cedula = document.getElementById('getcedula').value;
var telefono = document.getElementById('gettelefono').value;
var correo = document.getElementById('getemail').value;
var estado = "Nuevo";

firebase.database().ref('entradas/'+cedula).set({
  nombre:nombre,
  apellido:apellido,
  telefono:telefono,
  correo:correo,
  estado: estado
}).then(function(){
  window.location = "/registropet?id="+cedula;

}, function(error){
  alert(error.code);
});

}


function crearPerro(){


var nombre = document.getElementById('getnombre').value;
var edad = document.getElementById('getedad').value;
var historia = document.getElementById('gethist').value;

var GET = {};
var queryString = window.location.search.replace(/^\?/,'');
queryString.split(/\&/).forEach(function(keyValuePair){
  var paramName = keyValuePair.replace(/=.*$/,"");
  var paramValue = keyValuePair.replace(/^[^=]*\=/,"");
  GET[paramName] = paramValue;
});

var cedula = decodeURI(GET["id"]);

firebase.database().ref('perro/'+cedula).set({
  nombre:nombre,
  edad:edad,
  historia:historia
}).then(function(){
  window.location = "/";

}, function(error){
  alert(error.code);
});




}

















