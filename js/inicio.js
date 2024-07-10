function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayErrorMessage (elementId, message){
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages(){
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event)=>{

        event.preventDefault();


        resetErrorMessages();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {

            alert("¡Te has registrado correctamente!");

        }
    });
} );

