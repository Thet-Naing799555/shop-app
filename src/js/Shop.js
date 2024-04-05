import intialRender from "./core/intialRenderCat.js";
import listenner from "./core/listenner.js";








class Shop {
  init () {
    console.log("app is Starting");
    intialRender()
    listenner()
  }
}

export default Shop