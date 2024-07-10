function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.innerText = message;
    } else {
        console.error(`Elemento con id '${elementId}' no encontrado.`);
    }
}

function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        resetErrorMessages();
        let username = document.getElementById("username").value.trim();
        let lastname = document.getElementById("lastname").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let nacimiento = document.getElementById("nacimiento").value.trim();
        let terminos = document.getElementById('terminos').checked;
        let isValid = true;

        if (username === "") {
            displayErrorMessage("usernameError", "Por favor ingrese un nombre.");
            isValid = false;
        }

        if (lastname === "") {
            displayErrorMessage("lastnameError", "Por favor ingrese un apellido.");
            isValid = false;
        }
        
        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if(nacimiento === ""){
            displayErrorMessage("nacimientoError", "Por favor ingrese una fecha de nacimiento.");
            isValid = false;
        }

        if(!terminos){
            displayErrorMessage("terminosError", 'Debes aceptar los términos y condiciones');
            isValid = false;
        }

        if (isValid) {
            alert("¡Te has registrado correctamente!");
        }
    });
});
