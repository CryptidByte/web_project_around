function getForms(config) {
  return Array.from(document.querySelectorAll(config.formSelector));
}

function getInputs(formElement, config) {
  return Array.from(formElement.querySelectorAll(config.inputSelector));
}

function getSubmitButton(formElement, config) {
  return formElement.querySelector(config.submitButtonSelector);
}

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = true;
}

function enableButton(button, config) {
  button.classList.remove(config.inactiveButtonClass);
  button.disabled = false;
}

function getErrorElement(input) {
  return input.nextElementSibling; // el <span class="popup__error"> debajo
}

function getErrorMessage(input) {
  const v = input.validity;
  if (v.valueMissing) return "Por favor, rellena este campo.";
  if (v.tooShort) return `Mínimo ${input.minLength} caracteres.`;
  if (v.tooLong) return `Máximo ${input.maxLength} caracteres.`;
  if (v.typeMismatch) {
    if (input.type === "email")
      return "Por favor, ingresa una direccion de email.";
    if (input.type === "url") return "Por favor, ingresa una direccion web.";
    return "Valor inválido.";
  }
}

function showInputError(input, config) {
  var el = getErrorElement(input);
  if (el) {
    el.textContent = getErrorMessage(input);
    el.classList.add(config.errorClass);
  }
  input.classList.add(config.inputErrorClass);
}

function hideInputError(input, config) {
  var el = getErrorElement(input);
  if (el) {
    el.textContent = "";
    el.classList.remove(config.errorClass);
  }
  input.classList.remove(config.inputErrorClass);
}

function enableValidation(config) {
  const forms = getForms(config);

  forms.forEach(function (form) {
    const inputs = getInputs(form, config);
    const button = getSubmitButton(form, config);

    function toggleButtonState() {
      const isFormValid = inputs.every(function (input) {
        return input.validity.valid;
      });
      if (isFormValid) {
        enableButton(button, config);
      } else {
        disableButton(button, config);
      }
    }

    function validateField(input) {
      if (!input.validity.valid) {
        showInputError(input, config);
      } else {
        hideInputError(input, config);
      }
      toggleButtonState();
    }

    inputs.forEach(function (input) {
      input.addEventListener("input", function () {
        validateField(input);
      });
      input.addEventListener("blur", function () {
        validateField(input);
      });
    });

    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        inputs.forEach(function (input) {
          validateField(input);
        });
      }
    });

    toggleButtonState();
  });
}
