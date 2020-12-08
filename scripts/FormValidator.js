export class FormValidator {
    constructor(settings, formSelector) {
        this._settings = settings;
        this._form = document.querySelector(formSelector);
        
        this._input = this._form.querySelector(this._settings.inputSelector);
        this._inputErrorClass = this._settings.inputErrorClass
        
        this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
        this._inactiveButtonClass = this._settings.inactiveButtonClass;
        
    }

    _showError(inputElement) {

        document.querySelector(`#${inputElement.id}-error`).textContent = inputElement.validationMessage;
        
        inputElement.classList.add(this._inputErrorClass);
    }

    _hideError(inputElement) {

        document.querySelector(`#${inputElement.id}-error`).textContent = '';
        
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement) {
        if (inputElement.checkValidity()) {
           this._hideError(inputElement);
        } else {
           this._showError(inputElement);
        }
    }

    _toggleButtonState() {
        if (this._form.checkValidity()) {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        }
    }

    _setEventListeners() {

        this._inputElements.forEach((input) => {
            input.addEventListener('input', (e) => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });

        this._toggleButtonState();
    }

    enableValidation() {
        this._inputElements = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
            this._setEventListeners();
    }
}