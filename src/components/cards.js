const initialCards = [
    {
      name: 'Уффф, кефтеме',
      link: 'https://plus.unsplash.com/premium_photo-1695239201521-49524a277499?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Девушка с иероглифами',
      link: 'https://images.unsplash.com/photo-1694939200168-1eab019da48d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Солнце, море, жара',
      link: 'https://images.unsplash.com/photo-1698402532179-990fb9832878?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Пустыня кайфа',
      link: 'https://images.unsplash.com/photo-1693753310466-bd53501ba2a9?auto=format&fit=crop&q=80&w=1893&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Вези меня олень.. В свою страну..',
      link: 'https://images.unsplash.com/photo-1698970992928-102b3f3cea9a?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: '2024',
      link: 'https://images.unsplash.com/photo-1702274397667-14596faf1cd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];

import { openFullImage } from "./modals";

export {initialCards, createCard, deleteCard, likeCard, placesList }

const placesList = document.querySelector(".places__list");

function createCard(card, deleteCard, openFullImage, likeCard) {
  const cardTemplate = document.querySelector("#card-template").content;
	const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
	const cardTitle = cardElement.querySelector('.card__title');
	const cardImage = cardElement.querySelector('.card__image');
	const cardDeleteButton = cardElement.querySelector('.card__delete-button');
	const likeButton = cardElement.querySelector('.card__like-button');
  cardTitle.textContent = card.name;
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardImage.addEventListener('click', openFullImage);
	cardDeleteButton.addEventListener('click', deleteCard);
	likeButton.addEventListener('click', likeCard);
	return cardElement;
}

function deleteCard(event) {
	event.target.closest('.card').remove();
}

function likeCard (evt) {
	evt.target.classList.toggle('card__like-button_is-active');

}