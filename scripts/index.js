import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  openPopup,
  closePopup,
  enableOverlayClose,
  makeProfileSubmitHandler,
  makeAddCardSubmitHandler,
} from "./utils.js";

const cardsContainer = document.querySelector(".places");

const editPopup = document.querySelector(".popup--edit");
const addPopup = document.querySelector(".popup--add");
const imagePopup = document.querySelector(".popup--image");
enableOverlayClose(editPopup);
enableOverlayClose(addPopup);
enableOverlayClose(imagePopup);

const editButton = document.querySelector(".profile__button--edit");
const addButton = document.querySelector(".profile__button--add");

const profileNameEl = document.querySelector(".profile__name");
const profileOccupationEl = document.querySelector(".profile__occupation");

const editForm = editPopup.querySelector(".popup__form--edit");
const addForm = addPopup.querySelector(".popup__form--add");
const nameInput = editForm.elements.name;
const occupationInput = editForm.elements.occupation;

const titleInput = addForm.elements.title;
const linkInput = addForm.elements.link;

const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// configuraciones

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button--save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

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

function createCardElement(cardData) {
  const card = new Card(cardData, "#places-card-template");

  card.setImageClick((name, link) => {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openPopup(imagePopup);
  });

  return card.generateCard();
}

function renderInitialCards() {
  initialCards.forEach((data) => {
    const cardEl = createCardElement(data);
    cardsContainer.append(cardEl);
  });
}

function addNewCard(cardData) {
  const cardEl = createCardElement(cardData);
  cardsContainer.prepend(cardEl);
}

// event listeners
editButton.addEventListener("click", () => {
  editForm.reset();
  openPopup(editPopup);
});

addButton.addEventListener("click", () => {
  addForm.reset();
  openPopup(addPopup);
});

const handleProfileFormSubmit = makeProfileSubmitHandler({
  nameInput,
  occupationInput,
  profileNameEl,
  profileOccupationEl,
  editPopup,
});
editForm.addEventListener("submit", handleProfileFormSubmit);

const handleAddCardFormSubmit = makeAddCardSubmitHandler({
  titleInput,
  linkInput,
  addPopup,
  onAddCard: addNewCard,
});
addForm.addEventListener("submit", handleAddCardFormSubmit);

// inicializacion
renderInitialCards();

const editFormValidator = new FormValidator(validationConfig, editForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
