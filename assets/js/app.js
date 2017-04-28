window.addEventListener=("load",function(e){
  e.preventDefault();
var validar= document.getElementById("verificar");

validar.addEventListener=("sumbit",function (e) {
  e.preventDefault();
  password();

});

function password(){
  var password1= document.getElementById("user-password1").value;
  var password2= document.getElementById("user-password2").value;

  if(password1==password2){
    return true;
  }else {
    alert("Las contraseñas no coinsiden");
  }
}


});
