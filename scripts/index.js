const cardTemplate = document.querySelector("#card-template").content;


// @todo: DOM узлы
const placesList = document.querySelector(".places__list");


// @todo: Функция создания карточки
function createCard(card, deleteCard) {
	const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
	const cardTitle = cardElement.querySelector('.card__title');
	const cardImage = cardElement.querySelector('.card__image');
	const cardDeleteButton = cardElement.querySelector('.card__delete-button');
	cardTitle.textContent = card.name;
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardDeleteButton.addEventListener('click', deleteCard);
	return cardElement;
}


// @todo: Функция удаления карточки
function deleteCard (event) {
	event.target.closest('.card').remove();
}


// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
	const cards = createCard(card, deleteCard);
	placesList.append(cards);
})
