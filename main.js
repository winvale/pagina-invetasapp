let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Inventas App')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  function alertaM() {  
    alert("¡Tu mensaje fue enviado con exito,pronto te contactaremos!");
} 