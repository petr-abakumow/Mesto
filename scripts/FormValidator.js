export class FormValidator {
    constructor(settings, formSelector) {
        this._settings = settings;
        this._formSelector = document.querySelector(formSelector);
        
        this._input = this._formSelector.querySelector(this._settings.inputSelector);
        this._inputErrorClass = this._settings.inputErrorClass
        
        this._submitButtonSelector = this._formSelector.querySelector(this._settings.submitButtonSelector);
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
        if (this._formSelector.checkValidity()) {
            this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
            this._submitButtonSelector.disabled = false;
        } else {
            this._submitButtonSelector.classList.add(this._inactiveButtonClass);
            this._submitButtonSelector.disabled = true;
        }
    }

    _setEventListeners() {

        this._inputElements.forEach((input) => {
            input.addEventListener('input', (e) => {
                this._checkInputValidity(this._input);
                this._toggleButtonState();
            });
        });

        this._toggleButtonState();
    }

    enableValidation() {
        this._inputElements = Array.from(this._formSelector.querySelectorAll(this._settings.inputSelector));
            this._setEventListeners();
    }
}