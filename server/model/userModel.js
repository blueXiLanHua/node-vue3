import mongoose from 'mongoose'
const userSchema =new mongoose.Schema({
  username: String,
  password:String,
  gender:Number,
  role:Number,
  introduction:String,
  avatar:String
});

export const userModel = mongoose.model('user', userSchema);