import { newsModel  } from "../model/newsModel.js"
const webNewsService= {
  getList:()=>{
    return newsModel.find({ok:1})
  },
  getItem:(data)=>{
    return newsModel.findOne(data)
  }
}

export default webNewsService