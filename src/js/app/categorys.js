import { products } from "../core/data.js"
import { cardGroup, categoryGroup, categoryTemplate } from "../core/selectors.js"
import { renderProduct } from "./products.js"


export const createCategory = (categoryName) => {
const template = categoryTemplate.content.cloneNode(true)
template.querySelector(".cat-btn").innerText = categoryName
return template

}



export const renderCategory = (categories) => {
categories.forEach((cat) => {
    categoryGroup.append(createCategory(cat))
})
}

export const handleCategoryGroup =(event) => {
   const currentCat = event.target.innerText
  if(event.target.classList.contains("cat-btn")) {
    const filterProduct = products.filter((x) => x.category === currentCat || currentCat === "All" )

    cardGroup.innerHTML=null;
    renderProduct(filterProduct)
   
  }
}


export const handleCardGroup = (event) => {
   if(event.target.classList.contains("add-btn")) {
    const currentProduct = event.target.closest(".product-card")
   const currentProductId = parseInt(currentProduct.getAttribute("product-id"))
   

   const currentProductCard = products.find((x) => x.id === currentProductId )
   console.log(currentProductCard.price);
   }
     
}