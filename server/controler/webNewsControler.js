import webNewsService from '../service/webNewsService.js'
const webNewsControler={
  getList:async(req,res)=>{
   const result= await webNewsService.getList()
   res.send({
    code:'1',
    msg:'获取成功',
    data:result
   })
  },
  getItem:async(req,res)=>{
    const result=await webNewsService.getItem(req.query)
    res.send({
      code:'1',
      msg:'获取成功',
      data:result
    })
  }
}

export default webNewsControler