import {newsModel} from '../model/newsModel.js'
const newsService={
  publish:async(title,content,type,ok,pic)=>{
    return newsModel.create({title,content,type,ok,pic,editTime:new Date()})
  },
  getList:async()=>{
    return newsModel.find({})
  },
  changeOk:async(_id,ok)=>{
    return newsModel.updateOne({_id},{ok})
  },
  newsDel:(_id)=>{
    return newsModel.deleteOne({_id})
  },
  getNewsItem:(_id)=>{
    return newsModel.findOne({_id})
  },
  newsUpdata:(_id,title,content,type,ok,pic)=>{
    return newsModel.updateOne({_id},{title,content,type,ok,pic,editTime:new Date()})
  }
}

export default newsService