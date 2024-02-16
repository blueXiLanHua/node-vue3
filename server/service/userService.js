import {userModel} from '../model/userModel.js'

export const userService={
  add:(username,password,role,gender,introduction,avatar)=>{
    return userModel.create({username,password,role,gender,introduction,avatar})
  },
  find:async(username,password)=>{
    return userModel.findOne({username,password})
  },
  change:async(_id,username,gender,introduction,avatar,role)=>{
    return userModel.updateOne({_id},{username,gender,introduction,avatar,role})
  },
  list:async()=>{
    return userModel.find()
  },
  dellist:async(data)=>{
   return userModel.deleteOne(data)
  },
  uploadUserInfo:async(_id,username,password,gender,introduction,avatar,role)=>{
    return userModel.updateOne({_id},{username,password,gender,introduction,avatar,role})
  }
}