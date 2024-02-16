import { productModel  } from "../model/productModel.js"
const webProductService= {
  getList:()=>{
    return productModel.find()
  },
}

export default webProductService