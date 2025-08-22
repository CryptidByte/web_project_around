const editButton = document.querySelector(".profile__button--edit");
const addButton = document.querySelector(".profile__button--add");

const editPopup = document.querySelector(".popup--edit");
const editPopupCloseButton = document.querySelector(".popup__button--close");

const editForm = editPopup.querySelector(".popup__form--edit");
const nameInput = editForm.elements.name;
const occupationInput = editForm.elements.occupation;
const saveButton = editForm.querySelector(".popup__button--save");

const addPopup = document.querySelector(".popup--add");
const addPopupCloseButton = addPopup.querySelector(".popup__button--close");

const addForm = addPopup.querySelector(".popup__form");
const titleInput = addForm.elements.title;
const linkInput = addForm.elements.link;
const addSaveButton = addForm.querySelector(".popup__button--save");

const imagePopup = document.querySelector(".popup--image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__button--close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

const cardsContainer = document.querySelector(".places");
const cardTemplate = document.getElementById("places-card-template").content;

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

function openPopup(popupElement) {
  popupElement.classList.add("popup__opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup__opened");
}

function createCard(card) {
  const cardFragment = cardTemplate.cloneNode(true);
  const cardElement = cardFragment.querySelector(".places__card");

  const imageElement = cardElement.querySelector(".places__image");
  imageElement.setAttribute("src", card.link);
  imageElement.setAttribute("alt", card.name);

  const titleElement = cardElement.querySelector(".places__name");
  titleElement.textContent = card.name;

  const likeButton = cardElement.querySelector(".places__button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("places__button--liked");
  });

  const deleteButton = cardElement.querySelector(".places__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  imageElement.addEventListener("click", () => {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupCaption.textContent = card.name;
    openPopup(imagePopup);
  });

  return cardElement;
}

function renderCard(card) {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(renderCard);

editButton.addEventListener("click", () => openPopup(editPopup));
editPopupCloseButton.addEventListener("click", () => closePopup(editPopup));

addButton.addEventListener("click", () => openPopup(addPopup));
addPopupCloseButton.addEventListener("click", () => closePopup(addPopup));

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = {
    name: titleInput.value,
    link: linkInput.value,
  };

  renderCard(newCard);
  addForm.reset();
  closePopup(addPopup);
});

imagePopupCloseButton.addEventListener("click", () => closePopup(imagePopup));

editPopup.addEventListener("mousedown", (event) => {
  if (event.target === editPopup) {
    closePopup(editPopup);
  }
});

addPopup.addEventListener("mousedown", (event) => {
  if (event.target === addPopup) {
    closePopup(addPopup);
  }
});

imagePopup.addEventListener("mousedown", (event) => {
  if (event.target === imagePopup) {
    closePopup(imagePopup);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup__opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
});

enableValidation({
  formSelector: ".popup__form", // para querySelectorAll
  inputSelector: ".popup__input", // para buscar inputs dentro de cada form
  submitButtonSelector: ".popup__button", // para encontrar el botón del form
  inactiveButtonClass: "popup__button_disabled", // classList.add/remove
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
