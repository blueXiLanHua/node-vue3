import mongoose from 'mongoose'
const newsSchema =new mongoose.Schema({
  title: String,
  pic:String,
  content:String,
  type:Number,
  ok:Number,
  editTime:Date
});

export const newsModel = mongoose.model('news', newsSchema);