import '../index.css';
import { initialCards, deleteCard, createCard, likeCard, placesList} from './cards';
import { openModal, closeModal, handleProfileFormSubmit, handleNewCardAdd, openFullImage, inputTitle, inputDescription, profileDescription, profileTitle, popupNewCard } from './modals';

const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonNewCard = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = document.forms['edit-profile'];
const newCardForm = document.forms['new-place'];

initialCards.forEach((card) => {
	const cards = createCard(card, deleteCard, openFullImage, likeCard);
	placesList.append(cards);
})

closeButtons.forEach((butClose) => {
	butClose.addEventListener('click', closeModal)
	})

buttonEditProfile.addEventListener('click', function () {
	inputTitle.value = profileTitle.textContent;
	inputDescription.value = profileDescription.textContent;
	openModal(popupEditProfile)
})

buttonNewCard.addEventListener('click', function () {
	openModal(popupNewCard);
})

profileForm.addEventListener('submit', handleProfileFormSubmit);
newCardForm.addEventListener('submit', handleNewCardAdd);












