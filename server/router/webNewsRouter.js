import express from 'express'
import webNewsControler from '../controler/webNewsControler.js'
export const webNewsRouter=express.Router()
webNewsRouter.get('/getlist',webNewsControler.getList)
webNewsRouter.get('/getItem',webNewsControler.getItem)