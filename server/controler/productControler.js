import productService from '../service/productService.js'
const productControler={
  add:async (req,res)=>{
    const {productName,easyIntroduction,introduction,productPic}=req.body
    const newProductPic=req.file? 'http://127.0.0.1:3000/productuploads/'+req.file.filename:productPic
    await productService.add(productName,easyIntroduction,introduction,newProductPic)
    res.send({
      code:'1',
      msg:'添加成功'
    })
  },
  getList:async(req,res)=>{
    const result=await productService.getList()
    res.send({
      code:'1',
      msg:'获取成功',
      data:result
    })
  },
  delProductItem:async(req,res)=>{
     await productService.delProductItem(req.body)
     res.send({
      code:'1',
      msg:'删除成功'
     })
  },
  getItem:async(req,res)=>{
    const result=await productService.getItem(req.query)
    res.send({
      code:'1',
      msg:'获取成功',
      data:result
     })
  },
  updataItem:async (req,res)=>{
    const {_id,productName,easyIntroduction,introduction,productPic}=req.body
    const newProductPic=req.file? 'http://127.0.0.1:3000/productuploads/'+req.file.filename:productPic
    await productService.updataItem(_id,productName,easyIntroduction,introduction,newProductPic)
    res.send({
      code:'1',
      msg:'添加成功'
    })
  },
}

export default productControler