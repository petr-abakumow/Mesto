import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
    }
    
    _getInputValues() {
        this._name = document.querySelector('.profile-edit-form__name').value;
        this._job = document.querySelector('.profile-edit-form__job').value;
    }

    close() {
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keydown', () => super._handleEscClose(evt));
        this._name = '';
        this._job = '';
    }

    setEventListeners() {
        document.querySelector('.popup__close').addEventListener('click', () => this.close());

        this._popup.querySelector('.profile-edit-form').addEventListener('submit', (event) => this._submitFormCallback(event));
        
    }
}