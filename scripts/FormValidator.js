export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputs = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }

  //metodos privados

  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._handleInput(input);
        this._toggleButtonState();
      });
    });
  }

  _handleInput(input) {
    if (!input.validity.valid) {
      this._showInputError(input, this._getCustomMessage(input));
    } else {
      this._hideInputError(input);
    }
  }

  _getCustomMessage(input) {
    const v = input.validity;
    if (v.valueMissing) return "Por favor, rellena este campo.";
    if (v.tooShort) return `Mínimo ${input.minLength} caracteres.`;
    if (v.tooLong) return `Máximo ${input.maxLength} caracteres.`;
    if (v.typeMismatch) {
      if (input.type === "url") return "Introduce una URL válida.";
      if (input.type === "email") return "Introduce un email válido.";
      return "Formato inválido.";
    }
    if (v.patternMismatch)
      return "El formato no coincide con el patrón requerido.";
    return "";
  }

  _getErrorElement(input) {
    return input.nextElementSibling;
  }

  _showInputError(input, message) {
    const errorEl = this._getErrorElement(input);
    if (!errorEl) return;
    input.classList.add(this._config.inputErrorClass);
    errorEl.textContent = message;
    errorEl.classList.add(this._config.errorClass);
  }

  _hideInputError(input) {
    const errorEl = this._getErrorElement(input);
    if (!errorEl) return;
    input.classList.remove(this._config.inputErrorClass);
    errorEl.textContent = "";
    errorEl.classList.remove(this._config.errorClass);
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton(this._submitButton);
    } else {
      this._enableButton(this._submitButton);
    }
  }

  _disableButton(button) {
    button.classList.add(this._config.inactiveButtonClass);
    button.disabled = true;
  }

  _enableButton(button) {
    button.classList.remove(this._config.inactiveButtonClass);
    button.disabled = false;
  }
}
