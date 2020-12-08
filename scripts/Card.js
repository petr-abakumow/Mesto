export class Card {
    constructor(data, templateSelector, popupImageOpen) {
       this._data = data;
       this._template = document.querySelector(templateSelector).content.querySelector('.elements-item');
       this._popupImageOpen = popupImageOpen;
    }

    _delete() {
        this._content.remove();
    }

    _like() {
        this._cardLike.classList.toggle('elements-item__like_active');
    }

    _popapOpened() {
        this._popupImageOpen(this._data);
    }

    render(elementContainer) {
        this._content = this._template.cloneNode(true);
        this._image = this._content.querySelector('.elements-item__image');
        this._cardLike = this._content.querySelector('.elements-item__like');
        this._content.querySelector('.elements-item__title').textContent = this._data.name;
        this._image.src = this._data.link;
        this._image.alt = this._data.name;

        this._content.querySelector('.elements-item__trash').addEventListener('click', () => this._delete());

        this._cardLike.addEventListener('click', () => this._like());

        this._image.addEventListener('click', () => this._popapOpened());

        return this._content
    };
   
}
