import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import {
  handleCardClick,
  handleEditFormSubmit,
  handleAddFormSubmit,
} from "./utils.js";

import {
  cardsContainer,
  editButton,
  addButton,
  editForm,
  addForm,
  validationConfig,
  initialCards,
} from "./constants.js";

initialCards.forEach((data) => {
  const card = new Card(data, "#places-card-template", handleCardClick);
  const cardEl = card.generateCard();
  cardsContainer.append(cardEl);
});

const editPopup = new PopupWithForm(".popup--edit", handleEditFormSubmit);
editPopup.setEventListeners();

const addPopup = new PopupWithForm(".popup--add", handleAddFormSubmit);
addPopup.setEventListeners();

const imagePopup = new PopupWithImage(".popup--image");
imagePopup.setEventListeners();

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

editButton.addEventListener("click", () => editPopup.open());

addButton.addEventListener("click", () => addPopup.open());
