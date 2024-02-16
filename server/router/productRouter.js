import express from 'express'
import multer from 'multer'
import productControler from '../controler/productControler.js'
const upload = multer({ dest: 'public/productuploads' })
export const productRouter=express.Router()
productRouter.post('/add',upload.single('file'),productControler.add)
productRouter.get('/getList',productControler.getList)

productRouter.delete('/delProductItem',productControler.delProductItem)
productRouter.get('/getItem',productControler.getItem)

productRouter.post('/updataItem',upload.single('file'),productControler.updataItem)