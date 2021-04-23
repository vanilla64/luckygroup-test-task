export class Card {
  constructor(data, templateSelector) {
    this._data = data
    this._templateSelector = templateSelector
  }

  _getTemplateCard() {
    this._cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)

    return this._cardTemplate
  }

  renderNewCard() {
    const { url, title } = this._data
    this._card = this._getTemplateCard()

    this._cardImage = this._card.querySelector('.card__image')
    this._cardTitle = this._card.querySelector('.card__text')

    this._cardImage.src = url
    this._cardImage.alt = title
    this._cardTitle.textContent = title

    return this._card
  }
}
