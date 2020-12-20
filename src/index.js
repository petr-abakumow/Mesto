import './pages/index.css';
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { Popup } from './components/Popup.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__info-edit-button');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
const addElement = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_add-element-js');
const popupAddElementClose = document.querySelector('.popup-add-element-close-js');
const nameCardsInputForm = document.querySelector('.profile-edit-form__name_item-place-js');
const linkCardsInputForm = document.querySelector('.profile-edit-form__job_item-link-js');
const elementContainer = document.querySelector('.elements__list');
const popupImageContainer = document.querySelector('.popup_image-js');
const popupEditInfo = document.querySelector('.popup-edit-form-js');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const settings = {
    inputSelector: ('.form-input-js'),
    submitButtonSelector: '.profile-edit-form__button',
    inactiveButtonClass: 'profile-edit-form__button_invalid',
    inputErrorClass: 'profile-edit-form__invalid',
    errorClass: 'popup__error_visible'
};

const userInform = new UserInfo({
    nameForm: profileName,
    jobForm: profileJob
});

popupOpenButton.addEventListener('click', () => {
    userInform.getUserInfo();
    const popupImageOpened = new Popup(popupEditInfo);
    popupImageOpened.open();
});

const popupImageOpened = new Popup(popup);
popupImageOpened.setEventListeners();

const profileEditFormValid = new FormValidator(settings, '.profile-edit-form-valid-js');
profileEditFormValid.enableValidation();

const formSabmitInfo = new PopupWithForm(popupEditInfo, (event) => {
    event.preventDefault();
    userInform.setUserInfo();
    const popupImageOpened = new Popup(popupEditInfo);
    popupImageOpened.close();
});

formSabmitInfo.setEventListeners();

const formSabmitAddItem = new PopupWithForm(popupAddElement, (event) => {
    event.preventDefault();
    const listItem = new Card({ 
        name: nameCardsInputForm.value, 
        link: linkCardsInputForm.value 
    }, '#element-container-js', (data) => {
        const popupImageOpened = new PopupWithImage(data, popupImageContainer);
        popupImageOpened.open();
    });

    elementContainer.prepend(listItem.render(elementContainer));
    const popupImageOpened = new Popup(popupAddElement);
    popupImageOpened.close();
});

formSabmitAddItem.setEventListeners();

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const listItem = new Card(item, '#element-container-js', (data) => {
                const popupImageOpened = new PopupWithImage(data, popupImageContainer);
                popupImageOpened.open();
            });
            const cardElement = listItem.render();
            cardList.addItem(cardElement);
        },
        
    }, 
    elementContainer
);

cardList.renderItems();

const popupImageClosed = new Popup(popupImageContainer);
popupImageClosed.setEventListeners();

const addCardFormValid = new FormValidator(settings, '.profile-edit-form_item-js');
addCardFormValid.enableValidation();

addElement.addEventListener('click', () => {
    nameCardsInputForm.value = '';
    linkCardsInputForm.value = '';
    const popupImageOpened = new Popup(popupAddElement);
    popupImageOpened.open();
});

popupAddElementClose.addEventListener('click', () => {
    const popupImageOpened = new Popup(popupAddElement);
    popupImageOpened.close();
});

document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_open')) {
    const popupImageOpened = new Popup(evt.target);
    popupImageOpened.close();
    }
});
