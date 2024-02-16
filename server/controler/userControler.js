import {userService} from '../service/userService.js'
import jwt from '../utils/jwt.js'

export const userControler={
  login:async (req,res)=>{
    const {username,password}=req.body
    const result = await userService.find(username,password)
    if(result){
      const {gender,introduction,role,avatar,_id}=result
      const token=jwt.generate({_id})
      res.setHeader('authorization', token);
      res.send({
        code:'1',
        msg:'登陆成功',
        data:{
          username,
          gender,
          introduction,
          role,
          avatar
        }
      })
    }else{
      res.status(400).send({
        code:'-1',
        msg:'用户密码不匹配'
      })
    }
  },

  upload:async(req,res)=>{
    const token =req.headers.authorization
    const payload= jwt.verify(token)
    const {_id}=payload
    const {username,gender,introduction,avatar,role} =req.body
    const genderNum=parseInt(gender)
    const newavatar=req.file?`http://127.0.0.1:3000/avataruploads/${req.file.filename}`:avatar
    await userService.change(_id,username,genderNum,introduction,newavatar,role)
    res.send({
      code:'1',
      msg:'更新成功',
      data:{
        username,
        gender:Number(gender),
        introduction,
        avatar:newavatar,
        role:Number(role)
      }
    })
  },

  add:async (req,res)=>{
    const {username,gender,password,introduction,avatar,role} =req.body
    const genderNum=parseInt(gender)
    const newavatar=req.file?`http://127.0.0.1:3000/avataruploads/${req.file.filename}`:avatar
    await userService.add(username,password,role,genderNum,introduction,newavatar)
    res.send({
      code:'1',
      msg:'添加成功',
    })
  },
  list:async(req,res)=>{
    const result=await userService.list()
    res.send({
      code:'1',
      msg:'获取信息成功',
      data:result
    })
  },
  dellist:async(req,res)=>{
    await userService.dellist(req.query)
    res.send({
      code:'1',
      msg:'删除成功',
    })
  },
  uploadUserInfo:async (req,res)=>{
    const {username,password,gender,introduction,avatar,role,_id} =req.body
    const genderNum=parseInt(gender)
    const newavatar=req.file?`http://127.0.0.1:3000/avataruploads/${req.file.filename}`:avatar
    await userService.uploadUserInfo(_id,username,password,genderNum,introduction,newavatar,role)
    res.send({
      code:'1',
      msg:'更新成功',
    })
  }
}

