import webProductService from '../service/webProductService.js'
const webProductControler={
  getList:async(req,res)=>{
   const result= await webProductService.getList()
   res.send({
    code:'1',
    msg:'获取成功',
    data:result
   })
  },
}

export default webProductControler