import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__info-edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const nameInput = document.querySelector('.profile-edit-form__name');
const jobInput = document.querySelector('.profile-edit-form__job');
const popupForm = document.querySelector('.profile-edit-form');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
const addElement = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_add-element-js');
const popupAddElementClose = document.querySelector('.popup_add-element-close-js');
const nameCardsInputForm = document.querySelector('.profile-edit-form__name_item-place-js');
const linkCardsInputForm = document.querySelector('.profile-edit-form__job_item-link-js');
const addCardForm = document.querySelector('.profile-edit-form_item-js');
const elementContainer = document.querySelector('.elements__list');
const addElementTemplateName = document.querySelector('.elements-item__title');
const popupImageContainer = document.querySelector('.popup_image-js');
const popupImage = document.querySelector('.popup__image');
const popupImageClose = document.querySelector('.popup__close-image');
const popupImageTitle = document.querySelector('.popup-image-container__title');
const popupList = document.querySelectorAll('.popup');

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

function togglePopup(popup) {
    popup.classList.toggle('popup_open');

    if (popup.classList.contains('popup_open')) {
        document.addEventListener('keydown', closePopupEscape);
    } else {
        document.removeEventListener('keydown', closePopupEscape);
    }
};

popupOpenButton.addEventListener('click', editForm);

popupCloseButton.addEventListener('click', editForm);

function editForm() {

    const profileEditFormValid = new FormValidator(settings, '.profile-edit-form-valid-js');
    profileEditFormValid.enableValidation();

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopup(popup);
};

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup(popup);
});

function popupImageOpen(data) {
popupImageTitle.textContent = data.name;
popupImage.src = data.link;
popupImage.alt = data.name;
togglePopup(popupImageContainer);
};

const getCard = (data) => {

    const listItem = new Card(data, '#element-container-js', popupImageOpen);
    listItem.render(elementContainer);
};

initialCards.forEach(getCard);

popupImageClose.addEventListener('click', () => togglePopup(popupImageContainer));

const openAddCards = () => {

    const addCardFormValid = new FormValidator(settings, '.profile-edit-form_item-js');
    addCardFormValid.enableValidation();

    nameCardsInputForm.value = '';
    linkCardsInputForm.value = '';
    togglePopup(popupAddElement);
};

addElement.addEventListener('click', openAddCards);
popupAddElementClose.addEventListener('click', openAddCards);

addCardForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const item = getCard({
        name: nameCardsInputForm.value,
        link: linkCardsInputForm.value
    });

    togglePopup(popupAddElement);
});


function closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup_open')) {
        togglePopup(evt.target);
    }
};

document.addEventListener('click', closePopupOverlay);


function closePopupEscape(evt) {
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_open');

        if (openPopup.classList.contains('popup-edit-form-js')) {
        togglePopup(popup);
        }

        if (openPopup.classList.contains('popup_add-element-js')) {
            togglePopup(popupAddElement);
            }

        if (openPopup.classList.contains('popup_image-js')) {
            togglePopup(popupImageContainer);
            }
    }
    
};

const settings = {
    inputSelector: ('.form-input-js'),
    submitButtonSelector: '.profile-edit-form__button',
    inactiveButtonClass: 'profile-edit-form__button_invalid',
    inputErrorClass: 'profile-edit-form__invalid',
    errorClass: 'popup__error_visible'
  }





