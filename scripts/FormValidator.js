export class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        
        this._input = this._settings.inputSelector;
        this._inputErrorClass = this._settings.inputErrorClass
        
        this._submitButtonSelector = this._settings.submitButtonSelector;
        this._inactiveButtonClass = this._settings.inactiveButtonClass;
        
    }

    _showError() {

        document.querySelector(`#${document.querySelector(this._input).id}-error`).textContent = document.querySelector(this._input).validationMessage;

        console.log(document.querySelector(this._input))
        
        document.querySelector(this._input).classList.add(this._inputErrorClass);
    }

    _hideError() {

        document.querySelector(`#${document.querySelector(this._input).id}-error`).textContent = '';
        
        document.querySelector(this._input).classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(e) {
        if (e.checkValidity()) {
           this._hideError();
        } else {
           this._showError();
        }
    }

    _toggleButtonState() {
        if (document.querySelector(this._formElement).checkValidity()) {
            document.querySelector(this._formElement).querySelector(this._submitButtonSelector).classList.remove(this._inactiveButtonClass);
            document.querySelector(this._formElement).querySelector(this._submitButtonSelector).disabled = false;
        } else {
            document.querySelector(this._formElement).querySelector(this._submitButtonSelector).classList.add(this._inactiveButtonClass);
            document.querySelector(this._formElement).querySelector(this._submitButtonSelector).disabled = true;
        }
    }

    _setEventListeners() {

        this._inputElements.forEach((input) => {
            input.addEventListener('input', (e) => {
                this._checkInputValidity(e.target);
                this._toggleButtonState();
            });
        });

        this._toggleButtonState();
    }

    enableValidation() {
        this._inputElements = Array.from(document.querySelector(this._formElement).querySelectorAll(this._input));
            this._setEventListeners();
    }
}