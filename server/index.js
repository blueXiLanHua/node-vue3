import express from 'express'
import mongooseConfig from './mogooseConfig/mogooseConfig.js'
import {userRouter} from './router/userRouter.js'
import {newsRouter} from './router/newsRouter.js'
import {webNewsRouter} from './router/webNewsRouter.js'
import {productRouter} from './router/productRouter.js'
import {webProductRouter}from './router/webProductsRouter.js'
import isToken from './utils/isToken.js'
import path from 'path'
const __dirname = path.resolve();

const app =express()
mongooseConfig()

app.use(express.static(path.join(__dirname, 'public')));

app.use('/webapi/news',webNewsRouter)
app.use('/webapi/product',webProductRouter)

app.use(isToken)

app.use(express.urlencoded({ extended: false }));// 使用内置的中间件来解析 POST 请求中的 urlencoded 数据
app.use(express.json());// 使用内置的中间件来解析 POST 请求中的 JSON 数据

app.use('/adminapi/user',userRouter)
app.use('/adminapi/news',newsRouter)
app.use('/adminapi/product',productRouter)
app.listen(3000,()=>{
  console.log('开启服务器成功')
})