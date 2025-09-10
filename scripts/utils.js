export function openPopup(popup) {
  popup.classList.add("popup__opened");
  document.addEventListener("keydown", _handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup__opened");
  document.removeEventListener("keydown", _handleEscClose);
}

function _handleEscClose(evt) {
  if (evt.key !== "Escape") return;
  const opened = document.querySelector(".popup__opened");
  if (opened) closePopup(opened);
}

export function enableOverlayClose(popup) {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target === evt.currentTarget || // overlay
      evt.target.classList.contains("popup__button--close") // boton X
    ) {
      closePopup(popup);
    }
  });
}

export function makeProfileSubmitHandler({
  nameInput,
  occupationInput,
  profileNameEl,
  profileOccupationEl,
  editPopup,
}) {
  return function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = nameInput.value;
    profileOccupationEl.textContent = occupationInput.value;
    closePopup(editPopup);
  };
}

export function makeAddCardSubmitHandler({
  titleInput,
  linkInput,
  addPopup,
  onAddCard,
}) {
  return function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    onAddCard({ name: titleInput.value, link: linkInput.value });
    evt.target.reset();
    closePopup(addPopup);
  };
}
