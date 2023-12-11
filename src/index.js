import '../src/index.css';
import { initialCards, deleteCard, createCard} from './cards';
import { openModal, closeModal, handleFormSubmit, handleNewCardAdd } from './modals';
export {popups, inputTitle, inputDescription, profileDescription, profileTitle, popupTypeImage, popupImage, popupCaption, placesList, popupNewCard }

const popups = document.querySelectorAll('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const inputTitle = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption  = document.querySelector('.popup__caption');
const placesList = document.querySelector(".places__list");
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const addProfileButton = document.querySelector('.profile__add-button');
const buttonClose = document.querySelectorAll('.popup__close');

initialCards.forEach((card) => {
	const cards = createCard(card, deleteCard);
	placesList.append(cards);
})

buttonClose.forEach((butClose) => {
	butClose.addEventListener('click', () =>  closeModal())
	})

buttonEditProfile.addEventListener('click', function () {
	inputTitle.value = profileTitle.textContent;
	inputDescription.value = profileDescription.textContent;
	openModal(popupEditProfile)
})

addProfileButton.addEventListener('click', function () {
	popupImage.src = '';
	popupImage.alt = '';
	popupCaption.textContent = '';
	openModal(popupNewCard);
})

popupEditProfile.addEventListener('submit', handleFormSubmit);
popupNewCard.addEventListener('submit', handleNewCardAdd);












