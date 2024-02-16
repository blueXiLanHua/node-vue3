import {productModel} from '../model/productModel.js'
const productService={
  add:async(productName,easyIntroduction,introduction,productPic)=>{
    return productModel.create({productName,easyIntroduction,introduction,productPic,editTime:new Date()})
  },
  getList:async()=>{
    return productModel.find({})
  },
  delProductItem:async(_id)=>{
    return productModel.deleteOne({_id})
  },
  getItem:async(_id)=>{
    return productModel.findOne({_id})
  },
  updataItem:async(_id,productName,easyIntroduction,introduction,productPic)=>{
    return productModel.updateOne({_id},{productName,easyIntroduction,introduction,productPic,editTime:new Date()})
  }
}

export default productService