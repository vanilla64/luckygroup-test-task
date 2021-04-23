import './index.css'

import {
  requestUrl,
  cardList,
  page,
  loading,
  noData,
  windowHeight
} from "./scripts/constants";

import { Api } from "./scripts/components/Api";
import { Card } from "./scripts/components/Card";
import { Section } from "./scripts/components/Section";

loading.classList.toggle('loading_visible')

let pageNumber = 1
const cardLimit = 50
console.log(`Pge num top: ${pageNumber}`)

const api = new Api(requestUrl)
const itemRenderer = new Section({
  renderer: (item) => itemRenderer.addItem(createNewCard(item))
}, cardList)

api.getCards(pageNumber, cardLimit)
  .then(res => {
  const cards = res
  itemRenderer.renderItems(cards)
  })
  .catch((err) => console.log(err))
  .finally(() => loading.classList.toggle('loading_visible'))


// render card
function createNewCard(data) {
  const newCard = new Card(data, '#card-template')
  return newCard.renderNewCard()
}
// listener callback
function renderNewCardsBeforeScroll() {
  let windowRelativeBottom = window.pageYOffset
  const pageBottom = page.scrollHeight - windowHeight

  if (windowRelativeBottom === pageBottom) {

    if (pageNumber >= 15) {
      return noData.classList.add('no-data_visible')
    }

    pageNumber++
    loading.classList.toggle('loading_visible')
    document.body.style.overflow = 'hidden'
    api.getCards(pageNumber, cardLimit).then(res => {
      itemRenderer.renderItems(res)
    })
      .then(() => {
        loading.classList.toggle('loading_visible')
        document.body.style.overflow = 'auto'
      }).catch((err) => console.log(err))
    return
  }
}

// scroll listener
window.addEventListener('scroll', () => {
  renderNewCardsBeforeScroll()
})
