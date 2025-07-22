const editButton = document.querySelector(".profile__button--edit");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button--close");

function openPopup() {
  popup.classList.add("popup__opened");
}

function closePopup() {
  popup.classList.remove("popup__opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
];

const cardsContainer = document.querySelector(".places");
const cardTemplate = document.getElementById("places-card-template").content;

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);

  const imageElement = cardElement.querySelector(".places__image");
  imageElement.setAttribute("src", card.link);
  imageElement.setAttribute("alt", card.name);

  const titleElement = cardElement.querySelector(".places__name");
  titleElement.textContent = card.name;

  return cardElement;
}

function renderCard(card) {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(renderCard);
