var enviarFormulario = document.getElementById("activateform");

const validaciones = [
  (email = document.getElementById("email")),
  (names = document.getElementById("names")),
  (phone = document.getElementById("phone")),
  (message = document.getElementById("message")),
];

validaciones.forEach((element) => {
  element.addEventListener("input", () => {
    const value = validarCampos();
    if (value === true) {
      enviarFormulario.disabled = false;
    } else {
      enviarFormulario.disabled = true;
    }
  });
});

enviarFormulario.addEventListener("click", (e) => {
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
      limpiarFormulario();
      toast.show();
    })
    .catch((error) => alert(error));
});

function limpiarFormulario() {
  validaciones.forEach((val) => {
    val.value = "";
  });
  enviarFormulario.disabled = true;
}

function validarCampos() {
  let val = true;
  if (names.value === null || names.value === "") {
    val = false;
  }
  if (
    email.value === null ||
    email.value === "" ||
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      email.value
    )
  ) {
    val = false;
  }
  if (phone.value === null || phone.value === "") {
    val = false;
  }
  if (message.value === null || message.value === "") {
    val = false;
  }
  return val;
}
