import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);

        this._data = data;
    }

    open() {
        document.querySelector('.popup-image-container__title').textContent = this._data.name;
        document.querySelector('.popup__image').src = this._data.link;
        document.querySelector('.popup__image').alt = this._data.name;
        this._popup.classList.add('popup_open');
        document.addEventListener('keydown', (evt) => super._handleEscClose(evt));
    }
}