import { productCatogory, products } from "../core/data.js"
import { cardGroup, cardTemplate, cardTotalPrice, productTemplate } from "../core/selectors.js"



export const createProducts = ({image,id,title,description,price,rating}) => {
  const template = productTemplate.content.cloneNode(true)
  template.querySelector(".product-img").src=image
  template.querySelector(".product-card").setAttribute("product-id",id)
  template.querySelector(".product-title").innerText=title
  template.querySelector(".product-destription").innerText=description
  template.querySelector(".price").innerText=price
  template.querySelector(".rate").innerText=rating.rate
  template.querySelector(".count").innerText=rating.count

 

  template.querySelector(".product-star").innerHTML = renderStar(Math.round(rating.rate))


  return template
}

export const renderStar = (rate) => {
  let star = ""
  for(let i=1 ; i <= 5 ; i++) {

   star += ` <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   fill="currentColor"
   class="w-4 h-4 ${ i<= rate ? 'fill-gray-700' : 'fill-gray-400'}"
 >
   <path
     fill-rule="evenodd"
     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
     clip-rule="evenodd"
   />
 </svg>`

  }
  return star
}




export const renderProduct = (product) => {

  product.forEach( p => {
   
    cardGroup.append(createProducts(p))
  });
}


export const createCard = (product,quantity) => {
  const template = cardTemplate.content.cloneNode(true)

     template.querySelector(".card-item-img").src = product.image
     template.querySelector(".product-title").innerText = product.title
     template.querySelector(".product-price").innerText = product.price
     template.querySelector(".card-quantity").innerText = quantity

     cardTotal()
    
     return template
}

export const cardTotal = () => {
   const total = document.querySelectorAll(".card-item").length
   document.querySelector(".card-total").innerText=total
   document.querySelector(".inCard").innerText = total
   
}

export const cardTotalCost = () => {
  let totalPrice = 0
  const total = [...document.querySelectorAll(".product-price")]
  // total.reduce((pv,{innerText}) => pv+parseFloat(innerText),0)
  total.forEach((x) => { totalPrice += parseFloat(x.innerText)} )
 console.log(totalPrice);
 cardTotalPrice.innerText=totalPrice.toFixed(2)
}