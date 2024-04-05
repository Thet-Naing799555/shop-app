import { productCatogory, products } from "../core/data.js"
import { cardGroup, productTemplate } from "../core/selectors.js"

export const createProducts = ({image,id,title,description,price,rating}) => {
  const template = productTemplate.content.cloneNode(true)
  template.querySelector(".product-img").src=image
  template.querySelector(".product-card").setAttribute("product-id",id)
  template.querySelector(".product-title").innerText=title
  template.querySelector(".product-destription").innerText=description
  template.querySelector(".price").innerText=price
  template.querySelector(".rate").innerText=rating.rate
  template.querySelector(".count").innerText=rating.count


  return template
}


export const renderProduct = (product) => {

  product.forEach( p => {
   
    cardGroup.append(createProducts(p))
  });
}