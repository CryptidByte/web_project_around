export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._imgEl = this._element.querySelector(".places__image");
    this._titleEl = this._element.querySelector(".places__name");
    this._likeBtn = this._element.querySelector(".places__button");
    this._delBtn = this._element.querySelector(".places__delete-button");

    this._imgEl.src = this._link;
    this._imgEl.alt = this._name;
    this._titleEl.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".places__card")
      .cloneNode(true);
  }

  _handleLike() {
    this._likeBtn.classList.toggle("places__button--liked");
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => this._handleLike());
    this._delBtn.addEventListener("click", () => this._handleDelete());
    this._imgEl.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }
}
