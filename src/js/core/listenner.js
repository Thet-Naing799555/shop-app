import { cardDelehandler } from "../app/card.js"
import { handleCardGroup, handleCategoryGroup } from "../app/categorys.js"
import { cardDeleBtn, cardGroup, cardItemGroup, categoryGroup } from "./selectors.js"

const listenner = () => {
  categoryGroup.addEventListener("click",handleCategoryGroup)
  cardGroup.addEventListener("click",handleCardGroup)
  cardItemGroup.addEventListener("click",cardDelehandler)
}

export default listenner