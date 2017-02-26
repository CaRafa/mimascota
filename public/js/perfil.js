
function llenarPerfil(){
	
var GET = {};
var queryString = window.location.search.replace(/^\?/,'');
queryString.split(/\&/).forEach(function(keyValuePair){
  var paramName = keyValuePair.replace(/=.*$/,"");
  var paramValue = keyValuePair.replace(/^[^=]*\=/,"");
  GET[paramName] = paramValue;
});


var idperro = decodeURI(GET["id"]);

logdog();

	  database = firebase.database();
      var ref = database.ref('perro/'+idperro);
      ref.on('value', gotData, errData);

}


//funcion para llenar la perfil

function gotData(data){

var objeto = data.val();

var nombre = document.getElementById("setnom");
var edad = document.getElementById("setedad");
var hist = document.getElementById("sethist");
	
	var valnom = document.createTextNode(objeto.nombre);
    var valeda = document.createTextNode(objeto.edad);
    var valhist = document.createTextNode(objeto.historia);

nombre.appendChild(valnom);
edad.appendChild(valeda);
hist.appendChild(valhist);

}

//funcion de error

function errData(err){
  console.log("error");
  console.log(err);
  
}

function aceptar(){

	var GET = {};
	var queryString = window.location.search.replace(/^\?/,'');
	queryString.split(/\&/).forEach(function(keyValuePair){
 		 var paramName = keyValuePair.replace(/=.*$/,"");
 		 var paramValue = keyValuePair.replace(/^[^=]*\=/,"");
		  GET[paramName] = paramValue;
		});

var idperro = decodeURI(GET["id"]);

	  database = firebase.database();
      var ref = database.ref('perro/'+idperro);

      ref.update({ pendiente: false });
      ref.update({aceptado: true });

      back();
}

function rechazar(){

var GET = {};
	var queryString = window.location.search.replace(/^\?/,'');
	queryString.split(/\&/).forEach(function(keyValuePair){
 		 var paramName = keyValuePair.replace(/=.*$/,"");
 		 var paramValue = keyValuePair.replace(/^[^=]*\=/,"");
		  GET[paramName] = paramValue;
		});

var idperro = decodeURI(GET["id"]);

	  database = firebase.database();
      var ref = database.ref('perro/'+idperro);

      ref.update({ pendiente:false});
      back();
}

function back(){

var user = firebase.auth().currentUser;

if (user) {
	window.location = "/admin?uid="+user.uid;
} else {
	alert("usuario no logeado");
    window.location.replace("/");
}


}

function log(){



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	
  	var GET = {};
	var queryString = window.location.search.replace(/^\?/,'');
	queryString.split(/\&/).forEach(function(keyValuePair){
 	 var paramName = keyValuePair.replace(/=.*$/,"");
 	 var paramValue = keyValuePair.replace(/^[^=]*\=/,"");
  	GET[paramName] = paramValue;
	});


	var uid = decodeURI(GET["uid"]);
  	if (uid == user.uid) {
 console.log('todo perfecto');

 }

  } else {
    
    alert("usuario no logeado");
    window.location.replace("/");
  }
});


}


function logdog(){

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	console.log('usuario activo');
 }
 else {
    
    alert("usuario no logeado");
    window.location.replace("/");
  }
});


}



