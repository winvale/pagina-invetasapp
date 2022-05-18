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

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "https://invetas-app.netlify.app/" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name,
    }),
  })
    .then(() => navigate("/¡Tu mensaje fue enviado con exito,pronto te contactaremos!/"))
    .catch((error) => alert(error));
};