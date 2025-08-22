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

function enableValidation(config) {
  const forms = getForms(config);

  forms.forEach((form) => {
    const inputs = getInputs(form, config);
    const button = getSubmitButton(form, config);

    function toggleButtonState() {
      const isFormValid = inputs.every((input) => input.validity.valid);
      if (isFormValid) {
        enableButton(button, config);
      } else {
        disableButton(button, config);
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("input", toggleButtonState);
    });
  });
}
