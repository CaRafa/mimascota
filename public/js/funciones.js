
function crearusuario (email, password){

console.log("js "+email);

firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    var user = firebase.auth().currentUser;
    logUser(user); // Optional
}, function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
});

}


