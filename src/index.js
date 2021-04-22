import './index.css'

import {
  requestUrl,
  cardList
} from "./scripts/constants";

import { Api } from "./scripts/components/Api";
import { Card } from "./scripts/components/Card";
import { Section } from "./scripts/components/Section";

const api = new Api(requestUrl)

api.getCards().then(res => {
    const cards = res.slice(0, 12)
  console.log(cards)
  const itemRenderer = new Section({
      items: cards,
      renderer: (item) => {
        itemRenderer.addItem(
          createNewCard(item)
        )
      }
    },
    cardList)

  itemRenderer.renderItems()
  })

// render card
function createNewCard(data) {
  const newCard = new Card(data, '#card-template')
  return newCard.renderNewCard()
}