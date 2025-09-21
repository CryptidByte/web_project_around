import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import { cardsContainer } from "./constants.js";

export function handleCardClick(name, link) {
  const imagePopup = new PopupWithImage(".popup--image");
  imagePopup.open(name, link);
  imagePopup.setEventListeners();
}

export function handleEditFormSubmit({ name, occupation }) {
  const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    aboutSelector: ".profile__occupation",
  });
  userInfo.setUserInfo(name, occupation);
}

export function handleAddFormSubmit({ title, link }) {
  const newCard = new Card(
    { name: title, link },
    "#places-card-template",
    handleCardClick
  );

  const cardEl = newCard.generateCard();
  cardsContainer.append(cardEl);
}
