import express from 'express'
import {userControler} from '../controler/userControler.js';
import multer from 'multer'
const upload = multer({ dest: 'public/avataruploads' })

export const userRouter=express.Router()
userRouter.post('/login',userControler.login)
userRouter.post('/upload',upload.single('file'),userControler.upload)
userRouter.post('/add',upload.single('file'),userControler.add)
userRouter.get('/list',userControler.list)
userRouter.delete('/dellist',userControler.dellist)
userRouter.post('/uploadUserInfo',userControler.uploadUserInfo)

