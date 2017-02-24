
function inicioSesion(){

      const email = document.getElementById('inicio_email').value;
      const password = document.getElementById('inicio_pass').value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log('user object:' + user.uid);
        
        }).catch(function(error){

         alert(error.code);

        });

}


function crearAdmin(){

      const email = document.getElementById('getemail').value;
      const password = document.getElementById('getpassword').value;


        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        console.log('everything went fine');
        console.log('user object:' + user);
        window.location = "/";
        
        }).catch(function(error){

         alert(error.code);

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

alert('hola');
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
alert(cedula);

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



/*



<!-- STORAGE ORIGINAL

service firebase.storage {
  match /b/project--453990862005505311.appspot.com/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}

-->


*/







