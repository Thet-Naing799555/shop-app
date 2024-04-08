import { products } from "../core/data.js"
import { cardGroup, cardItemGroup,  categoryGroup, categoryTemplate, openDrawer } from "../core/selectors.js"
import { cardTotal, cardTotalCost, createCard, renderProduct } from "./products.js"


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
    // event.target.classList.toggle("bg-gray-600")

    const currentBtn = event.target

   

   document.querySelector(".cat-btn.active")?.classList.remove("active")          // ? က    ရှိလား အရင်စစ် ေပး  ရှိမ အလုပ်ဆက်လုပ် မရှိ၇င် error မတက်
 currentBtn.classList.add("active")

    cardGroup.innerHTML=null;
    renderProduct(filterProduct)

   
   
  }
}


export const handleCardGroup = (event) => {
  // event.target.classList.toggle("bg-gray-600")
   if(event.target.classList.contains("add-btn")) {
    event.target.setAttribute("disabled",true)
   
   
    
    const currentProduct = event.target.closest(".product-card")
    currentProduct.querySelector(".add-btn").innerText="Added"
   const currentProductId = parseInt(currentProduct.getAttribute("product-id"))

   const currentImage = currentProduct.querySelector(".product-img")
// console.log(currentImage.getBoundingClientRect());
  // console.log(openDrawer.getBoundingClientRect());

  const animateImg = new Image()
  animateImg.src=currentImage.src
  animateImg.style.position="fixed"
  animateImg.style.top=currentImage.getBoundingClientRect().top + "px"
  animateImg.style.right=currentImage.getBoundingClientRect().right  + "px"
  animateImg.style.bottom=currentImage.getBoundingClientRect().bottom + "px"
  animateImg.style.left=currentImage.getBoundingClientRect().left  + "px"
  animateImg.style.width=currentImage.getBoundingClientRect().width + "px"
  animateImg.style.height=currentImage.getBoundingClientRect().height + "px"
  
  
  document.body.append(animateImg)
  console.log(animateImg.getBoundingClientRect());
  
  const keyframes= [
     {
     top: currentImage.getBoundingClientRect().top + "px" ,
     left :   currentImage.getBoundingClientRect().left + "px"

     },{
      top: openDrawer.querySelector("svg").getBoundingClientRect().top + "px" ,
      left :   openDrawer.querySelector("svg").getBoundingClientRect().left + "px",
      height : "0px",
      width : "0px",
      transform : "rotate(2turn)"
     }
  ]
  const duration = 500
   const addToCardAnimation = animateImg.animate(keyframes,duration)
   
   const handleAnimanationFished = () => {
    cardTotalCost()
    cardTotal()
    animateImg.remove()
    openDrawer.classList.add("animate__tada")

    openDrawer.addEventListener("animationend",() => {
      openDrawer.classList.remove("animate__tada")

      
    })
   }



   addToCardAnimation.addEventListener("finish",handleAnimanationFished)

   const currentProductCard = products.find((x) => x.id === currentProductId )
   cardItemGroup.append(createCard(currentProductCard,1))
     
   }

  
     
}