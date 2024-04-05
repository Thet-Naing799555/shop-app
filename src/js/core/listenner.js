import { handleCardGroup, handleCategoryGroup } from "../app/categorys.js"
import { cardGroup, categoryGroup } from "./selectors.js"

const listenner = () => {
  categoryGroup.addEventListener("click",handleCategoryGroup)
  cardGroup.addEventListener("click",handleCardGroup)
}

export default listenner