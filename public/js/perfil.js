
function llenarPerfil(){
	

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


