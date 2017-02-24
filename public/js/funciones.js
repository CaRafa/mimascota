
function inicioSesion(){

      const email = document.getElementById('inicio_email').value;
      const password = document.getElementById('inicio_pass').value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        
        window.location = "/admin?uid="+user.uid;
        
        }).catch(function(error){

         alert(error.code);

        });
}

//query de entradas aceptadas

function tablaAcept(){

      database = firebase.database();
      var ref = database.ref('perro/').orderByChild("estado").equalTo("aceptado");
      ref.on('value', gotData, errData);

}

//query de entradas rechazadas

function tablaRecha(){

      database = firebase.database();
      var ref = database.ref('perro/').orderByChild("estado").equalTo("rechazado");
      ref.on('value', gotData, errData);

}

//query de entradas pendientes

function tablaPend(){

      database = firebase.database();
      var ref = database.ref('perro/').orderByChild("estado").equalTo(null);
      ref.on('value', gotData, errData);
      

}

//funcion para llenar la tabla

function gotData(data){

console.log(data.val());

var pborrar = document.getElementsByClassName("perrito");

console.log(pborrar);
for (var i = 0; i < pborrar.length; i++) {
  pborrar[i].remove();
}

var perros = data.val();
if(perros != undefined){
  var cedDue = Object.keys(perros);

 for(var i = 0; i< cedDue.length; i++){
    var k = cedDue[i];
    var nombre = perros[k].nombre;
    var edadp = perros[k].edad;
    var cedula = k;

  
  // creacion de la fila    
    var fila = document.createElement('tr');
    fila.className = 'perrito';
  // creacion de cada columna
    var nom = document.createElement('td');
    var edad = document.createElement('td');
    var cedD = document.createElement('td');
    var link = document.createElement('td');
  // creacion de texto asociado a la columna
    var valnom = document.createTextNode(nombre);
    var valeda = document.createTextNode(edadp);
    var valced = document.createTextNode(cedula);

  // link al perfil
    var link = document.createElement("a");
    link.setAttribute("href", "/dog?id="+cedula);
  
    var linkText = document.createTextNode("Perfil");
    

    //asociacion de texto a <td>
    nom.appendChild(valnom);
    edad.appendChild(valeda);
    cedD.appendChild(valced);
    link.appendChild(linkText);


    //asociacion de <td> y <tr>
    fila.appendChild(nom);
    fila.appendChild(edad);
    fila.appendChild(cedD);
    fila.appendChild(link);
    // asociar tabla y <tr>
    var tabla = document.getElementById('tablaP');
    tabla.appendChild(fila);

  }}

}

//funcion de error

function errData(err){
  console.log("error");
  console.log(err);
  
}

//crear admin con email y password

function crearAdmin(){

      const email = document.getElementById('getemail').value;
      const password = document.getElementById('getpassword').value;


        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        console.log('everything went fine');
        console.log('user object:' + user);
        window.location = "/admin?uid="+user.uid;
        
        }).catch(function(error){

         alert(error.code);

        });



}

// crea a la persona por cedula

function crearEntrada(){

var nombre = document.getElementById('getnombre').value;
var apellido = document.getElementById('getapellido').value;
var cedula = document.getElementById('getcedula').value;
var telefono = document.getElementById('gettelefono').value;
var correo = document.getElementById('getemail').value;
var estado = "Pendiente";

firebase.database().ref('entradas/'+cedula).set({
  nombre:nombre,
  apellido:apellido,
  telefono:telefono,
  correo:correo
}).then(function(){
  window.location = "/registropet?id="+cedula;

}, function(error){
  alert(error.code);
});

}

//crea al perro por la cedula de la persona

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










