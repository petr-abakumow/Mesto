export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            const openPopup = document.querySelector('.popup_open');
    
            this.close(openPopup);
        }
    }

    open() {
        this._popup.classList.add('popup_open');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    close() {
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keydown', () => this._handleEscClose(evt));
    }

    setEventListeners() {
        if (document.querySelector('.popup__close')) {
        document.querySelector('.popup__close').addEventListener('click', () => this.close());
        }

        if (document.querySelector('.popup__close-image')) {
            document.querySelector('.popup__close-image').addEventListener('click', () => this.close());
        }
    }
}