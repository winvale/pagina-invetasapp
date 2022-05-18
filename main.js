let app = document.getElementById("typewriter");

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

document.getElementById("activateform").addEventListener("click", (e) => {
  e.preventDefault();

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
