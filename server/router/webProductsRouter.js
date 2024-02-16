import express from 'express'
import webProductControler from '../controler/webProductControler.js'
export const webProductRouter=express.Router()
webProductRouter.get('/getlist',webProductControler.getList)