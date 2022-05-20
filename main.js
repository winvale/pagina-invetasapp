let app = document.getElementById("typewriter");
var names = document.getElementById("names");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var error = document.getElementById("error");
var enviarFormulario = document.getElementById("activateform")
error.style.color = 'red';

const validaciones = [
  names,email, phone, message
]

validaciones.forEach(element => {
  element.addEventListener('onchange', ()=>{
    let val = true;
    if(names.value ===null || names.value === '' ){
      console.log('error');
      val = false;
     mensajeError.push('Ingrese Nombre')
    }
    if(email.value ===null || email.value === '' ){
     console.log('error');
     val = false;
    mensajeError.push('Ingrese Correo')
   }
   if(phone.value ===null || phone.value === '' ){
     console.log('error');
     val = false;
    mensajeError.push('Ingrese Telefono')
   }
   if(message.value ===null || message.value === '' ){
     console.log('error');
     val = false;
    mensajeError.push('Ingrese Mensaje')
   }
   if(val === true){
    enviarFormulario.enabled = true;
   }else{
    enviarFormulario.disabled = true;
   }
  })
});

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Inventas App")
  .pauseFor(200)
  .deleteChars(10)
  .start();

 function validarCompos(){
   var mensajeError=[];

   if(names.value ===null || names.value === '' ){
     console.log('error');
    mensajeError.push('Ingrese Nombre')
   }
   if(email.value ===null || email.value === '' ){
    console.log('error');
   mensajeError.push('Ingrese Correo')
  }
  if(phone.value ===null || phone.value === '' ){
    console.log('error');
   mensajeError.push('Ingrese Telefono')
  }
  if(message.value ===null || message.value === '' ){
    console.log('error');
   mensajeError.push('Ingrese Mensaje')
  }
    error.innerHTML = mensajeError.join(', ');
     return false;
 }

 enviarFormulario.addEventListener("click", (e) => {
  e.preventDefault();
  var mensajeError=[];
  let myForm = document.getElementById("pizzaOrder");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      const toastLiveExample = document.getElementById("liveToast");
      const toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    })
    .catch((error) => alert(error));
    
});
