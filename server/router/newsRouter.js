import express from 'express'
import multer from 'multer'
import newsControler from '../controler/newsControler.js'
const upload = multer({ dest: 'public/picuploads' })

export const newsRouter=express.Router()
newsRouter.post('/publish',upload.single('file'),newsControler.publish)
newsRouter.get('/getlist',newsControler.getList)
newsRouter.get('/getnewsItem',newsControler.getNewsItem)
newsRouter.post('/changeOk',newsControler.changeOk)
newsRouter.delete('/newsDel',newsControler.newsDel)

newsRouter.post('/newsUpdata',upload.single('file'),newsControler.newsUpdata)
