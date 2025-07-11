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
