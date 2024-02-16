import newsService from '../service/newsService.js'
const newsControler={
  publish:async(req,res)=>{
    const{title,content,type,ok,pic}=req.body
    const newPic=req.file? 'http://127.0.0.1:3000/picuploads/'+req.file.filename:pic
    await newsService.publish(title,content,type,ok,newPic)
    res.send({
      code:'1',
      msg:'保存成功'
    })
  },
  getList:async(req,res)=>{
   const result= await newsService.getList()
   const data= result.map(({_id,title,pic,content,type,ok,editTime})=>{
      return{_id,title,pic,content,type,ok,editTime}
    })
    res.send({
      code:'1',
      msg:'获取成功',
      data
    })
  },
  changeOk:async (req,res)=>{
    const {_id,ok}=req.body
    await newsService.changeOk(_id,ok)
    res.send({
      code:'1',
      msg:'更新成功'
    })
  },
  newsDel:async (req,res)=>{
    const {_id}=req.body
    await newsService.newsDel(_id)
    res.send({
      code:'1',
      msg:'更新成功'
    })
  },
  getNewsItem:async(req,res)=>{
   const result= await newsService.getNewsItem(req.query)
   res.send({
    code:'1',
    msg:'获取新闻成功',
    data:result
   })
  },
  newsUpdata:async (req,res)=>{
    const{_id,title,content,type,ok,pic}=req.body
    const newPic=req.file? 'http://127.0.0.1:3000/picuploads/'+req.file.filename:pic
    await newsService.newsUpdata(_id,title,content,type,ok,newPic)
    res.send({
      code:'1',
      msg:'保存成功'
    })
  }
}

export default newsControler