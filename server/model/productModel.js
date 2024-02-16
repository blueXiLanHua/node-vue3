import mongoose from 'mongoose'
const productSchema =new mongoose.Schema({
  productName:String,
  easyIntroduction:String,
  introduction:String,
  productPic:String,
  editTime:Date
});

export const productModel = mongoose.model('product', productSchema);