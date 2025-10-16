const nombre = document.querySelector(".campoForm.name")
const email = document.querySelector(".campoForm.email")
const edad = document.querySelector(".campoForm.edad")
const pais = document.querySelector(".campoForm.pais")
const mensaje = document.getElementById("alerta")
const btnGuardar = document.getElementById("guardar")
const cabecera = document.querySelector("nav")
const input = document.querySelectorAll(".campoForm")



if (localStorage.getItem("name") != null) {
    cabecera.textContent = `Bienvenido al formulario: ${localStorage.getItem("name")} `
}


function validarFormulario() {

    if (nombre.value == "") {
        mensaje.textContent = "Verifica el nombre. ";
        mensaje.classList.add("alertaRed")
        mensaje.classList.remove("alertaGreen")
        mensaje.classList.remove("hidden");
        mensaje.classList.add("flex");
        return false;
    }

    if (email.value == "") {
        mensaje.textContent = "Verifica el email ";
        mensaje.classList.add("alertaRed")
        mensaje.classList.remove("alertaGreen")
        mensaje.classList.remove("hidden");
        mensaje.classList.add("flex");
        return false
    }

    if (edad.value == "") {
        mensaje.textContent = "Verifica tu edad. ";
        mensaje.classList.remove("hidden");
        mensaje.classList.add("alertaRed")
        mensaje.classList.remove("alertaGreen")
        mensaje.classList.add("flex");
        return false
    }

    if (pais.value == "") {
        mensaje.textContent = "Verifica tu país. ";
        mensaje.classList.add("alertaRed")
        mensaje.classList.remove("alertaGreen")
        mensaje.classList.remove("hidden");
        mensaje.classList.add("flex");
        return false;
    }

    return true;
}

btnGuardar.addEventListener("click", () => {

    if (validarFormulario()) {

        localStorage.setItem("name", nombre.value)
        mensaje.classList.remove("alertaRed")
        mensaje.classList.add("alertaGreen")
        mensaje.textContent = "Enviado"
        cabecera.textContent = `Bienvenido al formulario: ${localStorage.getItem("name")} `
    }

})


