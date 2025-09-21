export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popup.querySelector(".popup__button--close");
  }

  open() {
    this._popup.classList.add("popup__opened");
  }

  close() {
    this._popup.classList.remove("popup__opened");
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => this._handleCloseBtn(evt));
    this._popup.addEventListener("mousedown", (evt) =>
      this._handleClickOverlay(evt)
    );
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleCloseBtn(evt) {
    if (evt.target.classList.contains("popup__button--close")) {
      this.close();
    }
  }

  _handleClickOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
