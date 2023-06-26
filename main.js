let timeOut;
let isValidEmail = false;
let email;
let validationMessage = document.getElementById("validation-message");
let modalBackground = document.getElementById("modal-background");
let modalCard = document.getElementById("modal-card");

function validateEmail(input) {
  resetInput(input);

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = emailPattern.test(input.value);

  if (isValid) {
    input.classList.remove("invalid-input"); // Remove the class if email is valid
    input.classList.add("valid-input");
    isValidEmail = true;
    email = input.value;
  } else {
    validationMessage.classList.remove("d-none");
    input.classList.add("invalid-input"); // Add the class if email is invalid
    isValidEmail = false;
  }
}

function debouncedValidateEmail(input) {
  resetInput(input);

  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    validateEmail(input);
  }, 500);
}

function resetInput(input) {
  input.classList.remove("invalid-input"); // Remove the class if email is in-valid
  input.classList.remove("valid-input"); // Remove the class if email is valid
  validationMessage.classList.add("d-none");
}

function showModal() {
  validateEmail(document.getElementById("emailInput"));

  if (isValidEmail) {
    document.getElementById("email").innerHTML = email;
    modalBackground.classList.remove("hide-modal");
    modalCard.classList.remove("hide-modal");
  }
}

function hideModal() {
  modalBackground.classList.add("hide-modal");
  modalCard.classList.add("hide-modal");
}
