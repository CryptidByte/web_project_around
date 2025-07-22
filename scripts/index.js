const editButton = document.querySelector(".profile__button--edit");
const editPopup = document.querySelector(".popup--edit");
const closeButton = document.querySelector(".popup__button--close");

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
  console.log(deleteButton);
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

const addButton = document.querySelector(".profile__button--add");
const addPopup = document.querySelector(".popup--add");
const addPopupCloseButton = addPopup.querySelector(".popup__button--close");
const addForm = addPopup.querySelector(".popup__form");
const titleInput = addForm.elements.title;
const linkInput = addForm.elements.link;

function openPopup(popupElement) {
  popupElement.classList.add("popup__opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup__opened");
}

editButton.addEventListener("click", () => openPopup(editPopup));
closeButton.addEventListener("click", () => closePopup(editPopup));

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

const imagePopup = document.querySelector(".popup--image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__button--close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

imagePopupCloseButton.addEventListener("click", () => closePopup(imagePopup));
