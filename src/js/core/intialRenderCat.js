import { renderCategory } from "../app/categorys.js"
import { renderProduct } from "../app/products.js"
import { productCatogory, products } from "./data.js"


const intialRender = () => {
   renderCategory(productCatogory)
   renderProduct(products)
}


export default intialRender