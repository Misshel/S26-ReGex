window.addEventListener=("load",function(){
var boton= document.getElementById("boton");

boton.addEventListener=("click",function(){
  var password1= document.getElementById("user-password1").value;
  var password2= document.getElementById("user-password2").value;

  if(password1==password2){
    return true;
  }else {
    alert("Las contraseñas no coinsiden");
  }
})

})
