
export {openModal, closeModal, handleFormSubmit, openFullImage, handleNewCardAdd, inputTitle, inputDescription, profileDescription, profileTitle};

import {popups, inputTitle, inputDescription, profileDescription, profileTitle, popupTypeImage, popupImage, popupCaption, popupNewCard } from './index';

import { createCard, deleteCard, likeCard, placesList } from './cards';

function openModal(pop) {
	pop.classList.add('popup_is-opened');
	pop.classList.add('popup_is-animated');
	document.addEventListener('keydown', closeByEsc);
	pop.addEventListener('click', closeByOverley);
}

function closeModal() {
	popups.forEach(pop => {
		if(pop.classList.contains('popup_is-opened')) {
		pop.classList.remove('popup_is-opened');
		pop.classList.remove('popup_is-animated');
		document.addEventListener('keydown', closeByEsc);
		pop.addEventListener('click', closeByOverley);
	} else return null;
	})
}

function closeByEsc(evt) {
	if (evt.key === 'Escape') {
		closeModal(document.querySelector('.popup_is-opened'))
	}
}

function closeByOverley(event) {
	if (event.currentTarget === event.target || event.target.classList.contains('popup_is-opened')) {
		closeModal(event.currentTarget);
	}
}

function handleFormSubmit(evt) {
	evt.preventDefault();
	profileTitle.textContent = inputTitle.value;
	profileDescription.textContent = inputDescription.value;
	closeModal()
}

function openFullImage (evt) {
	popupImage.src = evt.target.src;
	popupImage.alt = evt.target.alt;
	popupCaption.textContent = evt.target.alt;
	openModal(popupTypeImage);
}

function handleNewCardAdd (evt) {
	evt.preventDefault();
	const imgNameInput = document.querySelector('.popup__input_type_card-name');
	const linkInput = document.querySelector('.popup__input_type_url');
	const cards = {
		name: imgNameInput.value,
		link: linkInput.value,
	};
	const newCard = createCard(cards, deleteCard, likeCard, openFullImage);
	placesList.prepend(newCard);

	closeModal(popupNewCard);
	imgNameInput.value = '';
	linkInput.value = '';
}
