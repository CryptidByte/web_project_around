const cardsContainer = document.querySelector(".places");

const editPopup = document.querySelector(".popup--edit");
const addPopup = document.querySelector(".popup--add");
const imagePopup = document.querySelector(".popup--image");

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

export {
  cardsContainer,
  editPopup,
  addPopup,
  imagePopup,
  editButton,
  addButton,
  profileNameEl,
  profileOccupationEl,
  editForm,
  addForm,
  nameInput,
  occupationInput,
  titleInput,
  linkInput,
  popupImage,
  popupCaption,
  validationConfig,
  initialCards,
};
