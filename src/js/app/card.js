
import Swal from "sweetalert2"
import { cardTotal, cardTotalCost } from "./products";
import { cardGroup } from "../core/selectors";


export const cardDelehandler = (event) => {
    if(event.target.classList.contains("card-dele-btn")) {
       const currentCard = event.target.closest(".card-item")
       const currentCardId = currentCard.getAttribute("product-card-id")
       
       const currentProduct = cardGroup.querySelector(`[product-id='${currentCardId}']`)
       console.log(currentProduct);
       
     
      


       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            currentCard.remove()
          cardTotalCost()
          cardTotal()
          if (currentProduct) {
            const currentProductBtn = currentProduct.querySelector(".add-btn")
            currentProductBtn.removeAttribute("disabled")
            currentProductBtn.innerText="Add To Card"
           }
          
        }
      });
    } else if (event.target.classList.contains("row-q-sub")){
             subQuantity(event)
    
    }else if (event.target.classList.contains("row-q-add")){
              
              addQuantity(event)
    }
}


   export const addQuantity = (event) => {
  const currentCard = event.target.closest(".card-item")
 const currentQuantity = currentCard.querySelector(".card-quantity");


const currentCost =  currentCard.querySelector(".product-cost")
 currentQuantity.innerText = parseInt(currentQuantity.innerText)+1
 currentCard.querySelector(".product-price").innerText= (currentCost.innerText * parseInt(currentQuantity.innerText)).toFixed(2)
 cardTotalCost()
}

export const subQuantity = (event) => {
   
 
  
  const currentCard = event.target.closest(".card-item")
 const currentQuantity = currentCard.querySelector(".card-quantity");
 
 
 const currentCost =  currentCard.querySelector(".product-cost")
 if(currentQuantity.innerText>1) { currentQuantity.innerText = parseInt(currentQuantity.innerText)-1
 
 
  currentCard.querySelector(".product-price").innerText= (currentCost.innerText * parseInt(currentQuantity.innerText)).toFixed(2)
  cardTotalCost()
 }
 
}