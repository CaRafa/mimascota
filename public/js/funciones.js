
function crearusuario (email, password){

 firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
 var user = firebase.auth().currentUser;

 alert("usuario creado");
 console.log(user.uid);
 window.location.replace("/prueba.html");


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


