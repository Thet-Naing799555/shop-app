
import Swal from "sweetalert2"
import { cardTotal, cardTotalCost } from "./products";
export const cardDelehandler = (event) => {
    if(event.target.classList.contains("card-dele-btn")) {
       const currentCard = event.target.closest(".card-item")
       

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
          
        }
      });
    }
}
